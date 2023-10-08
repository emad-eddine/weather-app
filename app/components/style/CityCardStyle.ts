
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';


export const styles = StyleSheet.create({
 itemContainer:{
        width : "100%",
        height : 80,
        backgroundColor : Colors.DARK_BLUE,
        marginVertical : 20,
        justifyContent :"center",
        alignItems : "center",
        borderRadius : 20
    },

    itemText : {
        color :Colors.TEXT_WHITE,
        fontFamily : "OS_REGULAR",
        fontSize : 25,
        paddingHorizontal : 20,
        width: "100%",
        textAlign :"center"
    },



})