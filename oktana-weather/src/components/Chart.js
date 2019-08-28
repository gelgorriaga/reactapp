import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Redirect, withRouter } from "react-router-dom";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    console.log(this.props.chartData)
    return (
      <div className= "Chart">
        <Bar
          // data={this.state.chartData}
          data={
            {
              labels: ["Min temp", "Avg temp", "Max temp"],
              datasets: [
                {
                  label: "Temperature",
                  data: [this.props.minTemp, this.props.temperature, this.props.maxTemp],
                  backgroundColor: [
                    "rgba(82, 179, 217, 1)",
                    "rgba(244, 179, 80, 1)",
                    "rgba(214, 69, 65, 1)"
                  ]
                }
              ]
            }
          }
          options={{
            title: {
              display: true,
              text: "Temperature chart",
              fontSize: 50
            },
            legend: {
              display: true,
              position: "right"
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
