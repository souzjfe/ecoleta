import { Request, Response } from 'express';
import knex from '../database/connection';

export default class PointsController {
    async index(request:Request, response: Response){
        const { city, uf, items} = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id',parsedItems)
            .where('city', String(city))
            .where('uf',String(uf))
            .distinct()
            .select('points.*');

        return response.json(points);
    }
        
    async show(request:Request, response: Response){
        //const id = request.params.id;
        const { id } = request.params; // como o nome da var 'e igual ao nome que esta dentro do prarametro da pra fazer assim

        const point = await knex('points').where('id',id).first();

        if (!point){
            return response.status(400).json({massage: 'Point not found.'});
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');


        return response.json({point, items});
    }
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            wpp,
            city,
            uf,
            longitude,
            latitude,
            items
        } = request.body;
        console.log(request.body);

        //const trx =await knex.transaction();
        const point = {
            image: 'https://uploads.metropoles.com/wp-content/uploads/2020/03/20110618/mercado-durante-o-corona.jpeg',
            name,
            email,
            wpp,
            city,
            uf,
            longitude,
            latitude,
        }
        const insertedIds = await knex('points').insert(point);
        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
            return {
                point_id,
                item_id
            }
        });
        await knex('point_items').insert(pointItems);
        return response.json({ 
            id:point_id,
            ...point,
        });
        
    //await trx.commit();
     }

}
