import React from 'react';
var navbarStyle = {
  color: 'white',
  width: '100%',
  height: '48px',
  backgroundColor: '#37474F',
  position:'absolute',
  top:'0',
  left:'0',
  zIndex: 2,
  borderBottom: '1px solid #C0C0C0'
};
class DevNavbar extends React.Component {
   render() {
      return (
          <div style={navbarStyle}> </div>
      );
   }
}

export default DevNavbar;
