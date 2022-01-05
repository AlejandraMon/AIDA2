import React from "react";
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { GetUserId } from "../../../services";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profile from "../../../styles/profile";

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            datos: [],
            isFetch: true,
        }
    }

    async componentDidMount() {
        const responseJson = await GetUserId()
        this.setState({ datos: responseJson, isFetch: false })
    }
    render() {
        const { isFetch, datos } = this.state
        if (isFetch) {
            return (
                <Text style={profile.title}>Buscando...</Text>
            )
        }
        return (
            <View style={profile.container}>
                <View>
                    <Image
                        source={require('./../../../../assets/avatar.png')}
                    />
                </View>
                <View style={profile.containerText}>

                    <Text style={profile.text}> {datos.name} {datos.last_name}</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="user"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.textItal2}> {datos.email}</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="phone"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.text2}>Teléfono: {datos.phone}</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="calendar"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.text2}>Fecha de nacimiento: {datos.birth}</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="map-marker"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.text2}>Dirección: {datos.adress}</Text>
                </View>

                <View style={profile.containerText}>
                    <FontAwesome
                        name="briefcase"
                        color="#05375a"
                        size={25}></FontAwesome>
                    <Text style={profile.text2}>Ocupación: {datos.employment}</Text>
                </View>
            </View>
        )
    }
}


export default Profile;