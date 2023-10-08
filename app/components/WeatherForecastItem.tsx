
import { View, Text,Image,ActivityIndicator } from 'react-native'
import { styles } from './style/WeatherForecastItemStyle'

interface Props{
    iconUrl : any,
    time : string,
    temp : string
}

const WeatherForecastItem : React.FC<Props> = ({iconUrl,time,temp}) => {


 

  const imageUrl = `https://openweathermap.org/img/wn/${iconUrl}@2x.png`
  console.log(imageUrl);
  

  
  return (
     <View style={styles.item}>

          
          <Image 
          
          source={{
            uri : imageUrl
          }}
          style={styles.itemImage} 
          
          />
          
          <Text  style={styles.itemTime}>{time}</Text>
          <Text  style={styles.itemTemp}>{temp}°</Text>
      </View>
  )
}
export default WeatherForecastItem