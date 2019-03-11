import React from 'react';
import Axios from 'axios';

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMonth: '07',
      startDay: '17',
      startYear: '2010',
      endMonth: null,
      endDay: null,
      endYear: null
    }
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }
  handleChangeStart (e) {
    let val = e.target.value;
    if (val.length <= 2) {
      if (val < 10) {
        this.setState({startDay: "0" + val})
      } else {
        this.setState({startDay: val});
      }
    } else if (val.length > 4) {
      this.setState({startMonth: val.split(',')[1]});
    } else {
      this.setState({startYear: val});   
    };
  }
  handleChangeEnd (e) {
    let val = e.target.value;
    if (val.length <= 2) {
      if (val < 10) {
        this.setState({endDay: "0" + val})
      } else {
        this.setState({endDay: val});
      }
    } else if (val.length > 4) {
      this.setState({endMonth: val.split(',')[1]});
    } else {
      this.setState({endYear: val});   
    };
  }
  requestBitCoin () {
    console.log(this.state)
    Axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startYear}-${this.state.startMonth}-${this.state.startDay}&end=${this.state.endYear}-${this.state.endMonth}-${this.state.endDay}`)
    .then((res) => {
      this.props.grabStart(res.data)
    });
  }
  render () {
    return (
      <div className="nav-menu" >
      <h1>Cryptocurrency Charter</h1>
      <form className="date-container" onChange={this.handleChangeStart}>
        Month:
        <select className="date-select" >
          {[['Jan', '01'], ['Feb', '02'], ['Mar', '03'], 
          ['Apr', '04'], ['May', '05'], ['Jun', '06'],
           ['Jul', '07'], ['Aug', '08'], ['Sept', '09'],
            ['Oct', '10'], ['Nov', '11'], ['Dec', '12']].map((month, i) => {
            return <option value={month} key={i} >{month[0]}</option>
          })}
        </select>
        Day:
        <select className="date-select">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, i) => {
            return <option value={day} key={i} >{day}</option>
          })}
        </select>
        Year:
        <select className="date-select">
          {[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019].map((year, i) => {
            return <option value={year} key={i} >{year}</option>
          })}
        </select>
      </form>
      <form className="date-container" onChange={this.handleChangeEnd}>
        Month:
        <select className="date-select">
          {[['Jan', '01'], ['Feb', '02'], ['Mar', '03'], 
          ['Apr', '04'], ['May', '05'], ['Jun', '06'],
           ['Jul', '07'], ['Aug', '08'], ['Sept', '09'],
            ['Oct', '10'], ['Nov', '11'], ['Dec', '12']].map((month, i) => {
            return <option value={month} key={i} >{month[0]}</option>
          })}
        </select>
        Day:
        <select className="date-select">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, i) => {
            return <option value={day} key={i} >{day}</option>
          })}
        </select>
        Year:
        <select className="date-select">
          {[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019].map((year, i) => {
            return <option value={year} key={i} >{year}</option>
          })}
        </select>
      </form>
      <form className="date-container" onChange={this.handleChange}>
      Type:
        <select>
          {["Bitcoin"].map((day, i) => {
            return <option value={day} key={i} >{day}</option>
          })}
        </select>
      Sort By:
        <select>
          {["Year", "Month", "Week", "Day"].map((day, i) => {
            return <option value={day} key={i} >{day}</option>
          })}
        </select>

      </form>
        <button onClick={this.requestBitCoin.bind(this)}>BitCoins</button>
      </div>
      
    )
  }
}

export default SelectMenu;