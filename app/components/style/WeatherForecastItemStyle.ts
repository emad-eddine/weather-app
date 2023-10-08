
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

export const styles = StyleSheet.create({

    item :  {
        justifyContent : "center",
        alignItems : "center",
        //backgroundColor : Colors.DARK_BLUE,
        marginHorizontal: 15
  },

  itemImage:{
    width : 120,
    height : 120
  },

  itemTime :{
    fontFamily : "OS_MEDIUM",
    fontSize : 16,
    color : Colors.DARK_BLUE
  },

  itemTemp : {

    fontFamily : "OS_BOLD",
    fontSize : 30,
    color : Colors.DARK_BLUE,
  },







})