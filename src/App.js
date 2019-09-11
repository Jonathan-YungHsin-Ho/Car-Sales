import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Select from './components/Select';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { removeFeature } from './actions';
import { chooseVehicle } from './actions';

const App = props => {
  const [vehicles, setVehicles] = useState([
    {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [],
    },
  ]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/vehicles/`)
      .then(response => {
        setVehicles([
          ...vehicles,
          ...response.data.results.map(vehicle => {
            return {
              price:
                vehicle.cost_in_credits === 'unknown'
                  ? Math.floor(Math.random() * 100000)
                  : Number(vehicle.cost_in_credits),
              name: `${vehicle.manufacturer} ${vehicle.model}`,
              image: '',
              features: [],
            };
          }),
        ]);
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemoveFeature = id => {
    // dispatch an action here to remove an item
    props.removeFeature(id);
  };

  // const buyItem = item => {
  //   // dispatch an action here to add an item
  // };

  const handleSelect = e => {
    console.log(e.target.value);
    props.chooseVehicle(e.target.value);
  };

  return (
    <div className='wrapper'>
      <Select vehicles={vehicles} handleSelect={handleSelect} />
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
  { removeFeature, chooseVehicle },
)(App);
