import React from 'react';

class TimeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidUpdate() {
      let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: Object.keys(this.props.results),
                datasets: [{
                    label: "Bitcoin Prices in USD",
                    borderColor: 'rgb(255, 99, 132)',
                    data: Object.values(this.props.results),
                }]
            },
            // Configuration options go here
            options: {}
        });
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div>
    )
  }
}

export default TimeChart;