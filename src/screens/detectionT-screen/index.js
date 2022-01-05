import React from "react";
import { View, Text } from "react-native";
import { FormR } from "./components/random";
import stylescards from "../../styles/cards";
import { StatusBar } from "expo-status-bar";
import form from "../../styles/form";
import { Form } from "formik";


export function DetectionTScreen(){
    return(
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar backgroundColor='#1e90ff' barStyle="light-content"></StatusBar>
            {/* <Text style={form.title}>Detección de taquicardia</Text> */}
            <FormR></FormR>
        </View>
    )
}