import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  render: function() {
    return <div>
      {this.props.winner ? 
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});
// does the component receive the server side function 'vote' through this code? 
// onClick is somehow triggering that function with the entry as the argument?
