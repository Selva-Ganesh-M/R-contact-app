import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  addContact = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      return;
    } else {
      this.props.addContactHandler(this.state);
    }
  };

  render() {
    return (
      <div className="ui main">
        <h2>Create Contact</h2>
        <form className="ui form" onSubmit={this.addContact}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
