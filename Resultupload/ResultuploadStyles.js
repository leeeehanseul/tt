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
        paddingVertical: 30,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    contentboxview: {
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
        width:  300,
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
    buttonview: {
        alignItems: 'center',
        width: '100%',
    },
    box: {
        borderWidth: 1,
        borderColor: '#c9c9c9',
        height: 180,
        borderRadius: 10,
        padding: 12,
        marginTop: 10,
    },
    titleview: {
        flexDirection: 'row',
        height: 45,
    },
    titletextview: {
        flex: 1,
        paddingLeft: 10,
    },
    titletext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    datetext: {
        color: '#0E0E0E66',
        paddingHorizontal: 5,
        fontWeight: '500',
        fontSize: 13,
    },
    datetextview:{
       flexDirection: 'row',
       alignItems: 'center',
    },
    eventbox: {
        width: 70,
        height: 27,
        borderRadius: 25,
        backgroundColor: '#979797',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    eventtext: {
        color: '#fff'
    },
    tag: {
        height: 50,
        width: '100%',
    },
    textstyle: {
        fontSize: 12,
        color: '#0E0E0E66',
        marginBottom: 5
    },
    contentveiw: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starlargetext: {
        fontSize: 17,
        color: '#0E0E0E66',
        fontWeight: 'bold',
    },
    staricontext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        position: 'absolute',
    },
    startext: {
        fontSize: 12,
        color: '#0E0E0E66',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    stariconview: {
        height: 33,
        width: 33,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    checkbox: {
        borderWidth: 1,
        borderColor: '#c9c9c9',
        width: 18,
        height: 18,
        marginRight: 10,
        borderRadius: 3,
    },
    checkboxview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    checktext: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    textboldstyle: {
        fontWeight: 'bold',
    },
    alerttext: {
        color: 'red',
        marginLeft: 5,
    },
    alerttextview: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
})

export default styles;