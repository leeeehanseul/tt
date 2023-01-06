import { StyleSheet } from "react-native";

const feedstyles = StyleSheet.create({
    feedview: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 13,
        paddingTop: 20,
    },
    playerfeed: {
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        height: 220,
        borderRadius: 15,
        marginBottom: 15,
    },
    feedmain: {
        padding: 15,
        flex: 1,
        width: '100%',
    },
    feedfooter: {
        borderTopWidth: 1,
        borderColor: '#E6E6E6',
        width: '100%',
        height: 38,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerL: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footernumber: {
        paddingLeft: 5,
        paddingRight: 15,
        fontSize: 14,
        color: '#0E0E0E66',
    },
    footertext: {
        fontSize: 14,
        color: '#0E0E0E66',
    },
    footerR: {
        alignItems: 'center',
    },
    titleview: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
    },
    titleveiwL: {
       flexDirection: 'row',
       flex: 1,
    },
    titleviewR: {
       height: 45,
       width: 31,
       justifyContent: 'center',
       alignItems: 'center',
    },
    titletextview: {
        flex: 1,
        paddingLeft: 10,
    },
    titletext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    contentview: {
        flex: 1,
        width: '100%',
        paddingVertical: 5,
    },
    labeltext: {
        color: '#fff',
        fontSize: 10,
        fontWeight: "bold",
        position: 'absolute',
    },
    eventview: {
        height: 45,
        width: '100%',
    },
    eventtext: {
        fontSize: 12,
        color: '#0E0E0E66',
        marginBottom: 5,
    },
    eventbox: {
        width: 60,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#2AC1C1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    eventboxtext: {
        color: '#fff',
        fontSize: 13,
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
    eventboxview: {
        flexDirection: 'row',
    },  madellargetext: {
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
        fontSize: 14,
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
    starlargetext: {
        fontSize: 17,
        color: '#0E0E0E66',
        fontWeight: 'bold',
    },
    contentresult: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyiconstyle: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
})

export default feedstyles;