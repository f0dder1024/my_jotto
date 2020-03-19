import {actionTypes} from '../actions';

/**
 * @function succesReducer
 * @param {boolean} state - Current success state
 * @param {object} action - New success state
 */
export default (state = false, action) => {
  switch(action.type){
    case(actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
};
