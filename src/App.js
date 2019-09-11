import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { removeFeature } from './actions';

const App = props => {
  const handleRemoveFeature = id => {
    // dispatch an action here to remove an item
    props.removeFeature(id);
  };

  // const buyItem = item => {
  //   // dispatch an action here to add an item
  // };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures
          car={props.car}
          handleRemoveFeature={handleRemoveFeature}
        />
      </div>
      <div className='box'>
        <AdditionalFeatures />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  { removeFeature },
)(App);
