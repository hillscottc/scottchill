import React from 'react'
import './code-samples.css';
import ProjectLink from './project-link'

const CodeSamples = () => (
    <div className="CodeSamples">

      <h2>Code Samples</h2>

      <h3>Plants App</h3>
      <section>
        <p>
          A react UI for 90,000 records of <a target="_blank" href="https://plants.usda.gov/dl_all.html">USDA plant data</a>.
          Implemented in two ways:
        </p>
        <p>
          <span className="project">isomorphic React-Starter-Kit</span>
          <ProjectLink github="https://github.com/hillscottc/plantapp-iso"
              running="https://plantapp-iso.herokuapp.com/" />
        </p>
        <p>
          <span className="project">Create-React-App</span>
          <ProjectLink github="https://github.com/hillscottc/plantapp"
                       running="https://plantapp.herokuapp.com" />
        </p>
      </section>

      <h3>Trivia App</h3>
      <section>
        <p>
          A single-page web app as a UI for a collection of trivia questions.
          Uses Node and Express to serve an api for a PostgreSQL database of 180,000+ records.
        </p>
        <p>
          This app has been re-implemented over time, using different technologies.
        </p>
        <br/>
        <p>
          <span className="project">trivnode-react</span> (2016) with React.
          <ProjectLink github="https://github.com/hillscottc/trivnode-react"
                       running="https://trivnode-react.herokuapp.com/" />
        </p>
        <p>
          <span className="project">trivnode</span> (2014) with Backbone.js
          <ProjectLink github="https://github.com/hillscottc/trivnode"
                       running="https://protected-lake-8296.herokuapp.com/" />
        </p>
        <p>
          <span className="project">quest-django</span> (2013) with Python + Django
          <ProjectLink github="https://github.com/hillscottc/quest"
                       running="https://quest-django.herokuapp.com/" />
        </p>
      </section>

      <h3>Fortune Teller App</h3>
      <section>
        <p>
          <span className="project">nostra</span>
          <ProjectLink github="https://github.com/hillscottc/nostra" />
          {/* NPM badge*/}
          &nbsp;<a href="https://badge.fury.io/js/nostra"><img src="https://badge.fury.io/js/nostra.svg" alt="npm version" height="18" /></a>
        </p>
        <p>A Node module for generating random-ish fortune text, hosted on the <i>npm</i> package registry.</p>
        <p>
          <span className="project">nostranode-react</span>...simple UI in Node, express, and React
          <ProjectLink github="https://github.com/hillscottc/nostranode-react" />
        </p>
        <p>
          <span className="project">nostranode</span>...simple UI with Bootstrap+ jQuery
          <ProjectLink github="https://github.com/hillscottc/nostranode"
                       running="https://nostranode.herokuapp.com/" />
        </p>
      </section>

    </div>
);

export default CodeSamples;