import React, { Component } from "react";
import Form from "./Form.js";
import "./App.css";

const signUpForm = {
  fields: [
    {
      id: "email_field",
      label: "Email address: ",
      type: "text",
      validation: "email",
      placeholder: "chris@example.com",
      required: true
    },
    {
      id: "password_field",
      label: "Password: ",
      type: "password",
      validation: "password",
      required: true
    },
    {
      id: "confirmpassword_field",
      label: "Confirm Password: ",
      type: "password",
      validation: "confirmPassword",
      required: true
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
