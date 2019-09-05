import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ChartForm from "./components/ChartForm";
let appid = "f4a064fab6279ff8911f853cad2d6eba";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: undefined,
      typeOfChart: 'temperature',
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      ok: true,
      cod: undefined,
    };
  }


  getData = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      if (city) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}`
        );
        const rawData = await res.json();
        console.log(rawData);
        this.setState({
          rawData:rawData,
          city: rawData.city.name,
          country: rawData.city.country,
          sunrise: rawData.city.sunrise,
          sunset: rawData.city.sunset,
          ok: true,
          cod: rawData.cod
        });
      } else {
        this.setState({ ok: false });
      }
    } catch (e) {
      alert(`City not found`);
    }
  };

  getChart = e =>{
    e.preventDefault();
    const typeOfChart = e.target.value;
    this.setState({typeOfChart:typeOfChart}, ()=> console.log(this.state.typeOfChart));
   
  }

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
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  ok={this.state.ok}
                  getData={this.getData}
                />
              )}
            />
            <Route
              path="/chart"
              exact
              render={() => 
                <>
                <ChartForm ChartForm getChart = {this.getChart} />
                <Chart rawData={this.state.rawData} typeOfChart={this.state.typeOfChart}/>
                </>
              }
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
