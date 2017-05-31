import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/** CampusIcon Presentational Component***/
const CampusIcon = (props) => {
  let id = props.id;
  let name = props.name;
  let imageURL = props.imageURL;
  return (
      <div className="col-xs-6">
        <h5 className="text-center cool-font">{name}</h5>
          <div className="planet">
            <Link to={`/campus/${id}`}>
              <img src={imageURL} className="img-responsive" />
            </Link>
          </div>
      </div>
  );
};

/** AllCampuses Dumb Component Version **/
const AllCampuses = (props) => {

  return (
    <div className="container" >
      <h4 id="title" className="cool-font">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      Margaret Hamilton Interplanetary Academy of JavaScript
      <i className="fa fa-star-o" aria-hidden="true"></i>
      </h4>

      <div className="container-fluid">
        <div className="row">
        {
          props.campuses.map(campus => {
            return (
              <CampusIcon
                key={campus.name}
                name={campus.name}
                id={campus.id}
                imageURL={campus.imageURL}
              />
            );
          })
        }
        </div>
      </div>
      <Link to="/newCampus"><h4 className="more-padding">
      <i className="fa fa-hand-o-right" aria-hidden="true"></i>
      Join our space campuses!</h4></Link>
    </div>
  );
};


/*** AllCampuses Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);


/** AllCampuses Smart Component Redux Only **/

// class AllCampuses extends Component {
//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//   }

//   componentDidMount () {
//     store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount () {
//     this.unsubscribe();
//   }

//   render () {
//     return (
//       <div>
//         <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
//         {
//           this.state.allCampuses.map((campus, idx) => {
//             return (
//               <CampusIcon
//                 key={idx}
//                 name={campus.name}
//                 imageUrl={campus.imageUrl}
//               />
//             );
//           })
//         }

//       </div>
//     );
//   }

// }
