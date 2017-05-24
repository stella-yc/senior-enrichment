import React, {Component} from 'react';
import store from '../store';

/** CampusIcon Presentational Component***/
const CampusIcon = (props) => {
  let name = props.name;
  let imageUrl = props.imageUrl;
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl}/>
    </div>
  );
};



/** AllCampuses Smart Component **/

class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return (
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        {
          this.state.allCampuses.map((campus, idx) => {
            return (
              <CampusIcon
                key={idx}
                name={campus.name}
                imageUrl={campus.imageUrl}
              />
            );
          })
        }

      </div>
    );
  }

}



/** Dummy Campus Data */
// const campuses = [
//   { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' },
//   { name: 'Luna', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Moon_apollo12.jpg' },
//   { name: 'Terra', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif' },
//   { name: 'Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Titan_multi_spectral_overlay.jpg' }
// ];

/** AllCampuses Dumb Presentational Version **/
// const AllCampuses = (props) => {
//   console.log('AllCampuses Props', props);
//   return (
//     <div>
//       <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
//       {
//         campuses.map(campus => {
//           return (
//             <CampusIcon
//               name={campus.name}
//               imageUrl={campus.imageUrl}
//             />
//           );
//         })
//       }

//     </div>
//   );
// }

export default AllCampuses;
