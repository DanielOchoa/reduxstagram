import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {

  state = {
    personId: null,
  }

  componentDidMount() {
    this.setState({ personId: 'me' });
  }

  render() {
    const { personId } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            {/* routes */}
            <Route path='/' exact={true} render={() => (
              <Main>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>Link to <Link to={`/about/${personId}`}>someplace</Link>.</p>
              </Main>
            )}/>

            <Route path='/about/:personId' component={About} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
