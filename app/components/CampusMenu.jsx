import React from 'react';

const CampusMenu = (props) => {
  return (
    <select
      value={props.campus}
      onChange={props.handleCampus}
      className="form-control"
    >
      <option>Select a campus</option>
      {props.campuses.map(aCampus => {
        return (

          <option
            value={`${aCampus.id}`}
            key={`${aCampus.id}`}
          > {`${aCampus.name}`}
          </option>
        );
      })}
    </select>
  );
};

export default CampusMenu;
