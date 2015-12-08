import React from 'react'

export default React.createClass({

  render: function(){
    return (
      <ol className='message-list'>
        {this.props.messages.map((message, index) => {
          return (
            <li key={`message-${index}`}>
              {message.text}
            </li>
          );
        })}
      </ol>
    );
  }

});
