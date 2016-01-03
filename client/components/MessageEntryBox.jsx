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
  //Runs each time value of textarea changes
  handleChange(ev) {
    this.props.onChange(ev.target.value);
  },
  //Runs each time user presses a key inside textarea
  handleKeyPress(ev) {
    if (ev.which === 13) {
      this.props.onSubmit();
      ev.preventDefault();
    }
  }

})
