const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return Object.assign({}, state, action.sampleObject);
    default:
      return state;
  }
}

export default sampleReducer;