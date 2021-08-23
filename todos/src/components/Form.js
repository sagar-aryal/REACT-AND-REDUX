import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Todos-List</h1>
        <p>
          Currently, you have {this.props.noteList.length} notes in your
          todos-list.
        </p>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="Add notes...."
            value={this.props.inputNotes}
            onChange={this.props.onInputNotes}
          />

          <button type="submit">ADD</button>
        </form>

        <div>
          <ul>
            {this.props.noteList.map((item) => (
              <li key={item.id}>
                {item.task}
                <button onClick={() => this.props.onEdit(item.id)}>Edit</button>
                <button onClick={() => this.props.onDelete(item.id)}>
                  Delete
                </button>
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
    inputNotes: state.inputNote,
    noteList: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputNotes: (event) =>
      dispatch({ type: actionTypes.INPUTNOTES, payload: event.target.value }),
    onSubmit: (event) => {
      event.preventDefault();
      dispatch({ type: actionTypes.ADD });
    },
    onDelete: (payload) => dispatch({ type: actionTypes.DELETE, payload }),
    onEdit: (payload) => dispatch({ type: actionTypes.EDIT, payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
