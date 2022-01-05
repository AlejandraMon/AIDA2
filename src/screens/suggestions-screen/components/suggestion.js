import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, ActivityIndicator, ScrollView } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const url = "http://eleazartech.0fees.us/api/suggestions/sick.php";
function SuggestionContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.datos))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);

    const datosS = data.map(function (dat) {
        return dat.sick;
    });

    return (
        <SafeAreaView>
            {isLoading ? (
                <Text>Buscando ...</Text>
            ) : (
                <FlatList data={data}
                    keyExtractor={({ idsuggestion }, index) => idsuggestion}
                    renderItem={({ item }) => (
                        <ScrollView
                            style={{
                                paddingBottom: 5,
                                paddingHorizontal: 15,
                                paddingTop: 8,
                                flexDirection: 'column',
                                backgroundColor: '#ffffff',
                                margin: 10,
                                borderRadius: 15,
                                elevation: 5,
                            }}>
                                <View style={{flexDirection:'row'}}>
                                <FontAwesome
                                name="check-square-o"
                                color="#0000cd"
                                size={25}
                            ></FontAwesome>
                                <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                borderBottomColor: '#d3d3d3',
                                borderBottomWidth: 1,
                                paddingBottom: 5,
                                color: '#778899', 
                                paddingHorizontal:10
                            }}>{item.title}</Text>
                            
                                </View>
                            
                            <Text style={{
                                fontSize: 18,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderBottomColor: '#d3d3d3',
                                borderBottomWidth: 1,
                                textAlign: 'justify',
                            }}>{item.description}</Text>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 10,
                                paddingBottom: 5
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'left',
                                    fontStyle: 'italic',
                                    color: '#808080',
                                }}> {item.date}</Text>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'right',
                                    paddingHorizontal: 100,
                                    color: '#808080',
                                }}>Prioridad: {item.priority}</Text>
                            </View>

                        </ScrollView>
                    )}> </FlatList>

            )}
        </SafeAreaView>
    );
}
export default SuggestionContainer;