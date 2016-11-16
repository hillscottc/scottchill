import React from 'react'
import './code-samples.css';
import Project from './project'

const CodeSamples = () => (
    <div className="CodeSamples">

      <h2>Code Samples</h2>

      <h3>this site</h3>
      <p>Built with the create-react-app boilerplate + Bootstrap.</p>

      <section>
        <Project
            name="scottchill.com"
            github="https://github.com/hillscottc/scottchill"
            running="https://scottchill.herokuapp.com/">
        </Project>
      </section>

      <h3>Plants App</h3>
      <section>
        <p>
          A react UI for 90,000 records of <a target="_blank" href="https://plants.usda.gov/dl_all.html">USDA plant data</a>.
          Implemented in two ways:
        </p>
        <Project
            name="isomorphic React"
            year="2016"
            github="https://github.com/hillscottc/plantapp-iso"
            running="https://plantapp-iso.herokuapp.com/">
          <span>with React-Starter-Kit boilerplate</span>
        </Project>
        <Project
            name="Express + client React"
            year="2016"
            github="https://github.com/hillscottc/plantapp"
            running="https://plantapp.herokuapp.com">
          <span>with create-react-app boilerplate</span>
        </Project>
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
        <Project
            name="trivnode-react"
            year="2016"
            github="https://github.com/hillscottc/trivnode-react"
            running="https://trivnode-react.herokuapp.com/">
          <span>with React.</span>
        </Project>
        <Project
            name="trivnode"
            year="2014"
            github="https://github.com/hillscottc/trivnode"
            running="https://protected-lake-8296.herokuapp.com/">
          <span>with Backbone.js</span>
        </Project>
        <Project
            name="quest-django"
            year="2013"
            github="https://github.com/hillscottc/quest"
            running="https://quest-django.herokuapp.com/">
          <span>with Python + Django</span>
        </Project>
      </section>

      <h3>Fortune Teller App</h3>
      <section>
        <p>A Node module for generating random-ish fortune text, hosted on the <i>npm</i> package registry.</p>
        <Project
            name="nostra"
            year="2015"
            github="https://github.com/hillscottc/nostra">
          {/* NPM badge*/}
          <a href="https://badge.fury.io/js/nostra"><img src="https://badge.fury.io/js/nostra.svg" alt="npm version" height="18" /></a>
        </Project>
        <Project
            name="nostranode-react"
            year="2015"
            github="https://github.com/hillscottc/nostranode-react">
          <span>a basic UI with React</span>
        </Project>
        <Project
            name="nostranode"
            year="2015"
            github="https://github.com/hillscottc/nostranode"
            running="https://nostranode.herokuapp.com/">
          <span>a basic UI with Bootstrap and jQuery</span>
        </Project>
      </section>

    </div>
);

export default CodeSamples;