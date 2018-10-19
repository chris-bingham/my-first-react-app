import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Form.js";
import Header from "./Header.js";
import "./App.css";

const signUpForm = {
  name: "signUpForm",
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

const mainNav = [
  {
    id: "home_link",
    label: "Home",
    href: "/"
  },
  {
    id: "blog_link",
    label: "Blog",
    href: "/blog"
  },
  {
    id: "signup_link",
    label: "Sign Up",
    href: "/signup"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header menuItems={mainNav} />
        <Switch>
          <Route exact path="/" render={() => <h2>HOME</h2>} />
          <Route path="/signup" render={() => <Form {...signUpForm} />} />

          <Route path="/blog" render={() => <h2>BLOG</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
