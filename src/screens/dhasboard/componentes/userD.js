import React from "react";
import {Text,View} from 'react-native';
import { GetUserId } from "../../../services";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylescards from "../../../styles/cards";

class UserData extends React.Component{
    constructor(props){
        super(props)

        this.state={
            datos: [],
            isFetch:true,
        }
    }

    async componentDidMount(){
        const responseJson = await GetUserId()
        this.setState({datos: responseJson, isFetch:false})
}
render(){
    const {isFetch, datos} = this.state
    if(isFetch){
        return(
            <Text>Buscando...</Text>
        )
    }
    return(
        <View style={stylescards.containerUser}>
            <FontAwesome
                            name="user"
                            color="#000000"
                            size={49}></FontAwesome>
            <Text style={stylescards.textUser}>Hola {datos.name}-{datos.last_name}</Text>
        </View>
    )
}
}


export default UserData;