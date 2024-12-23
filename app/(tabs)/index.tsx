import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { fetchWeather } from '@/utils/fetchWeather';
import WeatherCard from '@/components/WeatherCard';

export default function HomeScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city.trim());
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" />}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {weather && <WeatherCard data={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: { color: 'red', marginTop: 10 },
});
