import React from "react";
import { Text, View, ScrollView, Image } from 'react-native';
import wear from "../../../styles/wear";

const Wearable = () => {
    //const {id} = useParams()
    const id = 1;
    const [datos, setEquipo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://eleazartech.0fees.us/api/wearable/consulta_iduser.php?iduser=${id}`)
        const dataj = await data.json()
        setEquipo(dataj)
    }

    return (
        <ScrollView style={wear.container}>
            <View style={wear.containerImg}>
                <Image
                    
                    source={require('./../../../../assets/6.png')}
                />
            </View>
            <View style={wear.containerText}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    
                    <Text style={wear.textBold}>{datos.name}</Text>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={wear.text}>Serie: </Text>
                    <Text style={wear.textBold2}> {datos.serie}</Text>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={wear.text}>Modelo: </Text>
                    <Text style={{
                        fontSize: 18, color: '#000',
                        fontWeight: 'bold'
                    }}>{datos.model}</Text>
                </View>
            </View>
            <View style={wear.containerText2}>
                <Text style={wear.text2}>Fecha de enlace:</Text>
                <Text style={wear.textItal}> {datos.date}</Text>
            </View>
            <View style={wear.containerText3}>
                <View>
                    <Text style={wear.subTitle}>Características: </Text>
                    <Text style={wear.text3}>{datos.character}</Text>
                </View>
                <View>
                    <Text style={wear.subTitle}>Descripción: </Text>
                    <Text style={wear.text3}>{datos.descriptions}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default Wearable;