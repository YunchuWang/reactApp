import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx'
var devbodyStyle = {
  width: '1020px',
  height: '2952px',
  backgroundColor: '#F5F5F5',
  position:'absolute',
  top:'0',
  top:'48px',
  bottom: '0px',
  right:'0px',
  zIndex: 1,
  color:"red",
  margin:"0px",
  padding:"0px"
};
class DevBody extends React.Component {
   render() {
      return (
          <div style={devbodyStyle}> 
              <DevBodyMainNav></DevBodyMainNav>
          </div>
      );
   }
}

export default DevBody;
