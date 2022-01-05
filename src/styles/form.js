import { StyleSheet } from "react-native";
//#009387
const form = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin:10,
        elevation: 15,
    },
    label: {
        fontSize: 16,
        color: '#05375a',
        paddingTop: 10,
    },
    input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        paddingBottom: 8,
        marginTop: 10,
    },
    textInput: {
        fontSize: 16,
        paddingLeft: 15,
        color: '#05375a',
    },
    buton: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#1e90ff',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom:30
        
    },
    textButon: {
        fontSize: 18, 
        fontWeight: 'bold',
    },
    title:{
        fontSize:24, 
        color:'#000000',
        paddingHorizontal:20,
        textAlign:'center',
    },
});

export default form;