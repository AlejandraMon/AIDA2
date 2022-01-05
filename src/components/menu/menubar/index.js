import React from "react";
import {View} from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../../helpers/context";
import styles from "../../../styles/styles-menu";

export function DrawerContent(props) {

    const paperTheme = useTheme();
    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                            source={require('./../../../../assets/icon.png')}
                            size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>AIDA</Title>
                                <Caption style={styles.caption}>Bienvenid@</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {props.navigation.navigate('Inicio')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="clipboard-list-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Detección ECV"
                            onPress={() => {props.navigation.navigate('Detección de ECV')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="clipboard-list-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Detección arritmia"
                            onPress={() => {props.navigation.navigate('Detección de arritmia')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="clipboard-list-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Detección taquicardia"
                            onPress={() => {props.navigation.navigate('Detección de taquicardia')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="chart-arc" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Resultados"
                            onPress={() => {props.navigation.navigate('Resultados')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="email-alert-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sugerencias"
                            onPress={() => {props.navigation.navigate('Sugerencias')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="watch-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Dispositivos"
                            onPress={() => {props.navigation.navigate('Dispositivos')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="clipboard-list-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Datos médicos"
                            onPress={() => {props.navigation.navigate('Datos')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => {props.navigation.navigate('Perfil')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-edit-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Configuración"
                            onPress={() => {props.navigation.navigate('Editar perfil')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Acerca de nosotros"
                            onPress={() => {props.navigation.navigate('Acerca de')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="logout" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Cerrar sesión"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

