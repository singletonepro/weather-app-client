# Weather App

A simple React Native weather app that fetches and displays current weather information for a given city using a backend API.

## Features

- Search for a city to get current weather data.
- Displays the following weather information:
  - City name
  - Current temperature (in Celsius)
  - Weather description (e.g., "Cloudy", "Sunny")
  - Humidity
  - Wind speed
- Error handling for invalid city names or API request failures.
- Loading indicator while fetching data.

## Prerequisites

1. **Backend**
   - A running NestJS backend with the `/weather` endpoint that fetches data from OpenWeather API.
   - Configure `.env` file in the backend with your OpenWeather API key:
     ```
     OPENWEATHER_API_KEY=your_api_key
     PORT=8080
     ```

2. **Frontend**
   - React Native development environment set up. 

## Installation

### Backend

1. Clone the backend repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm run start
   ```
   The backend will be available at `http://localhost:8080`.

### Frontend

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app on iOS or Android:
   ```bash
   npm run ios
   npm run android
   ```

## Usage

1. Enter a city name in the input field.
2. Tap "Search" to fetch weather data for the entered city.
3. View the weather details including temperature, description, humidity, and wind speed.
4. If an error occurs (e.g., invalid city name), it will be displayed on the screen.

## Technologies Used

- **Frontend**
  - React Native
  - Expo

- **Backend**
  - NestJS
  - Axios for HTTP requests


## Troubleshooting

### Common Issues

1. **Backend not responding:**
   - Ensure the backend is running on `http://localhost:8080`.
   - Check if the API key in `.env` is valid.

2. **Frontend build issues:**
   - Clear the Expo cache and restart:
     ```bash
     expo start --clear
     ```

3. **Error fetching weather data:**
   - Verify the backend API endpoint using `curl`:
     ```bash
     curl "http://localhost:8080/weather?city=London"
     ```


