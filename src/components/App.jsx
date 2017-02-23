import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.reduxStore);
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
    dispatch({ type: 'SAMPLE_ACTION', sampleObject: {} })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);