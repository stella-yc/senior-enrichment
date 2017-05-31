import React from 'react';
import { Link } from 'react-router';

const StudentRow = (props) => {

  const handleDelete = (event) => {
    props.deleteStudent(props.id);
    event.preventDefault();
  };

  const includesCampus = (
    <tr>
      <td>{props.id}</td>
      <td><Link to={`/student/${props.id}`}>{props.name}</Link></td>
      <td><Link to={`/campus/${props.campusId}`}>{props.campus}</Link></td>
      <td>
        <button
          className="btn btn-danger"
          onClick={handleDelete}>X
        </button>
      </td>
    </tr>
  );

  const noCampus = (
    <tr>
      <td>{props.id}</td>
      <td><Link to={`/student/${props.id}`}>{props.name}</Link></td>
      <td>
        <button
          className="btn btn-danger"
          onClick={handleDelete}>X
        </button>
      </td>
    </tr>
  );

  return props.campus ? includesCampus : noCampus;

};

export default StudentRow;
