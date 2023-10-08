import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  headerContainer: {

    flexDirection : "row",
    width : "100%",
    justifyContent :"center",
    alignItems : "center",
    marginTop : 30
  },
  locationContainer: {
        flex: 1,
        marginLeft : 20
    
  },

  citiesBtn :{
        flex : 0.1,
        alignItems : "flex-end",
        marginRight : 15
  },

  locationText : {
    fontFamily : "OS_BOLD",
    fontSize : 40,
    color : Colors.TEXT_WHITE
  },
  locationTimeText :{
    fontFamily : "OS_MEDIUM",
    fontSize : 20,
    color : Colors.TEXT_WHITE
  },

  weatherDescription : {
    fontFamily : "OS_MEDIUM",
    fontSize : 20,
    color : Colors.TEXT_WHITE
  },

  tempContainer : {
    width : "100%",
    marginLeft : 20,
    marginTop : 20,
  },

  tempText : {
    fontFamily : "OS_BOLD",
    color : Colors.TEXT_WHITE,
    fontSize : 70,
  },

  bottomForecast : {
    position :"absolute",
    bottom : 0,
    height : "40%",
    backgroundColor : Colors.TEXT_WHITE,
    opacity: 0.9,
    width : "100%",
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
    elevation : 8,
    justifyContent : "center",
    alignItems : "flex-start"
  },

  

  bottomForecastHeader : {
    width : "100%",
    textAlign : "center",
    fontFamily : "OS_BOLD",
    fontSize : 30,
    color : Colors.DARK_BLUE,
    marginTop : 20
  },

  bottomForecastListContainer:{
    flex : 1
  }









});
