/**
 * Conditionally displays 'github' and 'running' links for a project.
 */
import React, { PropTypes }  from 'react'

const ProjectLink = ({github, running}) => (
  <span>
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
  github: PropTypes.string,
  running: PropTypes.string
};

export default ProjectLink;