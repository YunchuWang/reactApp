import React from 'react';
import DevSidebarTodolistTab from './DevSidebarTodolistTab.jsx';

var sidebarStyle = {
    position: 'absolute',
    width: '260px',
    height: '2952px',
    backgroundColor: '#263238',
    top:'48px',
    bottom: '0px',
    left:'0',
    zIndex: 1,
    color:"red",
    overflow: "visible"
};
class DevSidebar extends React.Component {
   render() {
      return (
                  <div style={sidebarStyle}> 
                     <p>jkjkj</p>
                    <p>teijidjid</p>
               <DevSidebarTodolistTab/>
                  </div>
                    
        
      );
   }
}

export default DevSidebar;
