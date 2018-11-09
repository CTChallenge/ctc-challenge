import React, { Component } from 'react';
import Chart from 'chart.js';
import axios from 'axios';


export default class Data extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('https://data.ct.gov/resource/deaths.json')
      .then((res) => {
        console.log(res.data);
      });
    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Hartford", "New Haven", "Middlesex", "Litchfield", "New London", "Tolland", "Windham"],
        datasets: [{
          label: '# of Overdose Deaths',
          data: [12, 19, 3, 5, 2, 3, 4, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(41, 107, 172, 0.7)',
            'rgba(62, 154, 39, 0.7)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }


  render() {
    return (
      <div>
        <div>data goes here</div>
        <canvas id="myChart" width="200" height="200"></canvas>
      </div>
    );
  }
}
