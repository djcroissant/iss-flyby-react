import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function InputElement(props) {
//   return (
//     <label for={props.id}>{props.label}</label>
//     <input id={props.id} type="number" name={props.name} />
//   );
// }
//
// function InputSet(props) {
//   return (
//     <div className="UserInput">
//       <InputElement id="latitude" label="Latitude:" name="latitude" />
//
//     </div>
//   );
// }

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
