import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Form extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Add your notes here"></input>
        <button onClick={this.props.onAdd}>ADD</button>
        <div>
          <ul>
            {this.props.storedNotes.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storedNotes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: actionTypes.ADD }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
