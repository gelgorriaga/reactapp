import React, { Component } from "react";
import Title from "./Title";
import Form from "./Form";
import DisplayData from "./DisplayData";

class Home extends Component {


  render() {
    return (
      <>
        <div>
          <div className="flexDiv">
            <div className="title-container">
              <Title layout="Oktana Weather" />
            </div>
            <div className="form-container">
              <Form getData={this.props.getData} />
              <DisplayData
                temperature={this.props.temperature}
                city={this.props.city}
                country={this.props.country}
                humidity={this.props.humidity}
                description={this.props.description}
                ok={this.props.ok}
                temperatureType={this.props.temperatureType}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
