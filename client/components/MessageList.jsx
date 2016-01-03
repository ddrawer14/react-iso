import React from 'react'

export default React.createClass({

  render: function(){
    return (
      <ol className='message-list'>
        //Expect list of messages
        {this.props.messages.map( (message, index) => {
          return (
            //return ordered list of messages w/ each message as a list item
            <li key={`message-${index}`}>
              {message.text}
            </li>
          );
        })}
      </ol>
    );
  }

});
