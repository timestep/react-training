import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  id: 1,
  name: 'Jane Doe',
  token: '1234',
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}

export default sessionReducer;
