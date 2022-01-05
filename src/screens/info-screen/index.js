import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Infor from "./components/info";
import profile from "../../styles/profile";

export function InfoScreen() {
    return (
        <View style={profile.containerIndex2}>
            <Text style={profile.title}>Información general</Text>
            <Infor></Infor>
        </View>
    )
}