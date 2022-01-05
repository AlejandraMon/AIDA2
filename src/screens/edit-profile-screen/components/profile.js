import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, NativeEventEmitter } from 'react-native';
import { GetUserId } from "../../../services";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profile from "../../../styles/profile";
import form from "../../../styles/form";
import Feather from 'react-native-vector-icons/Feather';

class EditProfile extends React.Component {
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
        
        const textInputChangenombre = (name)=>{  
            if(name.lenght != 0){
                datos.name = name   
            }else{
                datos.name = datos.name
            }
        }
        const textInputChangelast = (last)=>{  
            if(last.lenght != 0){
                datos.last_name = last   
            }else{
                datos.last_name = datos.last_name
            }
        }
        const textInputChangeemail = (email)=>{  
            if(email.lenght != 0){
                datos.email = email   
            }else{
                datos.email = datos.email
            }
        }
        const textInputChangephone = (phone)=>{  
            if(phone.lenght != 0){
                datos.phone = phone   
            }else{
                datos.phone = datos.phone
            }
        }
        const textInputChangebirt = (birt)=>{  
            if(birt.lenght != 0){
                datos.birth = birt   
            }else{
                datos.birth = datos.birth
            }
        }
        const textInputChangedir = (direc)=>{  
            if(direc.lenght != 0){
                datos.adress = direc   
            }else{
                datos.adress = datos.adress
            }
        }
        const textInputChangeemp = (ocu)=>{  
            if(ocu.lenght != 0){
                datos.employment = ocu   
            }else{
                datos.employment = datos.employment
            }
        }
        const textInputChangeusr = (user)=>{  
            if(user.lenght != 0){
                datos.username = user   
            }else{
                datos.username = datos.username
            }
        }
        const textInputChangepass = (pass)=>{  
            if(pass.lenght != 0){
                datos.pass = pass   
            }else{
                datos.pass = datos.pass
            }
        }
        

        const actualizar=(name,last, email, phone,birt,direc,ocu,user,pass)=>{
            var api= "http://eleazartech.0fees.us/api/usuario/actualizar.php";
            //Alert.alert('Alerta', 'Resultado: ' + name+last+email+phone+birt+direc+ocu+user+pass, [{text: 'Aceptar'}]);

            try{
                let data = {
                    "iduser": 1,
                    "name": name,
                    "last_name": last,
                    "email": email,
                    "phone": phone,
                    "birth": birt,
                    "adress": direc,
                    "employment": ocu,
                    "status": 1,
                    "username": user,
                    "pass": pass
                }
                fetch(api,{
                    method:'PUT',
                    headers:{
                        'Content-type':'text/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response=>response.json()
                )
                .then(data=>{
                    var r = (data.status)
                    Alert.alert('Alerta', 'Resultado: '+ r , [{text: 'Aceptar'}]);
                     console.log(r)
                })

            }catch(error){}
        }   

        const { isFetch, datos } = this.state
        if (isFetch) {
            return (
                <Text style={profile.title}>Buscando...</Text>
            )
        }
        return (
            <View style={profile.container2}>
                <View style={{ alignItems: 'center' }}>
                    <Image

                        source={require('./../../../../assets/avatar.png')}
                    />
                </View>
                <ScrollView >

                    <View>
                        <Text style={form.label}>Nombre (s):</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="user"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.name}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(name) => textInputChangenombre(name)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Apellidos:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="user"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.last_name}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(last) => textInputChangelast(last)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Correo electrónico:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="envelope"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.email}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(email) => textInputChange(email)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Teléfono:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="phone"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.phone}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(phone) => textInputChangephone(phone)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Fecha de nacimiento:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="calendar-check-o"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.birth}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(birt) => textInputChangebirt(birt)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Dirección:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="map-marker"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.adress}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(direc) => textInputChangedir(direc)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Ocupación:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="briefcase"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.employment}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(ocu) => textInputChangeocu(ocu)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Nombre de usuario:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="user-circle-o"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.username}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(user) => textInputChangeusr(user)}></TextInput>
                        </View>
                    </View>

                    <View>
                        <Text style={form.label}>Contraseña:</Text>
                        <View style={form.input}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}></FontAwesome>
                            <TextInput
                                placeholder={datos.pass}
                                style={form.textInput}
                                autoCapitalize="none"
                                onChangeText={(pass) => textInputChangepass(pass)}></TextInput>
                        </View>
                        
                    </View>

                    <View style={profile.buton}>
                        <TouchableOpacity
                        onPress={()=>actualizar(datos.name,datos.last_name,datos.email,datos.phone,
                        datos.birth,datos.adress,datos.employment,datos.username,datos.pass)}>
                        <Text style={profile.textButon}>Actualizar</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        )
    }
}


export default EditProfile;