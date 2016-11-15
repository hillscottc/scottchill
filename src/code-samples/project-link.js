/**
 * Conditionally displays 'github' and 'running' links for a project.
 */
import React, { PropTypes }  from 'react'

const ProjectLink = (props) => (
  <span>
    &nbsp;(&nbsp;

    {props.github &&
      <span>
        <a href={props.github}>github</a>
      </span>
    }


    {props.github && props.running &&
      <span>&nbsp;|&nbsp;</span>
    }


    {props.running &&
    <span>
      <a href={props.running}>running</a>
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