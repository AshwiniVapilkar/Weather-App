import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({ weatherInfo }) {
  const INIT_IMG =
    "https://images.unsplash.com/photo-1712663640135-f5fc71dca38e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_IMG =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
  const COLD_IMG =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_IMG =
    "https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";
  
    return (
    <>
      <div className="weather-info-av-main">
        <h3>WeatherInfo - {weatherInfo.weather}</h3>
        <div className="weather-info-av">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={
                weatherInfo.humidity > 80
                  ? RAIN_IMG
                  : weatherInfo.temp > 30
                  ? HOT_IMG
                  : weatherInfo.temp < 24
                  ? COLD_IMG
                  : INIT_IMG
              }
              alt="Weather Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherInfo.city}{
                weatherInfo.humidity > 70
                  ? <ThunderstormIcon/>
                  : weatherInfo.temp > 25
                  ? <SunnyIcon/>
                  : weatherInfo.temp < 25
                  ? <AcUnitIcon/>
                  : <SunnyIcon/>
              }
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
              >
                <p>Temperature = {weatherInfo.temp}&deg;C</p>
                <p>Humidity = {weatherInfo.humidity}</p>
                <p>Min Temp = {weatherInfo.tempMin}&deg;C</p>
                <p>Max Temp = {weatherInfo.tempMax}&deg;C</p>
                <p>
                  The weather can described as <i>{weatherInfo.weather} </i>{" "}
                  Feels Like = {weatherInfo.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
