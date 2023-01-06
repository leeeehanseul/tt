import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navber: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderColor: '#C9C9C9',
        borderBottomWidth: 1,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 30,
    }, 
    navberL: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    navberM: {
        width: 160,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navberR: {
        flex: 1,
        height: '100%',
        alignItems: 'center'
    },
    navbertext: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    contentbox: {
        borderWidth: 1,
        borderColor: '#c9c9c9',
        height: 200,
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
    },
    title: {
        width: '100%',
        borderColor: '#c9c9c9',
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    textboldstyle: {
        fontWeight: 'bold',
    },
    contenttext: {
        flex: 1,
        marginTop: 10,
        color: '#0e0e0e'
    },
    feedtalkview:{
        width: 25,
        height: 25,
    },
    titletext: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#2AC1C1',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
})

export default styles;