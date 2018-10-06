import React, { Component } from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";

const DEFAULT_STATE = {
  formData: {},
  submitted: false
};

class Form extends Component {
  state = DEFAULT_STATE;

  addFormFieldsToState = () => {
    this.setState({ formData: this.getFormFields() });
  };

  getFormFields = () => {
    let formData = {};
    this.props.fields.forEach(field => (formData[field.id] = ""));
    return formData;
  };

  handleInput = event => {
    let formData = this.state.formData;

    for (var key in formData) {
      if (key === event.target.id) {
        formData[key] = event.target.value;
      }
    }
    this.setState({ formData: formData });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log("Submitted Data: ", this.state.formData);
  };

  componentDidMount() {
    this.addFormFieldsToState();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form
        name={this.props.name}
        id={this.props.name}
        onSubmit={this.handleSubmit}
      >
        {this.props.fields.map(field => (
          <InputField
            key={field.id}
            {...field}
            handleInput={this.handleInput}
            form={this.name}
          />
        ))}
        <Button
          type={"submit"}
          id={this.props.name + "_submit"}
          label={"Submit"}
          form={this.props.name}
        />
      </form>
    );
  }
}

export default Form;
