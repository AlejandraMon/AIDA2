import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import UserData from './componentes/userD';
import Cardio from './componentes/cardio';
import WearData from "./componentes/weardata";
import stylescards from "../../styles/cards";
import TableM from "./componentes/table";
import { UserContext } from "../../contexts";


export function Dashboard() {
  const { user } = useContext(UserContext);

  console.log("User from the provider", user)

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar backgroundColor="#1e90ff" barStyle="light-content"></StatusBar>
            <View style={stylescards.dashTitle}>
                <UserData />
            </View>
            <Text style={stylescards.textTitle}>Datos físicos</Text>
            <WearData></WearData>
            <Text style={stylescards.textTitle}>Datos médicos</Text>
            <TableM></TableM>
        </View>
    )
}