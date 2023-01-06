import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    navbertext: {
        fontSize: 19,
        fontWeight: 'bold'
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
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    profileview: {
        width: '100%',
        height: 200,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        paddingHorizontal: 25,
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileL: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    profileR: {
        justifyContent: 'flex-end',
        width: 170,
    },
    profileimageview: {
        marginTop: 10,
        marginBottom: 15,
    },
    textbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    playerimage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#DDDDDD',
        marginBottom: 20
    },
    Profiletext: {
        fontWeight: 'bold'
    },
    Profilemargintext: {
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    playertext: {
        marginTop: 15 
    },
    buttontext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2AC1C1',
        height: 40,
        marginTop: 20,
    },
    
    
});




export default styles;