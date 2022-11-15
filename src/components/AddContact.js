import React, { Component } from "react";

export class AddContact extends Component {
  render() {
    return (
      <div className="ui main">
        <h2>Create Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name:</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className="field">
            <label>Name:</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
