import { useState } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, Alert } from "@mui/material";

function ApiPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "5c4fc26113671036d45db9a6f54882ca";

  const fetchWeather = async () => {
    try {
      setError(null);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError("City not found");
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">API Page</Typography>

      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mt: 2, mr: 2 }}
      />

      <Button variant="contained" onClick={fetchWeather}>
        Search
      </Button>

      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

      {weather && (
        <Typography sx={{ mt: 2 }}>
          {weather.name}: {weather.main.temp}°C
        </Typography>
      )}
    </Container>
  );
}

export default ApiPage;