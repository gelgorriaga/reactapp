import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

let appid = "f4a064fab6279ff8911f853cad2d6eba";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: undefined,
      city: undefined,
      country: undefined,
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      humidity: undefined,
      temperatureType: "C",
      ok: true,
      cod: undefined,
      chartData: {
        labels: ["Min temp", "Avg temp", "Max temp"],
        datasets: [
          {
            label: "Temperature",
            data: [12, 14, 16],
            backgroundColor: [
              "rgba(82, 179, 217, 1)",
              "rgba(244, 179, 80, 1)",
              "rgba(214, 69, 65, 1)"
            ]
          }
        ]
      }
    };
  }

  getData = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const temp = e.target.elements.temperature.value;
      if (city) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
        );
        const rawData = await res.json();
        console.log(rawData);
        this.setState({
          description: rawData.weather[0].description,
          city: rawData.name,
          country: rawData.sys.country,
          humidity: rawData.main.humidity,
          ok: true,
          cod: rawData.cod
        });
        if (temp === "F") {
          let f = Math.floor((rawData.main.temp * 9) / 5 + 32);
          let fMin = Math.floor((rawData.main.temp_min * 9) / 5 + 32);
          let fMax = Math.floor((rawData.main.temp_max * 9) / 5 + 32);
          this.setState({
            temperature: f,
            temperatureType: temp,
            ok: true,
            maxTemp: fMax,
            minTemp: fMin
          });
        } else {
          this.setState({
            temperature: Math.floor(rawData.main.temp),
            temperatureType: temp,
            ok: true,
            maxTemp: Math.floor(rawData.main.temp_max),
            minTemp: Math.floor(rawData.main.temp_min)
          });
        }
      } else {
        this.setState({ ok: false });
      }
    } catch (e) {
      alert(`City not found`);
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  ok={this.state.ok}
                  temperatureType={this.state.temperatureType}
                  getData={this.getData}
                />
              )}
            />
            <Route
              path="/chart"
              exact
              render={() => (
                <Chart
                  temperature={this.state.temperature}
                  maxTemp={this.state.maxTemp}
                  minTemp={this.state.minTemp}
                />
              )}
            />
            <Route
              path="/favs"
              exact
              render={() => (
                <h1>favourites</h1>
                
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
