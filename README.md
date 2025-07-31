
# 🌦️ Weather App – Documentation

## 📋 Overview

This Weather App is a React-based application that allows users to search for the **current weather conditions** in any city using the **OpenWeatherMap API**. It displays temperature, humidity, weather description, and adjusts visuals based on the weather data.

---

## 🛠️ Technologies Used

* **React** (Functional Components + Hooks)
* **Material UI (MUI)** for UI components and icons
* **OpenWeatherMap API** for real-time weather data
* **JavaScript (ES6+)**
* **CSS (custom styling + MUI styling)**

---

## 🗂️ Project Structure

```
src/
│
├── App.js               # Main app file
├── WeatherApp.js        # Parent container combining search and info
├── SearchBox.js         # City input and weather fetch logic
├── InfoBox.js           # Weather info card with visuals
├── index.css / App.css  # Styling
```

---

## 🔍 Features

✅ Search for any city
✅ Fetches current weather from OpenWeatherMap
✅ Displays:

* Temperature
* Humidity
* Min/Max Temperature
* Feels-like temperature
* Weather description

✅ Dynamically updates:

* Background image (hot, cold, rain, default)
* Weather icons (sunny, cold, thunderstorm)

✅ Error handling if an invalid city is entered

---

## 🧠 How It Works

### 1. **SearchBox.js**

* Contains a **TextField** for city input
* Calls `getWeatherInfo()` on form submission
* Fetches data from:
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
* Passes cleaned data to parent via `updateInfo()` prop

### 2. **InfoBox.js**

* Receives weather data via props from the parent
* Uses conditional logic to choose background images and icons:

  * If humidity > 80 → Rain image + Thunderstorm icon
  * Temp > 30°C → Hot image + Sunny icon
  * Temp < 24°C → Cold image + Snow icon
  * Else → Default image

### 3. **WeatherApp.js**

* Holds central state for weather info using `useState`
* Updates data when child component (`SearchBox`) sends new data
* Renders both `SearchBox` and `InfoBox`

---

## 🧪 API Used

### 🔗 OpenWeatherMap API

* URL: `https://api.openweathermap.org/data/2.5/weather`
* Method: `GET`
* Units: `metric` (Celsius)
* Required parameters:

  * `q` → City name
  * `appid` → Your API key

---

## 🔑 Sample API Call

GET https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_API_KEY&units=metric


---

## 🚫 Error Handling

* If the user enters an invalid city:

  * An error message is displayed:
    **"No such place exists. Please try again."**

---

## 🖼️ UI Examples (What’s Displayed)

* 🌞 Sunny icon for hot cities
* ❄️ Snowflake icon for cold areas
* 🌩️ Thunderstorm icon for high humidity
* Image changes based on weather type

---

## 📌 Future Improvements (Optional Ideas)

* Add loading spinners while fetching
* Allow user to switch temperature units (°C/°F)
* Add geolocation to auto-detect user city
* Show 5-day weather forecast
* Add light/dark theme toggle

---

## 🚀 Getting Started

### 1. Clone the repository:

git clone https://github.com/your-username/weather-app.git
cd weather-app


### 2. Install dependencies:

npm install


### 3. Add your OpenWeatherMap API key:

Inside `SearchBox.js`, replace:

const API_KEY = "YOUR_API_KEY";


### 4. Run the app:
-- npm run dev



