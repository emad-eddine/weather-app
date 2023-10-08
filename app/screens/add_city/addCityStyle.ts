
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

export const styles = StyleSheet.create({

    rootContainer : {
        backgroundColor : Colors.EXTRA_LIGHT_BLUE,
        alignItems : "center",
        paddingHorizontal : 30
    },
    inputStyle: {
        fontFamily : "OS_REGULAR",
        fontSize : 20,
        backgroundColor : Colors.TEXT_WHITE,
        width : "100%",
        marginHorizontal : 30,
        borderRadius : 16,
        paddingHorizontal : 20,
        paddingVertical : 10,
        color : Colors.DARK_BLUE
    },

   
    listContainer :{
        flex : 1,
        width : "100%",
        marginTop : "10%"
    },


    ///

    addBtn :{
        backgroundColor : Colors.DARK_BEIGE,
        borderRadius : 100,
        width : 70,
        height : 70,
        justifyContent : "center",
        alignItems : "center",
        marginTop : 20
    }



})