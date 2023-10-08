
import { StyleSheet,Platform,StatusBar } from 'react-native';


export const styles = StyleSheet.create({

    SafeViewContainer : {
        flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }




})