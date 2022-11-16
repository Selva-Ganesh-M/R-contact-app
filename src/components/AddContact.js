import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    isLoading: false,
    redirect: false,
  };

  addContact = (e) => {
    console.log("form got submitted...");
    this.setState({ isLoading: true });
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      this.setState({ isLoading: false });
      return;
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "", isLoading: false, redirect: true });
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
          {this.state.isLoading && "Loading..."}
          {!this.state.isLoading && (
            <button type="submit" className="ui button blue">
              Add
            </button>
          )}
          <Link to="/">
            <button className="ui button blue right">Home</button>
          </Link>
        </form>

        {this.state.redirect && <Navigate to="/" replace={true} />}
      </div>
    );
  }
}

export default AddContact;
