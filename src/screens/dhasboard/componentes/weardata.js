import React,{ Component } from "react";
import {View,TouchableOpacity,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylescards from "../../../styles/cards";

const WearData = () =>{
    //const {id} = useParams()
    const id = 3;
    const [datos, setEquipo] = React.useState([])

    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async()=>{
        const data = await fetch(`http://eleazartech.0fees.us/api/wearabledata/consulta_iduser.php?iduser=${id}`)
        const dataj = await data.json()
        setEquipo(dataj)
    }

    return(
        <View style={stylescards.div}>
             <View style={stylescards.containerC3}>
                    <View style={stylescards.containerIcon1}>
                        <FontAwesome
                            name="heartbeat"
                            color="#ffffff"
                            size={40}></FontAwesome>
                    </View>
                    <View style={stylescards.containerTextEnd}>
                        <Text style={stylescards.textBold}>{datos.bloodpressure}</Text>
                        <Text style={stylescards.colorText}>Latidos por minuto</Text>
                    </View>
                </View>
                <View style={stylescards.containerC3}>
                    <View style={stylescards.containerIcon2}>
                        <FontAwesome
                            name="stethoscope"
                            color="#ffffff"
                            size={49}></FontAwesome>
                    </View>
                    <View style={stylescards.containerTextEnd}>
                        <Text style={stylescards.textBold}>{datos.heartrate}</Text>
                        <Text style={stylescards.colorText}>mm de Hg</Text>
                    </View>
                </View>
                <View  style={stylescards.containerC3}>
                    <View style={stylescards.containerIcon3}>
                        <FontAwesome
                            name="bicycle"
                            color="#ffffff"
                            size={32}></FontAwesome>
                    </View>
                    <View style={stylescards.containerTextEnd}>
                        <Text style={stylescards.textBold}>{datos.physical}</Text>
                        <Text style={stylescards.colorText}>Minutos de actividad física</Text>
                    </View>
                </View>
        </View>
    )
}

export default WearData;