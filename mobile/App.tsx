import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React, { Fragment } from 'react';
import {Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'
import { StyleSheet, Text, View,} from 'react-native';

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });
  if(!fontsLoaded){
    return <AppLoading />
  }


  return (
    <>
      <StatusBar  backgroundColor="transparent" translucent/>
      <Routes />

    </>
    
  );
}


