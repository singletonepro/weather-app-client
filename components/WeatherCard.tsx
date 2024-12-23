import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface WeatherCardProps {
  data?: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  if (!data || !data.main || !data.weather) {
    return (
      <View style={styles.card}>
        <Text style={styles.error}>Invalid weather data</Text>
      </View>
    );
  }

  const { name, main, weather, wind } = data;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{name}</Text>
      <Text style={styles.temp}>{Math.round(main.temp)}°C</Text>
      <Text style={styles.desc}>{weather?.[0]?.description}</Text>
      <Text style={styles.info}>Humidity: {main.humidity}%</Text>
      <Text style={styles.info}>Wind: {wind.speed} m/s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
  },
  city: { fontSize: 24, fontWeight: 'bold' },
  temp: { fontSize: 48, fontWeight: 'bold', marginVertical: 5 },
  desc: { fontSize: 18, textTransform: 'capitalize' },
  info: { fontSize: 16 },
  error: { fontSize: 18, color: 'red' },
});
