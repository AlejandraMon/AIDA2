import React from "react";
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { GetUserId } from "../../../services";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profile from "../../../styles/profile";

class Infor extends React.Component {
    
    render() {
        return (
            <View style={profile.container}>
                <View>
                    <Image
                        source={require('./../../../../assets/ito2.png')}
                    />
                </View>
                <View style={profile.containerText}>

                    <Text style={profile.text}> Tecnológico Nacional de México</Text>
                </View>
                <View style={profile.containerText}>
                    
                    <Text style={profile.text2}>Elaborado por:</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="user"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.textItal2}>I.S.C Alejandra Montiel de Jesús</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="user"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.textItal2}>Dr. José Luis Sánchez Cervantes</Text>
                </View>
                
            </View>
        )
    }
}


export default Infor;