import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Apps1 extends Component{
    constructor() {
        super();

        this.state{
            string: "Patrick, world's developer";

        };
    }

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              this.state.string
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
        </div>
      );

}