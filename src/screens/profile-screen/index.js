import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Profile from "./components/profile";
import profile from "../../styles/profile";

export function ProfileScreen(props) {
    return (
        <View style={profile.containerIndex2}>
            <Text style={profile.title}>Información del usuario</Text>
            <Profile></Profile>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('Editar perfil') }}
                style={profile.buton}>
                <Text style={profile.textButon}> Modificar datos </Text>

            </TouchableOpacity>

        </View>
    )
}