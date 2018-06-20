import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class IssApiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      altitude: '',
      number: '',
      flybys: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('The form was submitted');
    axios.get(
      "http://api.open-notify.org/iss-pass.json?lat=" +
      this.state.latitude.toString() +
      "&lon=" +
      this.state.longitude.toString() +
      // "&alt=" +
      // (this.state.altitude + 1).toString() +    // eliminating this due to unexpected API behavior
      "&n=" +
      this.state.number.toString()
      )
      .then(response => {
        // console.log(response.data);
        this.setState({
          'flybys': response.data.response
        });
      })
    event.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <div className="iss-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Latitude:
              <input
                name="latitude"
                type="number"
                value={this.state.latitude}
                onChange={this.handleChange}
                step="0.00001"
                min="0"
                max="90"
              />
            </label>
            <br />
            <label>
              Longitude:
              <input
                name="longitude"
                type="number"
                value={this.state.longitude}
                onChange={this.handleChange}
                step="0.00001"
                min="-180"
                max="180"
              />
            </label>
            {/* <br />  // Removing due to unexpected API behavior
            <label>
              Altitude:
              <input
                name="altitude"
                type="number"
                value={this.state.altitude}
                onChange={this.handleChange}
                step="1"
                min="0"
                max="45000"
              />
            </label> */}
            <br />
            <label>
              Number of passovers:
              <input
                name="number"
                type="number"
                value={this.state.number}
                onChange={this.handleChange}
                step="1"
                min="0"
                max="100"
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="flyby-table">
          {this.state.flybys !== '' ?
          <FlybyTable response={this.state.flybys} /> : null}
        </div>
      </div>
    );
  }
}

class FlybyRows extends Component {
  s_to_min = function(seconds) {
    // takes number of seconds in string form
    // converts to minutes and rounds to nearest whole number
    // returns minutes in string form
    const s = parseInt(seconds);
    const m = Math.round(s / 60);
    return m.toString();
  }

  render() {
    const flybys = this.props.response;
    const flybyRows = flybys.map((flyby) =>
      <tr key={flyby.risetime.toString()}>
        <td>{flyby.risetime}</td>
        <td>{this.s_to_min(flyby.duration)}</td>
      </tr>
    );
    return (
      <tbody>
        {flybyRows}
      </tbody>
    );
  }
}

class FlybyTable extends Component {
  render() {
    if (this.props.flybys !== '') {
      return (
        <table>
          <thead>
          <tr>
            <th>Rise Time</th>
            <th>Duration (minutes)</th>
          </tr>
          </thead>
          <FlybyRows response={this.props.response}/>
        </table>
      );
    } else {
      return null
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IssApiForm />
      </div>
    );
  }
}

export default App;
