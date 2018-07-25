# Weather Widget
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This project provides functionality to read the end user's current location using navigator.geolocation and retrieves the current wether condition from the [Open Weather Map API](https://openweathermap.org/current). Display the city name, temperature and wind speed in the widget. 

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
## How to deploy
1. Add homepage into package.json
```
"homepage": "https://natasha023.github.io/demo" 
```
2. Add these lines of code to package.json script part: 
```diff
"script":{
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -d build" 
```
3. Install gh-pages
```sh
npm install --save-dev gh-pages
```
4. Deploy website 
```sh
npm run deploy
```

## Technical choices
1. Use create-react-app to create the project
2. Use axios to interact with back end
3. Use OpenWeatherMap lib to retrieve current weather data 

## TODOS
1. Write unit test and E2E test cases

