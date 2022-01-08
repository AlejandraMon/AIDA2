import React, { useContext } from "react";
import { Alert, Text, View } from 'react-native';
import stylescards from "../../../styles/cards";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserService } from "../../../services/users";
import { UserContext } from "../../../contexts";

const TableM = () => {
    //const {id} = useParams()
  const { user } = useContext(UserContext)

    const [datos, setEquipo] = React.useState([])

    React.useEffect(() => {
        if(user === null) return 
        obtenerDatos()
    }, [user])

    const obtenerDatos = async () => {
      try {
        const medicData = await UserService.getMedicData(user?.iduser)
        setEquipo(medicData)
      } catch (error) {
        Alert.alert(
          'Error',
          error.message || "Ocurrió un error",
          [{text: 'Aceptar'}]
        );
        setEquipo([])
        console.error(error);
      }
    }
    //colesterol HDL
    let col = true;
    let col2 = true;
    let col3 = true;
    let chol = datos.chol;
    if(chol<40){
        col3 = null;
    }else if(chol>60){
        col2 = null;
    }else{
        col = null;
    }
    //glucosa
    let glu = true;
    let glu2 = true;
    let glu3 = true;
    let gluc = datos.glucose;
    if(gluc>150){
        glu3 = null;
    }else if(gluc<80){
        glu2 = null;
    }else{
        glu = null;
    }
    //colesterol LDL
    let coll = true;
    let coll2 = true;
    let coll3 = true;
    let ldl = datos.ldl;
    if(ldl>150){
        coll3 = null;
    }else if(ldl<100){
        coll2 = null;
    }else{
        coll = null;
    }
    //IMC
    let im = true;
    let im2 = true;
    let im3 = true;
    let imc = datos.imc;
    if(imc>30){
        im3 = null;
    }else if(imc<18){
        im2 = null;
    }else{
        im = null;
    }
    //Medida cintura
    let w = true;
    let w2 = true;
    let w3 = true;
    let wa = datos.waist;
    if(wa>88){
        w3 = null;
    }else if(wa>80){
        w2 = null;
    }else{
        w = null;
    }

    

    return (
        <View style={stylescards.table}>
            <View style={stylescards.listWrapperTitle}>
                <Text style={stylescards.row1}>Nombre</Text>
                <Text style={stylescards.row1}>Valor</Text>
                <Text style={stylescards.row1}>Resultado</Text>
            </View>
            <View style={stylescards.listWrapper}>
                <Text style={stylescards.row}>Colesterol HDL</Text>
                <Text style={stylescards.row}>{datos.chol}</Text>
                <Text style={stylescards.row}>
                    {col ? null :
                    <FontAwesome
                        name="circle"
                        color="#228b22"
                        size={28}
                    ></FontAwesome>
                    }{col2 ? null:
                        <FontAwesome
                        name="circle"
                        color="#ffd700"
                        size={28}
                    ></FontAwesome>
                    }{col3? null:
                        <FontAwesome
                            name="circle"
                            color="#ff0000"
                            size={28}
                        ></FontAwesome>
                        }
                </Text>
            </View>
            <View style={stylescards.listWrapper}>
                <Text style={stylescards.row}>Glucosa</Text>
                <Text style={stylescards.row}>{datos.glucose}</Text>
                <Text style={stylescards.row}>
                {glu ? null :
                    <FontAwesome
                        name="circle"
                        color="#228b22"
                        size={28}
                    ></FontAwesome>
                    }{glu2 ? null:
                        <FontAwesome
                        name="circle"
                        color="#ffd700"
                        size={28}
                    ></FontAwesome>
                    }{glu3? null:
                        <FontAwesome
                            name="circle"
                            color="#ff0000"
                            size={28}
                        ></FontAwesome>
                        }
                </Text>
            </View>
            <View style={stylescards.listWrapper}>
                <Text style={stylescards.row}>Colesterol LDL</Text>
                <Text style={stylescards.row}>{datos.ldl}</Text>
                <Text style={stylescards.row}>
                {coll ? null :
                    <FontAwesome
                        name="circle"
                        color="#228b22"
                        size={28}
                    ></FontAwesome>
                    }{coll2 ? null:
                        <FontAwesome
                        name="circle"
                        color="#ffd700"
                        size={28}
                    ></FontAwesome>
                    }{coll3? null:
                        <FontAwesome
                            name="circle"
                            color="#ff0000"
                            size={28}
                        ></FontAwesome>
                        }
                </Text>
            </View>
            <View style={stylescards.listWrapper}>
                <Text style={stylescards.row}>IMC</Text>
                <Text style={stylescards.row}>{datos.imc}</Text>
                <Text style={stylescards.row}>
                {im ? null :
                    <FontAwesome
                        name="circle"
                        color="#228b22"
                        size={28}
                    ></FontAwesome>
                    }{im2 ? null:
                        <FontAwesome
                        name="circle"
                        color="#ffd700"
                        size={28}
                    ></FontAwesome>
                    }{im3? null:
                        <FontAwesome
                            name="circle"
                            color="#ff0000"
                            size={28}
                        ></FontAwesome>
                        }
                </Text>
            </View>
            <View style={stylescards.listWrapper}>
                <Text style={stylescards.row}>Medida cintura</Text>
                <Text style={stylescards.row}>{datos.waist}</Text>
                <Text style={stylescards.row}>
                {w ? null :
                    <FontAwesome
                        name="circle"
                        color="#228b22"
                        size={28}
                    ></FontAwesome>
                    }{w2 ? null:
                        <FontAwesome
                        name="circle"
                        color="#ffd700"
                        size={28}
                    ></FontAwesome>
                    }{w3? null:
                        <FontAwesome
                            name="circle"
                            color="#ff0000"
                            size={28}
                        ></FontAwesome>
                        }
                </Text>
            </View>
        </View>
    )
}

export default TableM;