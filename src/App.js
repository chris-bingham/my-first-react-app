import React, { Component } from "react";
import Form from "./Form.js";
import "./App.css";

const signUpForm = {
  title: "Sign up",
  fields: [
    {
      id: "email_field",
      label: "Email address:",
      type: "text",
      validation: "email",
      placeholder: "chris@example.com",
      required: true
    },
    {
      id: "password_field",
      label: "Password:",
      type: "password",
      validation: "password",
      required: true,
      message:
        "Password must be atleast 8 chars and contain a letter and a number"
    },
    {
      id: "confirmpassword_field",
      label: "Confirm Password:",
      type: "password",
      validation: "confirmPassword",
      required: true
    },
    {
      id: "firstname_field",
      label: "First name:",
      type: "text"
    },
    {
      id: "lastname_field",
      label: "Last name:",
      type: "text"
    },
    {
      id: "postcode_field",
      label: "Post code:",
      type: "text",
      defaultValue: "SN13 8PN"
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form
          name={"signUpForm"}
          title={signUpForm.title}
          fields={signUpForm.fields}
        />
      </div>
    );
  }
}

export default App;
