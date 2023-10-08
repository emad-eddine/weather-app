import { Stack } from 'expo-router';
import { Colors } from '../../utils/constants';
export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='home'options={{
            headerShown : false,
            headerStyle:{
                backgroundColor:Colors.DARK_BLUE
            }
        }} />

      
        
    </Stack>
  )
}