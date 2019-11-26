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

        { <Line
          data={
            {
              labels: date,
              datasets: [
                {
                  label: this.props.typeOfChart,
                  fill:true,
                  data: displayData(),
                  backgroundColor: '#5F6368',
                  pointBackgroundColor:'#fff',
                  pointBorderColor:'red',
                  borderColor:'rgba(0,0,0,0.3)'
                }
              ]
            }
          }
          options={{
            maintainAspectRatio : false,
            animation: {
              duration: 3000 // general animation time
          },
            title: {
              display: false,
              text: `${this.props.typeOfChart} Chart`,
              fontSize: 50,
              fontColor: 'white'
            },
            legend: {
              display: true,
              position: "right",
              labels: {
              fontColor: 'white'
              }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                   //beginAtZero: true
                   
              fontColor: 'white'
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                   //beginAtZero: true
                   
              fontColor: 'white'
                  }
                }
              ]
            },
            
          }}
        /> }
      </div>
    );
  }
}

export default Chart;
