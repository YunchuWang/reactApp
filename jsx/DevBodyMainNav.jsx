import React from 'react';
var devbodymainnavStyle = {
  width: '100%',
  height: '93px',
  backgroundColor: '#FFFFFF',
  position:'absolute',
  top:'0px',
  left:'0px',
  zIndex: 1,
  color:"red"
};
class DevBodyMainNav extends React.Component {
   render() {
      return (
          <div style={devbodymainnavStyle}> </div>
      );
   }
}

export default DevBodyMainNav;
