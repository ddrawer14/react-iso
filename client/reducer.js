import {UPDATE_MESSAGE, ADD_MESSAGE} from 'actions/message-actions'

export default function (initialState) {
  return (state=initialState, action) => {

    switch(action.type) {

      //currentMessage is updated
      case UPDATE_MESSAGE:
        return Object.assign({}, state, { currentMessage: action.message });

      //currentMessage value is trimmed and added as new message to the messages list
      case ADD_MESSAGE:
        const text = state.currentMessage.trim();
        //if it’s not an empty string after trimming
        if (text) {
          //return new copy of the messages array
          let messages = state.messages.map(message => Object.assign({}, message));
          messages.push({id: messages.length + 1, text});

          return {
            messages,
            currentMessage: ''  //value of currentMessage is reset
          };
        }

      default:
        return state;
    }
  }
}
