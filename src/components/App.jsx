import React, { Component } from 'react';
import { connect } from 'react-redux';
import sampleAction from '../actions/sampleAction';

import '../styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  reduxStore: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  sampleAction: () => {
    dispatch(sampleAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);