import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = props => (
  <div className="column">
    <img src={props.image} alt={`Avatar for ${props.username}`} />
    <h2>
      <a href={`https://github.com/${props.username}`}>
        @{props.username}
      </a>
    </h2>
    <button
      onClick={() => props.onReset.call(null, props.id)}
      className="button small"
    >
      Reset
    </button>
  </div>
);

PlayerPreview.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PlayerPreview;
