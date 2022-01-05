import React from "react";
import {View, Text, TextInput, TouchableOpacity, Button, Alert,ScrollView} from 'react-native';
import styles from '../../styles/styles';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from "expo-status-bar";


export function DataUser() {
    
    const [data, setData] = React.useState({
        sex: 0,
        col:0,
        glucosa:0,
        cintura:0,
        ldl:0,
        esta:0,
    });
    
    const textInputChangename = (sexo) =>{
        if(sexo.length != 0){
            setData({
                ...data,
                sex: sexo,
            });
        }else{
            setData({
                ...data,
                sex: sexoname,
            });
        }
    }

    const textInputChangelast = (cole) =>{
        if(cole.length != 0 ){
            setData({
                ...data,
                col:cole,
            });
        }else{
            setData({
                ...data,
                col:cole,
            });
        }
    }

    const textInputChangeemail = (glu) =>{
        if(glu.length != 0 ){
            setData({
                ...data,
                glucosa:glu,
            });
        }else{
            setData({
                ...data,
                glucosa:glu,
            });
        }
    }

    const textInputChangephone = (cin) =>{
        if(cin.length != 0 ){
            setData({
                ...data,
                cintura:cin,
            });
        }else{
            setData({
                ...data,
                cintura:cin,
            });
        }
    }

    const textInputChangebirt = (ld) =>{
        if(ld.length != 0 ){
            setData({
                ...data,
                ldl:ld,
            });
        }else{
            setData({
                ...data,
                ldl:ld,
            });
        }
    }
    const textInputChangebir = (es) =>{
        if(es.length != 0 ){
            setData({
                ...data,
                esta:es,
            });
        }else{
            setData({
                ...data,
                esta:es,
            });
        }
    }

    const registrar = async(sexo, coles,glu,cin,ld,es)=>{
        var api = "http://eleazartech.0fees.us/api/manual/insertar.php";
        if(data.sex != 0 || data.col != 0){
            try{
                let data = {

                    "age": 0,
                    "sex": sexo,
                    "chol": coles,
                    "glucose": glu,
                    "imc": 0,
                    "waist": cin,
                    "ldl": ld,
                    "pressure": es,
                    "smoker": 0,
                    "heartattack": 0,
                    "diabetes": 0,
                    "palpitations": 0,
                    "fatigue": 0,
                    "tired": 0,
                    "dizzines": 0,
                    "chest": 0,
                    "head": 0,
                    "breaths": 0,
                    "sickness": 0,
                    "abdomen": 0,
                    "sweating": 0,
                    "threw": 0,
                    "hyper": 0,
                    "prediabetes": 0,
                    "iduser": 1
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
                <Text style={styles.text_header}>Ingresa datos médicos</Text>
            </View>
            <Animatable.View style={styles.footerr}
            animation="fadeInUpBig">

                <Text style={styles.text_footer}>Sexo</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "user-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="0= Mujer, 1= Hombre"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(sexo)=>textInputChangename(sexo)}></TextInput>
                    
                </View>

                <Text style={styles.text_footer}>Colesterol HDL</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "user-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="80"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(cole)=>textInputChangelast(cole)}></TextInput>
                    
                </View>

                <Text style={styles.text_footer}>Glucosa</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "envelope-o"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="110"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(glu)=>textInputChangeemail(glu)}></TextInput>
                </View>

                <Text style={styles.text_footer}>Medida cintura</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "mobile"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="32"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(cin)=>textInputChangephone(cin)}></TextInput>
                </View>

                <Text style={styles.text_footer}>Colesterol LDL</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "calendar"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="60"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(ld)=>textInputChangebirt(ld)}></TextInput>
                </View>
                <Text style={styles.text_footer}>Estatura</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name= "calendar"
                    color="#05375a"
                    size={20}></FontAwesome>
                    <TextInput
                    placeholder="1.55"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(es)=>textInputChangebir(es)}></TextInput>
                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={()=>{registrar(data.sex,data.col,data.glucosa,data.cintura,data.ldl,data.esta)}}>
                    <Text style={styles.textSign}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    );
}
