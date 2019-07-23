import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table"

class App extends Component {
  state = {
    data: []
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form
      onSubmit={submission =>
        this.setState({
        data: [...this.state.data, submission]

      })}
      />
      <Table
      data={this.state.data}
      header={[
        {
      name:  "Frist name",
      prop: "fristName"
    },
      {
        name: "Last name",
        prop:"LastName"
      },
      {
        name:  "University",
        prop:"university"
        },
        {
          name: "Major",
          prop:"major"
         },
         {
          name:  "CV",
          prop:"cv"
          },
          ]}
          />
    </div>
  );
}

export default App;
