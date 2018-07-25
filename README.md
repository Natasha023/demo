# Weather Widget
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This project provides functionality to read the end user's current location using navigator.geolocation and retrieves the current wether condition from the [Open Weather Map API](https://openweathermap.org/current). Display the city name, temperature and wind speed in the widget. 

## Setup
1. Create a demo project by 
```sh
npx create-react-app demo
```

## How to build
1. Download source code
```sh 
git clone https://github.com/Natasha023/demo
```
2. Go to the folder: 
```sh
cd demo
```
3. Install dependencies:  
```sh
npm install
```
4. Run front end: 
```sh
npm start
```

## Technical choices
1. Use create-react-app to create the project.
2. Use axios to send api calls.
3. Use OpenWeatherMap lib to retrieve current weather data.

## Solution
1. Has two components. App component renders the whole page. Weather component renders the weather panel on right.
2. Draw sun and wind icon by css.

## TODOS
1. Write unit test cases

