
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { APIDto } from "../model/Dto";
import { API_KEY } from "@env";




//https://api.openweathermap.org/data/2.5/forecast?q=London&appid=0a31d87e719dd9b2627fe487cd279a3f&units=metric


export async function fetchWeatherData(cityName: string,units:string):Promise<APIDto|any>{

    const sourceUrl : string = BASE_URL + "q="+cityName +"&appid=" + API_KEY + "&units="+units
    console.log(`the url from the function is ${sourceUrl}`);
    
    await axios
      .get(sourceUrl)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
       
      return 'An unexpected error occurred';
    
      });
}


