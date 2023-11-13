import React, { Component } from "react";
import { connect } from "react-redux";
import { descreaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.props.dispatch(descreaseCounter())}>
          1 Azalt
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(DecreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
