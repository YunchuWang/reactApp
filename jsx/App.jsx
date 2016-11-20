import React from 'react';
import Test from './Test.jsx';
import DevNavbar from './DevNavbar.jsx';
import DevSidebar from './DevSidebar.jsx';
import DevBody from './DevBody.jsx';
import '../css/style.css';
var bodyStyle = {
  color: 'blue',
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: '0',
  bottom: '0'
};
class App extends React.Component {
   render() {
      return (
          <div>
              <DevNavbar/>
              <DevSidebar />
              <DevBody>
              </DevBody>
          </div>
      );
   }
}

export default App;
