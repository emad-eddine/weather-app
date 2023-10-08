import { Stack } from "expo-router"
import { Colors } from "../../utils/constants"



const layout = () => {
  return (
    <Stack>
        <Stack.Screen name="addCity" options={
            {
                headerTitle : 'Cities list',
                headerTitleStyle:{
                    fontFamily : "OS_MEDIUM",
                    fontSize : 30,
                    color: Colors.TEXT_WHITE
                },
                headerStyle:{
                    backgroundColor : Colors.LIGHT_BLUE
                },
                headerTintColor : Colors.TEXT_WHITE
            }
        } />
    </Stack>
  )
}
export default layout