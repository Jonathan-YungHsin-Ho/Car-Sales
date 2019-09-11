import React from 'react';

export default function Select(props) {
  return (
    <div class='control'>
      <div class='select is-loading'>
        <select onChange={props.handleSelect}>
          <option>Select a vehicle</option>
          {props.vehicles.map(vehicle => (
            <option key={vehicle.name} value={JSON.stringify(vehicle)}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
