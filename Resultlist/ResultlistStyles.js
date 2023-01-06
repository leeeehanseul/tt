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
    textboldstyle: {
        fontWeight: 'bold',
    },
    button: {
        width:  120,
        height: 40,
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
    textview: {
      flex: 1,
      height: 100,
      justifyContent: 'center',
    },
    resultview: {
        width: '100%',
        height: 45,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        paddingHorizontal: 25,
    },
    resulttext: {
        color: '#0E0E0E66',
    },
    resultboldtext: {
        color: '#0E0E0E66',
        fontWeight: 'bold',
    },
    resulttextview: {
       borderTopColor: '#E6E6E6',
       borderTopWidth: 1,
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1,
       width: '100%',
       flexDirection: 'row',
    },
    dateview: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    },
    datetext: {
        color: '#0E0E0E66',
        paddingHorizontal: 5,
        fontWeight: '600',
        fontSize: 13,
    },
    eventtext: {
        color: '#2AC1C1',
        fontWeight: '600',
        paddingHorizontal: 5,
        fontSize: 13,
    },
    titletext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    eventview: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconview: {
        width: 50,
        height: 100,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    topview: {
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    medalview: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    pickmedalview: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medaltext: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
    },
    resultinput:{
        width: '100%',
        height: 150,
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 25,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        marginVertical: 5,
    },
    textinputview: {
        borderColor: '#c3c3c3',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 100,
        padding: 5,
    },
    numberinput: {
        borderColor: '#c3c3c3',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonview: {
        alignItems: 'flex-end',
        height: 40,
        width: '100%',
    },
    input1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 170,
        alignItems: 'center',
    },
    input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 140,
        alignItems: 'center',
        marginLeft: 10,
    }
})

export default styles;