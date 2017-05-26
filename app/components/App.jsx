import React from 'react';
import { Link } from 'react-router';


const App = (props) => {
  return (
    <div>

      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">MH<i className="fa fa-space-shuttle" aria-hidden="true"></i></a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>

          </ul>
        </div>
      </nav>

      {props.children}

    </div>
  );
};


// const App = (props) => {
//   return (
//     <div>

//       <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
//       <span><Link to="/">Home</Link></span>
//       <span> == </span>
//       <span><Link to="/students">Students</Link></span>

//       {props.children}
//     </div>
//   );
// };

export default App;
