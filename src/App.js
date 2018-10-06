import React, { Component } from "react";
import Form from "./Form.js";
import "./App.css";

const signUpForm = {
  fields: [
    {
      id: "email_field",
      label: "Email address: ",
      type: "text"
    },
    {
      id: "password_field",
      label: "Password: ",
      type: "password"
    },
    {
      id: "firstname_field",
      label: "Full name: ",
      type: "text"
    },
    {
      id: "lastname_field",
      label: "Last name: ",
      type: "text"
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form name={"signUpForm"} fields={signUpForm.fields} />
      </div>
    );
  }
}

export default App;
