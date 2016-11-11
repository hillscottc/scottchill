import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import CodeSamples from './code-samples'

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

              <h1>Scott C. Hill</h1>
              <p>software engineer, web developer</p>
              <p>
                [<a href="http://blog.scottchill.com">tech blog</a>,
                <a href="https://www.linkedin.com/in/scotthill2000">linkedin</a>]
              </p>


              <CodeSamples />

            </Grid>
          </Jumbotron>
        </div>
    );
  }
}

export default App;