import React from "react";
import {View, Text, TextInput, TouchableOpacity, Button, Alert,ScrollView} from 'react-native';
import styles from './../../styles/styles';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from "expo-status-bar";


export function RegisterUser() {
    
    const [data, setData] = React.useState({
        name: '',
        lastname:'',
        email:'',
        phone:'',
        birt:'',
        employment:'',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    
    const textInputChangename = (name) =>{
        if(name.length != 0){
            setData({
                ...data,
                name: name,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                name: name,
                check_textInputChange: false
            });
        }
    }

    const textInputChangelast = (last) =>{
        if(last.length != 0 ){
            setData({
                ...data,
                lastname:last,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                lastname:last,
                check_textInputChange: false
            });
        }
    }

    const textInputChangeemail = (email) =>{
        if(email.length != 0 ){
            setData({
                ...data,
                email:email,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                email:email,
                check_textInputChange: false
            });
        }
    }

    const textInputChangephone = (phone) =>{
        if(phone.length != 0 ){
            setData({
                ...data,
                phone:phone,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                phone:phone,
                check_textInputChange: false
            });
        }
    }

    const textInputChangebirt = (date) =>{
        if(date.length != 0 ){
            setData({
                ...data,
                birt:date,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                birt:date,
                check_textInputChange: false
            });
        }
    }

    const textInputChangeemp = (emp) =>{
        if(emp.length != 0 ){
            setData({
                ...data,
                employment:emp,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                employment:emp,
                check_textInputChange: false
            });
        }
    }

    const textInputChangepass = (pass) =>{
        if(pass.length != 0){
            setData({
                ...data,
                password: pass,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                password: pass,
                check_textInputChange: false
            });
        }
    }

    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const registrar = async(name, last,email,phone,date,emp,pass)=>{
        var api = "http://eleazartech.0fees.us/api/usuario/insertar.php";
        if(data.name != 0 || data.password != 0){
            try{
                let data = {
                    "name": name,
                    "last_name": last,
                    "email": email,
                    "phone": phone,
                    "birth": date,
                    "adress": " ",
                    "employment": emp,
                    "status": 1,
                    "username": name,
                    "pass": pass
                }
                fetch(api,{
                    method:'POST',
                    headers:{
                        'Content-type':'text/json'
                    },
                    body:JSON.stringify(data)
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
    }
    return(
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="light-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.text_header}>Ingresa tus datos</Text>
            </View>
            <Animatable.View style={styles.footerr}
            animation="fadeInUpBig">

                <Text style={styles.text_footer}>Nombre (s)</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "user-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="Juan"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(name)=>textInputChangename(name)}></TextInput>
                    {data.check_textInputChange ? 
                    <Animatable.View 
                    animation="bounceIn">
                    <Feather
                    name="check-circle"
                    color="green"
                    size={20}></Feather>
                    </Animatable.View>
                    : null}
                </View>

                <Text style={styles.text_footer}>Apellidos</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "user-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="López"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(last)=>textInputChangelast(last)}></TextInput>
                    
                </View>

                <Text style={styles.text_footer}>Correo electrónico</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "envelope-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="ejemplo@gmail.com"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(email)=>textInputChangeemail(email)}></TextInput>
                </View>

                <Text style={styles.text_footer}>Teléfono</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "mobile"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="010202022"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(phone)=>textInputChangephone(phone)}></TextInput>
                </View>

                <Text style={styles.text_footer}>Fecha de nacimiento</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "calendar"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="01-01-2020"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(date)=>textInputChangebirt(date)}></TextInput>
                </View>

                <Text style={styles.text_footer}>Ocupación</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "briefcase"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="Estudiante"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(emp)=>textInputChangeemp(emp)}></TextInput>
                </View>

                <Text
                style={styles.text_footer}>Contraseña</Text>
                <View style={styles.action}>
                    <Feather
                    name= "lock"
                    color="#05375a"
                    size={20}></Feather>
                    <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(pass)=>textInputChangepass(pass)}></TextInput>
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                    <Feather
                    name="eye-off"
                    color="grey"
                    size={20}></Feather>
                    :
                    <Feather
                    name="eye"
                    color="grey"
                    size={20}></Feather>
                    }
                    </TouchableOpacity>
                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={()=>{registrar(data.name, data.lastname, data.email,data.phone,data.birt,data.employment,data.password)}}>
                    <Text style={styles.textSign}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    );
}
