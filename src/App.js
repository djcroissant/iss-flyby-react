import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      number: ''
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
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Latitude:
          <input
            name="latitude"
            type="number"
            value={this.state.value}
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
            value={this.state.value}
            onChange={this.handleChange}
            step="0.00001"
            min="-180"
            max="180"
          />
        </label>
        <br />
        <label>
          Altitude:
          <input
            name="altitude"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
            min="0"
            max="45000"
          />
        </label>
        <br />
        <label>
          Number of passovers:
          <input
            name="number"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
            min="0"
            max="100"
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function FlybyRows(props) {
  const flybys = props.response;
  const flybyRows = flybys.map((flyby) =>
    <tr key={flyby.risetime.toString()}>
      <td>{flyby.risetime}</td>
      <td>{flyby.duration}</td>
    </tr>
  );
  return (
    <tbody>
      {flybyRows}
    </tbody>
  );
}

function FlybyTable(props) {
  const response = [
    {"risetime": "time1", "duration": "duration1"},
    {"risetime": "time2", "duration": "duration2"},
  ];
  return (
    <table>
      <thead>
      <tr>
        <th>Rise Time</th>
        <th>Duration</th>
      </tr>
      </thead>
      <FlybyRows response={response}/>
    </table>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IssApiForm />
        <FlybyTable />
      </div>
    );
  }
}

export default App;
