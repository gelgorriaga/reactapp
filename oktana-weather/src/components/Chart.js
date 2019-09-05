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
    let date = this.props.rawData.list.map(d=>d.dt_txt);
    let hum = this.props.rawData.list.map(h=>h.main.humidity);
    let temp = this.props.rawData.list.map(t=>t.main.temp);
    let pressure = this.props.rawData.list.map(t=>t.main.pressure);

    let displayData = () =>{
      switch(this.props.typeOfChart){
        case 'temperature': return temp;
        case 'pressure': return pressure;
        case 'humidity': return hum;
      }
    }
    
    return (
      <div className= "Chart">
{console.log('hum', hum)}
{console.log('temp', temp)}
{console.log('pressure', pressure)}
        { <Line
          // data={this.state.chartData}
          data={
            {
              labels: date,
              datasets: [
                {
                  label: this.props.typeOfChart,
                  
                  data: displayData()
                }
              ]
            }
          }
          options={{
            title: {
              display: true,
              text: `${this.props.typeOfChart} Chart`,
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
                   //beginAtZero: true
                  }
                }
              ]
            }
          }}
        /> }
      </div>
    );
  }
}

export default Chart;
