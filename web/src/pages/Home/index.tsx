import React from 'react';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Seu masrketplace de coleta de residuos</h1>
                    <p>ajudamentos pessoas a encontrarem pontos de coleta de froma eficiente.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>

    )
}
export default Home;