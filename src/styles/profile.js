import { StyleSheet } from "react-native";
//#009387
const profile = StyleSheet.create({
    containerIndex: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        
    },
    containerIndex2: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        alignItems:'center',
    },
    title: {
        fontSize: 22,
        paddingVertical: 15,
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 15,
        elevation: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    container2: {
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 200,
        paddingHorizontal: 25,
        elevation: 10,
        
    },
    containerText: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#708090',
    },
    textItal2: {
        fontSize: 18,
        fontStyle: 'italic',
        paddingHorizontal: 15,
    },
    text2: {
        fontSize: 18,
        paddingHorizontal: 15,
    },
    buton: {
        
        marginTop: 30,
        backgroundColor: '#1e90ff',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 30,
        width: '80%',
    },
    textButon: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default profile;