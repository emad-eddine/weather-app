import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { CustomSafeView } from '../../components/CustomSafeView';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './homeStyle';
import { BASE_URL, Colors, UNIT } from '../../utils/constants';
import WeatherForecastItem from '../../components/WeatherForecastItem';

import { APIDto } from './../../model/Dto';
import { fetchWeatherData } from '../../controllers/DataFetcher';
import axios from 'axios';
import { API_KEY } from '@env';
import dayjs from 'dayjs';
import { useLocalSearchParams, useRouter } from 'expo-router';

const dayBackgroundImagePath = '../../assets/images/day.png';
const nightBackgroundImagePath = '../../assets/images/night.png';



function isDaytime(
  unixTimestampInMils: number,
  sunrise: number,
  sunSet: number
) {
  const date = new Date(unixTimestampInMils); // Convert to milliseconds
  const hour = date.getHours();

  // Define your sunrise and sunset times here (in hours)
  const sunriseHour = sunrise; // Example: 6 AM
  const sunsetHour = sunSet; // Example: 6 PM

  return hour >= sunriseHour && hour < sunsetHour;
}

const home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<APIDto>();
  const [isDay, setIsDay] = useState<boolean>(true);
  const router = useRouter()
  //console.log(data);
  //console.log(`https://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}@4x.png`);
  const prams = useLocalSearchParams()
  const {city} = prams
  const cityName = city ? city :"Tokyo"
  const sourceUrl: string =
    BASE_URL + 'q=' + cityName + '&appid=' + API_KEY + '&units=' + UNIT;

  useEffect(() => {
    axios
      .get<APIDto>(sourceUrl)
      .then((response) => {
        setData(response.data);
        const timeInMilis: number = (response.data.list[0].dt + response.data.city.timezone) * 1000;
        const sunRise: number = parseInt(
          dayjs((response.data.city.sunrise + response.data.city.timezone) *1000).format('HH'))
        const sunSet: number = parseInt(
          dayjs((response.data.city.sunset + response.data.city.timezone) *1000).format('HH'))

        console.log(" time" + timeInMilis);
        console.log(" sunrise" + sunRise);
        console.log(" sunset" + sunSet);
        
        
        

        if (isDaytime(timeInMilis, sunRise, sunSet)) {
          console.log('It is daytime.');
          setIsDay(true)
        } else {
          console.log('It is nighttime.');
          setIsDay(false)
        }
      })
      .catch((error) => {
        console.log('An unexpected error occurred ');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ImageBackground
      source={isDay?require(dayBackgroundImagePath):require(nightBackgroundImagePath)}
      style={styles.homeContainer}
    >
      {!isLoading ? (
        <CustomSafeView>
          <View style={styles.headerContainer}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{data?.city.name}</Text>
              <Text style={styles.locationTimeText}>
                {dayjs(data?.list[0].dt ? (data?.list[0].dt + data.city.timezone) *1000 : 0)
                  .format('MMMM,DD,h:mm A')}
              </Text>
            </View>
            <Pressable style={styles.citiesBtn} onPress={()=>{
              router.push("/screens/add_city/addCity")
            }}>
              <FontAwesome5 name="city" size={24} color={Colors.LIGHT_BLUE} />
            </Pressable>
          </View>

          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>
              {data?.list[0].main.temp.toFixed()}°
            </Text>
            <Text style={styles.weatherDescription}>
              {data?.list[0].weather[0].description}
            </Text>
          </View>

          <View style={styles.bottomForecast}>
            <Text style={styles.bottomForecastHeader}>Weather Today</Text>
            <FlatList
              style={styles.bottomForecastListContainer}
              data={data?.list.slice(0, 7)}
              renderItem={({ item }) => (
                <WeatherForecastItem
                  iconUrl={item.weather[0].icon}
                  time={dayjs( (item.dt + 32400) *1000).format('h:mm A')}
                  temp={item.main.temp.toFixed().toString()}
                />
              )}
              keyExtractor={(item) => item.dt.toString()}
              horizontal
            />
          </View>
        </CustomSafeView>
      ) : (
        <CustomSafeView>
          <ActivityIndicator color={Colors.DARK_BLUE} />
        </CustomSafeView>
      )}
    </ImageBackground>
  );
};

export default home;
