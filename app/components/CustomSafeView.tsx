import { ReactNode } from 'react'
import { SafeAreaView} from 'react-native'
import { styles } from './style/CustomSafeViewStyle'

interface Props{
    children:ReactNode,
    customStyle?:{}
}

export const CustomSafeView : React.FC<Props> = ({children,customStyle}) =>{
  return (
    <SafeAreaView style={[styles.SafeViewContainer,customStyle]}>
        {children}
    </SafeAreaView>
  )
}