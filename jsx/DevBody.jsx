import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyGrids from './DevBodyGrids.jsx';
import Cell from './Cell.jsx';

var devbodyStyle = {
  width: '1020px',
  height: '2952px',
  backgroundColor: '#F5F5F5',
  position:'absolute',
  //top:'0',
  top:'48px',
  bottom: '0px',
  right:'0px',
  zIndex: 1,
  color:"red",
  margin:"0px",
  padding:"0px"
};

const info0 = {
    name: 'news',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'newsPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Notification-icon-Incubator-logo.svg'
    },
    text: 'News',
}

const info1 = {
    name: 'tasks',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'tasksPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Notification-icon-Wikibooks-logo.svg'
    },
    text: 'Tasks',
}

const info2 = {
    name: 'emails',
    typeUrl: 'https://www.google.com',
    pic: {
        name: 'emailsPic',
        picUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/AWS_Simple_Icons_Messaging_Amazon_SNS_Email_Notification.svg'
    },
    text: 'Emails',
}

const ulStyle = {
    margin: 'auto',
    padding: 0,
    width:800,
    listStyleType: 'none',
    display: 'block',
    maxWidth: 1200,
}

class DevBody extends React.Component {
   render() {
      return (
          <div style={devbodyStyle}> 
              <DevBodyMainNav></DevBodyMainNav>
              <DevBodySubNav></DevBodySubNav>
              <DevBodyGrids></DevBodyGrids>
          </div>
      );
   }
}

export default DevBody;
