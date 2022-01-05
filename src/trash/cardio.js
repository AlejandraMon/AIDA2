import React,{useState} from "react";
import { View, Text,SafeAreaView,FlatList, ActivityIndicator } from "react-native";


const url = "http://162.214.187.236/~amj/api/result/result.php";

export function Cardio() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
   // const [title, setTitle] = useState([]);
    //const [description, setDescription] = useState([]);

    React.useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((json)=>setData(json.Datos))
        .catch((error)=>alert(error))
        .finally(()=>setIsLoading(false));
    },[]);

    return(
        <SafeAreaView>
            {isLoading ? (
                <ActivityIndicator></ActivityIndicator>
            ) : (
                <FlatList data={data}
                keyExtractor={({idresult},index)=>idresult}
                renderItem={({item})=>(
                    <Text>Datos:
                       Total:  {item.score} ,
                       Arritmia:  {item.arrhythmia}
                    </Text>
                )}>
                </FlatList>
            )}
        </SafeAreaView>
    );
}