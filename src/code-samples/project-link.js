/**
 * A summary of Project info.
 * Conditionally displays 'github' and 'running' links for a project
 * along with optional child content.
 */
import React, { PropTypes }  from 'react'

const ProjectLink = ({name, github, running, children}) => (
  <span>

    <span className="project">{name} </span>

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
  </span>
);

ProjectLink.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string,
  running: PropTypes.string
};

export default ProjectLink;