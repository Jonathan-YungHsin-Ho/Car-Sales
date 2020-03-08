import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button2'
        onClick={() => props.handleRemoveFeature(props.feature)}>
        <a class='delete'></a>
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
