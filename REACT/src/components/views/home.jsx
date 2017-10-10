import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
       <div className="App">
        <header className="App-header" role = "banner">
          <nav>
            <a href="../index.html">Home</a> &gt; <a href="react_examples.html">React Techniques</a>
          </nav>
          <hr className="hr" />
        </header>
        <main>
        <h1 className="App-title">React Examples</h1>  
          <ul>
            <li><a href="./lists">Lists</a></li>
          </ul>

        {/* Component end */}
        </main>
        <footer role="contentinfo">
          <hr className="hr" />
        </footer>
      </div>           
    );
  }
}