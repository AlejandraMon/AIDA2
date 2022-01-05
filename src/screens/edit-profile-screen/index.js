import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EditProfile from "./components/profile";
import profile from "../../styles/profile";

export function EditProfileScreen(props) {
    return (
        <View style={profile.containerIndex}>
            <Text style={profile.title}>Configuración</Text>
            <EditProfile></EditProfile>
        </View>
    )
}