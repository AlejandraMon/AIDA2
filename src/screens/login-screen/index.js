import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button, Alert, Image,ScrollView } from 'react-native';
import styles from './../../styles/styles';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../../helpers/context";
import Users from "../../services/users";


export function Login({ navigation }) {
    const [data, setData] = React.useState({
        user: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                user: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                user: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    }
    const handlePasswordChange = (pass) => {
        if (pass.trim().length >= 8) {
            setData({
                ...data,
                password: pass,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: pass,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (user, password) => {
        const foundUser = Users.filter(item => {
            return user == item.username && password == item.password;
        }
        );
        

        if (data.user.length == 0 || data.password.length == 0) {
            Alert.alert('Aviso', 'Nombre de usuario y contraseña no pueden quedar vacios', [
                { text: 'Reintentar' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Datos incorrectos', 'El usuario o la contraseña no son válidos', [
                { text: 'Aceptar' }
            ]);
            return;
        }

        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1e90ff' barStyle="light-content"></StatusBar>

            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenid@!</Text>
            </View>

            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">

                <Text style={styles.text_footer}>Usuario</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}></FontAwesome>
                    <TextInput
                        placeholder="Nombre de usuario"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}></TextInput>
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
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Mínimo 4 caracteres</Text>
                    </Animatable.View>
                }

                <Text
                    style={[styles.text_footer, { marginTop: 35 }]}>Contraseña</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}></Feather>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(pass) => handlePasswordChange(pass)}></TextInput>
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
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Mínimo 8 caracteres</Text>
                    </Animatable.View>
                }

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn}
                        onPress={() => { loginHandle(data.user, data.password) }}>
                        <Text style={styles.textSign}>Acceder</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Registro nuevo')}
                    style={[styles.signIn, {
                        borderColor: '#1e90ff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
                    <Text style={[styles.textSign, {
                        color: '#1e90ff'
                    }]}> Crear cuenta </Text>

                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

