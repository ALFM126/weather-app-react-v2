import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const iconMap = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "SLEET",
    "10n": "SLEET",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const iconColor = {
    "01d": "goldenrod",
    "01n": "blue",
    "02d": "goldenrod",
    "02n": "blue",
    "03d": "goldenrod",
    "03n": "blue",
    "04d": "gray",
    "04n": "gray",
    "09d": "gray",
    "09n": "gray",
    "10d": "black",
    "10n": "black",
    "11d": "black",
    "11n": "black",
    "13d": "light blue",
    "13n": "light blue",
    "50d": "gray",
    "50n": "gray",
  };
  return (
    <ReactAnimatedWeather
      icon={iconMap[props.reference]}
      color={iconColor[props.reference]}
      size={100}
      animate={true}
    />
  );
}
