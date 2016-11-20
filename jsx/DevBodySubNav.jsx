import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
class DevBodySubNav extends React.Component {
   render() {
      return (
          <div className="DevBodySubNav"> 
              <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                      Home
                  </li>
              </ol>
          </div>
      );
   }
}

export default DevBodySubNav;
