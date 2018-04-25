import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import CodeSamples from './code-samples/code-samples'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">scottchill.com</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
          <Jumbotron>
            <Grid>

              <section className="intro">
                <header>Scott C. Hill</header>
                <p>software engineer, web developer</p>
                <p>
                  [<a href="http://blog.scottchill.com">tech blog</a>,
                  <a href="https://www.linkedin.com/in/scotthill2000">linkedin</a>]
                </p>
              </section>

              <CodeSamples />

            </Grid>
          </Jumbotron>
        </div>
    );
  }
}

export default App;