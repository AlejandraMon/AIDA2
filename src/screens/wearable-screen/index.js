import React from "react";
import { View, Text } from "react-native";
import Wearable from "./components/wear";
import wear from "../../styles/wear";

export function WearableScreen(){
    return(
        <View style={wear.containerIndex}>
            <Text style={wear.title}>Dispositivo conectado</Text>
            <Wearable></Wearable>
        </View>
    )
}