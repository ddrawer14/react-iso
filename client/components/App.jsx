import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from './style.less';
import MessageList from 'components/MessageList';
import MessageEntryBox from 'components/MessageEntryBox';
import * as messageActionCreators from 'actions/message-actions';

var App = React.createClass({

  render: function() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <MessageEntryBox
          value={this.props.currentMessage}
          onChange={this.props.updateMessage}
          onSubmit={this.props.addMessage} />
      </div>
    );
  }

});
//Injects values from State to the component properties
function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentMessage: state.currentMessage
  };
}
//Injects action creator functions into the component properties
function mapDispatchToProps(dispatch) {
  //Add action creator functions
  return bindActionCreators(messageActionCreators, dispatch);
}
//Connects App component to the store by injecting state and dispatch into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
