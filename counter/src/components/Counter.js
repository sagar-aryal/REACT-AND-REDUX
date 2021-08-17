import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your Score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onDecCounter}>Remove one</button>
          <button onClick={this.props.onReset}>Reset</button>
          <button onClick={this.props.onAddFive}>Add Five </button>
          <button onClick={this.props.onDecFive}>Decrease Five</button>
        </div>
        <button onClick={this.props.onStore}>Store the results</button>
        <div>
          <ul>
            {this.props.storedResults.map((items) => (
              <li key={items.id} onClick={() => this.props.onDelete(items.id)}>
                {items.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onReset: () => dispatch({ type: actionTypes.RESET }),
    onAddFive: () => dispatch({ type: actionTypes.ADDFIVE }),
    onDecFive: () => dispatch({ type: actionTypes.DECREASEFIVE }),
    onStore: () => dispatch({ type: actionTypes.STORE }),
    onDelete: (id) => dispatch({ type: actionTypes.DELETE, items: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
