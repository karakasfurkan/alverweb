import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '67846ba31950cf86c483f464b914fbf4'; 
const CITY = 'Istanbul';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!API_KEY) { 
          setError('Lütfen API_KEY değerini kendi anahtarınızla güncelleyin.');
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=tr`
        );
        setWeather(response.data);
      } catch (err) {
        console.error("Hava durumu verisi çekilirken hata oluştu:", err);
        if (err.response && err.response.status === 401) {
          setError('API anahtarınız geçersiz veya eksik. Lütfen kontrol edin.');
        } else if (err.response && err.response.status === 404) {
          setError('Belirtilen şehir bulunamadı.');
        } else {
          setError('Hava durumu bilgisi alınamadı. İnternet bağlantınızı kontrol edin veya API hatası.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []); 

  if (loading) {
    return <div className="weather-widget">Hava durumu yükleniyor...</div>;
  }

  if (error) {
    return <div className="weather-widget error">{error}</div>;
  }

  if (!weather) {
    return <div className="weather-widget">Hava durumu bilgisi mevcut değil.</div>;
  }

  return (
    <div className="weather-widget">
      <h3>{CITY} Hava Durumu</h3>
      <p>Sıcaklık: {Math.round(weather.main.temp)}°C</p>
      <p>Hissedilen: {Math.round(weather.main.feels_like)}°C</p>
      <p>Durum: {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        width="50"
        height="50"
      />
    </div>
  );
}

export default WeatherWidget;