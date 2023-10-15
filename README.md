# weather-app
A simple weather app built with React Native and Expo, powered by the OpenWeatherMap API, allowing users to check weather information for their current city and add new cities to track.
<img src="/preview/home_day.png" alt="home day" width="200">


## Features

- View weather information for the current city on the home screen.
- Change the city by adding new cities in the "Add City" screen.
- Dynamic background image changes based on the time of day for the current city.

## Prerequisites

Before running the app, make sure you have set up the necessary environment variables:

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. Create a .env file in the root folder and add your OpenWeatherMap API key

3. Getting Started
   
  ```shell
   npm install
   npm start
   ```
## Usage
- On the home screen, view weather information for the current city.
- To change the city, navigate to the "Add City" screen and enter the city name.
- The app will automatically detect the time of day in the current city and change the background image accordingly.
## Database
- City names are stored using SQLite. The database is automatically created when you add a new city.

## Built With
- React Native
- Expo
- SQLite for database storage
- OpenWeatherMap API for weather data
## Screenshots

### Home (day)
<img src="/preview/home_day.png" alt="home day" width="200">

### Home (night)
<img src="/preview/home_night.png" alt="home night" width="200">

### Add City
<img src="/preview/add_city.png" alt="add_city" width="200">

