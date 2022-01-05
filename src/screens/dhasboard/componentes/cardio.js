import React, { Component } from "react";
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylescards from "../../../styles/cards";

class Cardio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datos: [],
            isFetch: true,
        }
    }


    render() {

        return (
            <View style={stylescards.div}>
                <View
                    style={stylescards.containerC1}>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="heartbeat"
                            color="#000000"
                            size={40}></FontAwesome>
                    </View>
                    <View
                        style={stylescards.containerTextEnd}>
                        <Text style={stylescards.textBold}>278</Text>
                        <Text style={stylescards.colorText}>New posts</Text>
                    </View>
                </View>

                <View
                    style={stylescards.containerC1}>
                    <View
                        style={stylescards.containerTextStart}>
                        <Text style={stylescards.textBoldColor}>278</Text>
                        <Text style={stylescards.colorText}>New posts</Text>
                    </View>
                    <View style={stylescards.icon}>
                        <FontAwesome
                            name="heartbeat"
                            color="#000000"
                            size={40}></FontAwesome>
                    </View>
                </View>

                <View
                    style={stylescards.containerC2}>
                    <View style={stylescards.flex}>
                        <View
                            style={stylescards.containerTextStart}>
                            <Text style={stylescards.textBoldColor}>278</Text>
                            <Text style={stylescards.colorText}>New posts</Text>
                        </View>
                        <View style={stylescards.icon}>
                            <FontAwesome
                                name="heartbeat"
                                color="#000000"
                                size={40}></FontAwesome>
                        </View>
                    </View>
                    <View style={stylescards.flex}>
                        <View
                            style={{
                                paddingVertical: 10,
                                backgroundColor: '#e1446f',
                                marginTop: 10,
                                borderTopLeftRadius: 15,
                                borderBottomLeftRadius: 15,
                                width: '30%',
                            }}>
                        </View>
                        <View
                            style={{
                                paddingVertical: 10,
                                backgroundColor: '#d3d3d3',
                                marginTop: 10,
                                borderTopRightRadius: 15,
                                borderBottomRightRadius: 15,
                                width: '70%',
                            }}>
                        </View>
                    </View>
                </View>

                <View
                    style={stylescards.containerC3}>
                    <View
                        style={stylescards.containerIcon}>
                        <FontAwesome
                            name="heartbeat"
                            color="#ffffff"
                            size={40}></FontAwesome>
                    </View>
                    <View
                        style={stylescards.containerTextStart2}>
                        <Text style={stylescards.textBold}>278</Text>
                        <Text style={stylescards.colorText}>New posts</Text>
                    </View>
                </View>

                <View
                    style={stylescards.containerC3}>
                    <View
                        style={stylescards.containerTextStart2}>
                        <Text style={stylescards.textBold}>278</Text>
                        <Text style={stylescards.colorText}>New posts</Text>
                    </View>
                    <View
                        style={stylescards.containerIcon}>
                        <FontAwesome
                            name="heartbeat"
                            color="#ffffff"
                            size={40}></FontAwesome>
                    </View>
                </View>


                <View
                    style={stylescards.containerC4}>
                    <View style={stylescards.flex}>
                        <View
                            style={stylescards.containerIcon}>
                            <FontAwesome
                                name="heartbeat"
                                color="#ffffff"
                                size={40}></FontAwesome>
                        </View>
                        <View
                            style={stylescards.containerTextStart2}>
                            <Text style={stylescards.textBold}>278</Text>
                            <Text style={stylescards.colorText}>New posts</Text>
                            <View style={stylescards.flex2}>
                                <View
                                    style={{
                                        paddingVertical: 5,
                                        backgroundColor: '#e1446f',
                                        borderTopLeftRadius: 15,
                                        borderBottomLeftRadius: 15, width: '30%',
                                    }}>
                                </View>
                                <View
                                    style={{
                                        paddingVertical: 5,
                                        backgroundColor: '#d3d3d3',
                                        borderTopRightRadius: 15,
                                        borderBottomRightRadius: 15, width: '70%',
                                    }}>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>
            </View>

        );
    }
}


export default Cardio;