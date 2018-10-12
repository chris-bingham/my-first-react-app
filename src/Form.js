import React, { Component } from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";
import Validate from "./FormValidation.js";

const DEFAULT_STATE = {
  formData: {},
  formValid: false,
  submitted: false
};

class Form extends Component {
  state = DEFAULT_STATE;

  static getDerivedStateFromProps(props, state) {
    if (Object.keys(state.formData).length === 0) {
      let formData = {};
      props.fields.forEach(field => {
        formData[field.id] = field;
        formData[field.id].isValid = !field.required;
        formData[field.id].activated = false;
        formData[field.id].message = field.message || "";
      });
      state.formData = formData;
    }
    return state;
  }

  // addFormFieldsToState = () => {
  //   this.setState({ formData: this.getFormFields(this.props.fields) });
  // };

  // getFormFields = fields => {
  //   let formData = {};
  //   fields.forEach(field => {
  //     formData[field.id] = field;
  //     formData[field.id].isValid = !field.required;
  //   });
  //   return formData;
  // };

  handleInput = event => {
    let formData = this.state.formData;

    for (var key in formData) {
      if (key === event.target.id) {
        formData[key].value = event.target.value;
        let validation = Validate(formData[key]);
        console.log(validation);
        formData[key].isValid = validation.result || false;
        if (validation.message) {
          formData[key].message = validation.message;
        }
        formData[key].activated = true;
      }
    }
    this.setState({ formData: formData, formValid: this.allValid() });
  };

  allValid = () => {
    for (let field in this.state.formData) {
      if (
        !this.state.formData[field].isValid &&
        this.state.formData[field].isValid !== undefined
      ) {
        return false;
      }
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.allValid()) {
      this.setState({ submitted: true });
      console.log("Submitted Data: ", this.state.formData);
    }
  };

  componentDidMount() {
    console.log("state", this.state);
  }

  // componentDidUpdate() {
  //   console.log("state", this.state);
  // }

  render() {
    return (
      <form
        name={this.props.name}
        id={this.props.name}
        onSubmit={this.handleSubmit}
      >
        <h2>{this.props.title}</h2>
        {this.props.fields.map(field => (
          <InputField
            key={field.id}
            {...field}
            handleInput={this.handleInput}
            form={this.name}
            isValid={this.state.formData[field.id].isValid}
            activated={this.state.formData[field.id].activated}
            message={this.state.formData[field.id].message}
          />
        ))}
        <Button
          type={"submit"}
          id={this.props.name + "_submit"}
          label={"Submit"}
          form={this.props.name}
          disabled={!this.state.formValid}
        />
      </form>
    );
  }
}

export default Form;
