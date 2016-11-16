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
            github="https://github.com/hillscottc/plantapp-iso"
            running="https://plantapp-iso.herokuapp.com/">
          <span>(2016) with React-Starter-Kit boilerplate</span>
        </Project>
        <Project
            name="Express + client React"
            github="https://github.com/hillscottc/plantapp"
            running="https://plantapp.herokuapp.com">
          <span>(2016) with create-react-app boilerplate</span>
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
            github="https://github.com/hillscottc/trivnode-react"
            running="https://trivnode-react.herokuapp.com/">
          <span>(2016) with React.</span>
        </Project>
        <Project
            name="trivnode"
            github="https://github.com/hillscottc/trivnode"
            running="https://protected-lake-8296.herokuapp.com/">
          <span>(2014) with Backbone.js</span>
        </Project>
        <Project
            name="quest-django"
            github="https://github.com/hillscottc/quest"
            running="https://quest-django.herokuapp.com/">
          <span>(2013) with Python + Django</span>
        </Project>
      </section>

      <h3>Fortune Teller App</h3>
      <section>
        <p>A Node module for generating random-ish fortune text, hosted on the <i>npm</i> package registry.</p>
        <Project
            name="nostra"
            github="https://github.com/hillscottc/nostra">
          {/* NPM badge*/}
          <a href="https://badge.fury.io/js/nostra"><img src="https://badge.fury.io/js/nostra.svg" alt="npm version" height="18" /></a>
        </Project>
        <Project
            name="nostranode-react"
            github="https://github.com/hillscottc/nostranode-react">
          <span>...simple UI in Node, express, and React</span>
        </Project>
        <Project
            name="nostranode"
            github="https://github.com/hillscottc/nostranode"
            running="https://nostranode.herokuapp.com/">
          <span>...simple UI with Bootstrap+ jQuery</span>
        </Project>
      </section>

    </div>
);

export default CodeSamples;