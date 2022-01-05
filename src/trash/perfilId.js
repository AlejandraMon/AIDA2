import React from "react";
import {Text,View} from 'react-native';

const PerfilIdContainer = () =>{
    //const {id} = useParams()
    const id = 2;
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async()=>{
        const data = await fetch(`http://162.214.187.236/~amj/api/usuario/consulta_id.php?iduser=${id}`)
        const users = await data.json()
        setEquipo(users)
    }

    return(
        <View>
            <Text>{equipo.name}</Text>
        </View>
    )
}

export default PerfilIdContainer;