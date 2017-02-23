const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      console.log('Sample Action received');
      return Object.assign({}, state, action.sampleObject);
    default:
      return state;
  }
}

export default sampleReducer;