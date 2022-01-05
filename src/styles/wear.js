import { StyleSheet } from "react-native";

const wear = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        paddingTop: 10,
        paddingBottom: 50,
        paddingHorizontal: 15,
        paddingVertical: 15,
        elevation: 5,
    },
    containerImg: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 5,
        borderColor: '#f5f5f5',
        borderRadius: 15,
        borderWidth: 5,
    },
    containerText: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 5,
        borderColor: '#f5f5f5',
        borderRadius: 15,
        borderWidth: 5,
    },
    textBold: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold',
    },
    textBold2: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: '#05375a',
    },
    containerText2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 5,
        borderColor: '#f5f5f5',
        borderRadius: 15,
        borderWidth: 5,
    },
    text2: {
        fontSize: 16,
        color: '#000000',
    },
    textItal: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#000000',
    },
    containerText3: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingHorizontal: 10,
        paddingBottom: 25,
        borderColor: '#f5f5f5',
        borderRadius: 15,
        borderWidth: 5,
    },
    subTitle: {
        fontSize: 18,
        color: '#05375a',
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 16,
        alignContent: 'center',
        color: '#000000',
        paddingTop: 5,
        paddingBottom: 5,
    },
    containerIndex:{
        paddingTop:15,
        paddingHorizontal:20,
        paddingBottom:40,
        backgroundColor: '#ffffff',
    },
    title:{
        fontSize:20,
        paddingBottom:10,
        textAlign:'center',
    },
});

export default wear;