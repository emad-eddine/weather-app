
import { View, Text } from 'react-native'
import { styles } from './style/CityCardStyle'

interface Props{
    cityName : string,
    onCardPress : ()=>void
}


const CityCard:React.FC<Props> = ({cityName,onCardPress}) => {
  return (<View style={styles.itemContainer}>
            <Text style={styles.itemText} onPress={onCardPress}>{cityName}</Text>
          </View>)
}
export default CityCard