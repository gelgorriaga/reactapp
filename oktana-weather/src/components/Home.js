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
            <div className="form-container">
              <Form getData={this.props.getData} />
              <DisplayData
                sunrise={this.props.sunrise}
                city={this.props.city}
                country={this.props.country}
                sunset={this.props.sunset}
                ok={this.props.ok}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
