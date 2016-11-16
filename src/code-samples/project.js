/**
 * A summary of Project info.
 * Conditionally displays 'github' and 'running' links for a project
 * along with optional child content.
 */
import React, { PropTypes }  from 'react'
import './project.css';


const Project = ({name, year, github, running, children}) => (
  <span className="project">

    <span className="projectName">{name} </span>

    {year &&
      <span>({year}) </span>
    }

    {/* render nested content */}
    {children}

    &nbsp;(&nbsp;

    {github &&
      <span>
        <a href={github}>github</a>
      </span>
    }

    {github && running &&
      <span>&nbsp;|&nbsp;</span>
    }

    {running &&
    <span>
      <a href={running}>running</a>
    </span>
    }

    &nbsp;)
    <br/>
  </span>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string,
  github: PropTypes.string,
  running: PropTypes.string
};

export default Project;