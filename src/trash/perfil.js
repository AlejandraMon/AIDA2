import React from 'react';
import { Text } from 'react-native';

class PerfilContainer extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            datos: [],
            isFetch: true,
        }
    }

    componentDidMount(){
        fetch('http://162.214.187.236/~amj/api/usuario/consulta.php')
        .then(response => response.json())
        .then(usersJson =>this.setState({datos: usersJson.datos, isFetch:false}))
    }

    render(){
        if(this.state.isFetch){
            return <Text>Buscando...</Text>
        }
        
        const name = this.state.datos[1].name
        const email = this.state.datos[1].email
        const last = this.state.datos[1].last_name
        return(
        <Text>{name},
        {email},
        {last}</Text>
        ) 
    }
}

export default PerfilContainer;