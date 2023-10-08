import { View, Text, FlatList, Pressable,Platform } from 'react-native';
import { CustomSafeView } from '../../components/CustomSafeView';
import { styles } from './addCityStyle';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../utils/constants';
import CityCard from '../../components/CityCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as SQLite from "expo-sqlite"


function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();


type resultType = {
  id: number;
  value: string;
};

const addCity = () => {
  const [textValue, setText] = useState('');


  const [cities,setCities] = useState<resultType[]>([])
  const [render,setRender] = useState(false)
  const router = useRouter()


  useEffect(() => {

    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists cities (id integer primary key not null,value text);"
      );
    });

    showData()
   
  }, []);

  function addCityToDb(city:string):boolean{

    if (city === "") {
      return false;
    }

    

    db.transaction(
      (tx) => {
        tx.executeSql("insert into cities (value) values (?)", [city]);
        setText("")
        setRender(true)
    },
      (error)=>{
        console.log(`error occurred ${error}`)
        return false
      },
      () =>{
        console.log(`${city} added successfully`);
        return true
      }
    );

    return true
}


  function showData() {
    db.transaction(
      (tx) => {
        tx.executeSql('select * from cities', [], (trans, result) => {
          setCities(result.rows._array);
          console.log(result.rows._array);
          
        });
      },
      (error) => {
        console.log(`error occurred ${error}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }






  return (
    <CustomSafeView customStyle={styles.rootContainer}>
      <TextInput
        placeholder="Ex:Tokyo"
        value={textValue}
        onChangeText={setText}
        style={styles.inputStyle}
      />
      <Pressable style={styles.addBtn} onPress={()=>{
          addCityToDb(textValue)
      }}>
          <Ionicons name="add-outline" size={40} color={Colors.TEXT_WHITE} />
      </Pressable>
      <FlatList 
        data={cities}
        renderItem={(item)=><CityCard cityName={item.item.value} onCardPress={()=>{
            router.replace({pathname:"/screens/home/home",params:{"city":item.item.value}})
        }}/>}
        keyExtractor={(item)=>item.id.toString()}

        style={styles.listContainer}
      
      />
    </CustomSafeView>
  );
};
export default addCity;
