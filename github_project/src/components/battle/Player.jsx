import React from 'react';
import PropTypes from 'prop-types';

const Player = props => (
  <div className="column">
    { props.result ? <span>{props.result}</span> : null }

    <img src={props.image} alt={`Avatar for ${props.username}`} />

    <h2>
      <a href={`https://github.com/${props.username}`}>
        @{props.username}
      </a>
    </h2>

    { props.result && <p>{props.data.followers} followers</p> }

    <button
      onClick={() => props.onReset.call(null, props.id)}
      className="button small"
    >
      Reset
    </button>
  </div>
);

Player.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object),
  result: PropTypes.string,
};

Player.defaultProps = {
  data: null,
  result: null,
};

export default Player;
