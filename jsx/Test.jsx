import React from 'react';

const divStyle = {
  color: 'blue',
  backgroundColor: 'red'
};
class Test extends React.Component {
   render() {
      return (
         <div style={this.props.style}>
            {this.props.message}
         </div>
      );
   }
}

export default Test;
