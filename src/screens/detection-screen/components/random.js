import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Modal, TouchableOpacity, Button, ScrollView, Alert, Image } from 'react-native';
import form from '../../../styles/form';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Swal from "sweetalert2";
export function FormR(props) {

    const [data, setData] = React.useState({
        edad: 0,
        creatinine: 0,
        old_peak: 0,
        rest_ecf: 0,
        probabilidad: '',
        porcentaje: 0,
        check_textInputChange: false,
    });

    const textInputChange1 = (edad) => {
        if (edad != 0) {
            setData({
                ...data,
                edad: edad,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                edad: edad,
                check_textInputChange: false
            });
        }
    }
    const textInputChange2 = (cre) => {
        if (cre != 0) {
            setData({
                ...data,
                creatinine: cre,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                creatinine: cre,
                check_textInputChange: false
            });
        }
    }
    const textInputChange3 = (old) => {
        if (old != 0) {
            setData({
                ...data,
                old_peak: old,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                old_peak: old,
                check_textInputChange: false
            });
        }
    }
    const textInputChange4 = (rest) => {
        if (rest != 0) {
            setData({
                ...data,
                rest_ecf: rest,

                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                rest_ecf: rest,
                check_textInputChange: false
            });
        }
    }

    const registrar = async (cre, old, rest) => {
        edad = 40;
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            //let res = await fetch('http://162.214.187.236:8000/clasificaRF?edad='+ edad + '&creatinine='+cre+'&old_peak='+ old+'&rest_ecf='+rest + '',config)
            let res = await fetch('http://162.214.187.236:8000/clasificaRF?edad=' + edad + '&creatinine=' + cre + '&old_peak=' + old + '&rest_ecf=' + rest + '', config)
            let json = await res.json()
            let j = json.toString()
            const split = j.split(' ')
            const pro = split[5]
            const por = split[10]
            setData({
                ...data,
                probabilidad: pro,
                porcentaje: por
            });
            console.log(json)
        } catch (error) {
            try {
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
                //let res = await fetch('http://162.214.187.236:8000/clasificaRF?edad='+ edad + '&creatinine='+cre+'&old_peak='+ old+'&rest_ecf='+rest + '',config)
                let res = await fetch('http://162.214.187.236:8000/clasificaSVM?edad=' + edad + '&creatinine=' + cre + '&old_peak=' + old + '&rest_ecf=' + rest + '', config)
                let json = await res.json()
                let j = json.toString()
                const split = j.split(' ')
                const pro = split[5]
                const por = split[10]
                setData({
                    ...data,
                    probabilidad: pro,
                    porcentaje: por
                });
                console.log(json)
            } catch (error) {
                Alert.alert("Aviso", "Por el momento los servidores están ocupados, intenta mas tarde", [
                    {
                      text: "Aceptar",
                      style: "cancel",
                    }
                  ])
                }
             }
         }
    
    let col = true;
    let col2 = true;
    let col3 = true;
    
    let chol = data.porcentaje;
    switch(data.probabilidad){
        case 'No':
            if(chol<60){
                col = null;
            }else if(chol>80){
                col2 = null;
            }else{
                col3 = null;
            }
        break;
        case 'Si':
            if(chol<60){
                col3 = null;
            }else if(chol>80){
                col2 = null;
            }else{
                col = null;
            }
            break;
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <ScrollView style={form.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22
                }}>
                    <View style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <Text style={{
                            marginBottom: 0.5,
                            textAlign: "center",
                            fontSize: 22,

                        }}>Resultado obtenido</Text>
                         {col ? null :
                        <Image
                            source={require('../../../../assets/csad.jpg')}
                            style={{ marginBottom: 20 }}
                        />
                        }{col2 ? null:
                        <Image
                            source={require('../../../../assets/tres.jpg')}
                            style={{ marginBottom: 20 }}
                        />
                    }{col3? null:
                        <Image
                            source={require('../../../../assets/chappy.jpg')}
                            style={{ marginBottom: 20 }}
                        />
                    } 
                        <Text style={{
                            marginBottom: 5,
                            textAlign: "center",
                            fontSize: 26, color: 'blue'
                        }}>  {data.probabilidad}</Text>
                        <Text style={{
                            marginBottom: 25,
                            textAlign: "center",
                            fontSize: 26,
                            color: 'black'
                        }}> Porcentaje:  {data.porcentaje}%</Text>
                        <Pressable
                            style={{
                                borderRadius: 20,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3",
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: 18
                            }}>Aceptar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
            <Text style={{ color: '#000000', paddingTop: 1, fontSize: 18 }}>Los siguientes datos deben ser obtenidos del estudio de electrocardiograma</Text>

            <Text style={form.label}>Creatinina</Text>
            <View style={form.input}>
                <FontAwesome
                    name="tint"
                    color="#05375a"
                    size={20}></FontAwesome>
                <TextInput
                    placeholder="3"
                    style={form.textInput}
                    autoCapitalize="none"
                    onChangeText={(cre) => textInputChange2(cre)}></TextInput>
            </View>

            <Text style={form.label}>Old Peak</Text>
            <View style={form.input}>
                <FontAwesome
                    name="tint"
                    color="#05375a"
                    size={20}></FontAwesome>
                <TextInput
                    placeholder="1"
                    style={form.textInput}
                    autoCapitalize="none"
                    onChangeText={(old) => textInputChange3(old)}></TextInput>
            </View>

            <Text style={form.label}>Rest ECF</Text>
            <View style={form.input}>
                <FontAwesome
                    name="cube"
                    color="#05375a"
                    size={20}></FontAwesome>
                <TextInput
                    placeholder="1"
                    style={form.textInput}
                    autoCapitalize="none"
                    onChangeText={(rest) => textInputChange4(rest)}></TextInput>
            </View>


            <View style={form.buton}>
                <TouchableOpacity
                    onPress={() => {
                        registrar( data.creatinine, data.old_peak, data.rest_ecf), setModalVisible(true)
                    }}>
                    <Text style={form.textButon}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}
