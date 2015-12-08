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

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentMessage: state.currentMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
