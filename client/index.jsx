import React from 'react';
import ReactDOM from 'react-dom';
import SelectMenu from './components/SelectMenu.jsx'
import TimeChart from './components/TimeChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      results: []
    }
    this.grabStart = this.grabStart.bind(this);
  }
  grabStart({bpi}) {
    this.setState({results: bpi});
    console.log(this.state);
  }
  render () {
    return (
      <div className="outer-container">
        <SelectMenu grabStart={this.grabStart}/>
        <TimeChart results={this.state.results}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));