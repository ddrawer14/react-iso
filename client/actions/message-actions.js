export const UPDATE_MESSAGE = 'update-message';
export const ADD_MESSAGE = 'add-message';
export const SET_USER_ID = 'setUserId';
export const ADD_RESPONSE = 'add-response';

export function updateMessage(message) {
  return { type: UPDATE_MESSAGE, message };
}

export function addMessage() {
  return { type: ADD_MESSAGE };
}

export function setUserId(userId) {
  return { type: SET_USER_ID, userId };
}

export function addResponse(message) {
  return { type: ADD_RESPONSE, message };
}
