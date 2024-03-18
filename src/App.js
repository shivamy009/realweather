 import './App.css';
import Weatherapp from './Components/Weatherapp/Weatherapp';
 // dd94f859a0e52d6e4767fddf735f04a7\
 // https://api.openweathermap.org/data/2.5/weather?q=London&appid=dd94f859a0e52d6e4767fddf735f04a7
 // ​https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=dd94f859a0e52d6e4767fddf735f04a7
function App() {
  return (
    <div className="App">
    <Weatherapp/>
    </div>
  );
}

export default App;
