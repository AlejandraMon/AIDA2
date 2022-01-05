import React from "react";
import { Text, View, ScrollView } from 'react-native';
import stylescards from "../../../styles/cards";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PerfilIdContainer = () => {
    //const {id} = useParams()
    const id = 1;
    const [datos, setDatos] = React.useState([])


    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://eleazartech.0fees.us/api/result/result_iduser.php?iduser=${id}&idmdata=${id}`)
        const dataj = await data.json()
        setDatos(dataj)
    }
    let gen = datos.score;
    let arr = datos.arrhythmia;
    let hi = datos.hyper;
    let ta = datos.heartattack;
    let nin = datos.none;

    let gen2 = 100 - gen;
    let arr2 = 100 - arr;
    let hi2 = 100 - hi;
    let ta2 = 100 - ta;
    let nin2 = 100 - nin;


    return (
        <ScrollView style={stylescards.div}>
            <Text style={stylescards.textTitle2}>Número de evaluación: {datos.number}</Text>
            <View
                style={stylescards.containerC2}>
                <View style={stylescards.flex}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>{datos.score} %</Text>
                        <Text style={stylescards.colorText}>General </Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="exclamation"
                            color="#008b8b"
                            size={35}></FontAwesome>
                    </View>
                </View>
                <View style={stylescards.flex}>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#008b8b',
                            marginTop: 10,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            //width: `${gen}%`,
                        }}>
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#d3d3d3',
                            marginTop: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            //width: `${gen2}%`,
                        }}>
                    </View>
                </View>
            </View>

            <View
                style={stylescards.containerC2}>
                <View style={stylescards.flex}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>{datos.arrhythmia} %</Text>
                        <Text style={stylescards.colorText}>Arritmia</Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="heart"
                            color="#483d8b"
                            size={35}></FontAwesome>
                    </View>
                </View>
                <View style={stylescards.flex}>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#483d8b',
                            marginTop: 10,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            //width: `${arr}%`,
                        }}>
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#d3d3d3',
                            marginTop: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            //width: `${arr2}%`,
                        }}>
                    </View>
                </View>
            </View>

            <View
                style={stylescards.containerC2}>
                <View style={stylescards.flex}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>{datos.hyper} %</Text>
                        <Text style={stylescards.colorText}>Hipertensión</Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="stethoscope"
                            color="#cd5c5c"
                            size={35}></FontAwesome>
                    </View>
                </View>
                <View style={stylescards.flex}>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#cd5c5c',
                            marginTop: 10,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            //width: `${hi}%`,
                        }}>
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#d3d3d3',
                            marginTop: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            //width: `${hi2}%`,
                        }}>
                    </View>
                </View>
            </View>

            <View
                style={stylescards.containerC2}>
                <View style={stylescards.flex}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>{datos.heartattack} %</Text>
                        <Text style={stylescards.colorText}>Taquicardia</Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="heartbeat"
                            color="#4682b4"
                            size={35}></FontAwesome>
                    </View>
                </View>
                <View style={stylescards.flex}>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#4682b4',
                            marginTop: 10,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            //width: `${ta}%`,
                        }}>
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#d3d3d3',
                            marginTop: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            //width: `${ta2}%`,
                        }}>
                    </View>
                </View>
            </View>

            <View
                style={stylescards.containerC2}>
                <View style={stylescards.flex}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>{datos.none} %</Text>
                        <Text style={stylescards.colorText}>Ninguno</Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="thumbs-o-up"
                            color="#3cb371"
                            size={35}></FontAwesome>
                    </View>
                </View>
                <View style={stylescards.flex}>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#3cb371',
                            marginTop: 10,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            //width: `${nin}%`,
                        }}>
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            backgroundColor: '#d3d3d3',
                            marginTop: 10,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                            //width: `${nin2}%`,
                        }}>
                    </View>
                </View>
            </View>

            
        </ScrollView>
    )
}

export default PerfilIdContainer;