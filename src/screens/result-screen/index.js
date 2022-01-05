import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import ECV from './components/ecv';
import stylescards from "../../styles/cards";


export function ResultScreen(){
    return(
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar backgroundColor="#1e90ff" barStyle="light-content"></StatusBar>
            <Text style={stylescards.textTitle}>Resultados de la detección</Text>
            <ECV></ECV>
            
        </View>
    )
}