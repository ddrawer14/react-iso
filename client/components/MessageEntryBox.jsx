import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          placeholder='Say what?!?!'
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}/>
      </div>
    );
  },

  handleChange(ev) {
    this.props.onChange(ev.target.value);
  },

  handleKeyPress(ev) {
    if (trimmedMessage) {
      this.props.onSubmit({
        text: trimmedMessage,
        userId: this.props.userId
      });
  }

})
