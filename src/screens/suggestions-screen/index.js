import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SuggestionContainer from './components/suggestion';

export function SuggestionsScreen(){
    return(
        <View style={{flex:1, backgroundColor: '#fff', paddingTop:5,paddingHorizontal:15,}}>
            <StatusBar backgroundColor="#1e90ff" barStyle="light-content"></StatusBar>
            <Text style={{fontSize:22, 
                paddingVertical:15,
                textAlign:'center',
                paddingBottom:5}}>Sugerencias para la salud</Text>
            <SuggestionContainer></SuggestionContainer>
        </View>
    )
}