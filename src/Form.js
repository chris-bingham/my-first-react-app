import React, { Component } from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";
import Validate from "./FormValidation.js";

const DEFAULT_STATE = {
  formData: {},
  submissionValues: {},
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
        formData[field.id].value = field.defaultValue || "";
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

  updateFormData = event => {
    const { id, value } = event.target;
    this.setState(
      {
        formData: {
          ...this.state.formData,
          [id]: {
            ...this.state.formData[id],
            value,
            activated: true
          }
        }
      },
      () => {
        this.updateValidation(id);
      }
    );
  };

  updateValidation = id => {
    const validation = Validate(this.state.formData[id]);

    this.setState(
      {
        formData: {
          ...this.state.formData,
          [id]: {
            ...this.state.formData[id],
            isValid: validation.result || false,
            message: validation.message || ""
          }
        }
      },
      () => {
        this.allValid();
      }
    );
  };

  allValid = () => {
    const fields = Object.values(this.state.formData);
    this.setState({ formValid: fields.every(data => data.isValid) });
  };

  getSubmissionValues = () => {
    let submissionValues = {};
    for (let field in this.state.formData) {
      submissionValues[field] = this.state.formData[field].value;
    }
    return submissionValues;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.formValid) {
      this.setState({ submitted: true });
      this.setState({ submissionValues: this.getSubmissionValues() }, () => {
        console.log("Submitted Data: ", this.state.submissionValues);
      });
    }
  };

  // componentDidMount() {
  //   console.log("state", this.state);
  // }

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
            key={"form_field_" + field.id}
            {...field}
            onChange={this.updateFormData}
            form={this.name}
            isValid={this.state.formData[field.id].isValid}
            activated={this.state.formData[field.id].activated}
            message={this.state.formData[field.id].message}
            value={this.state.formData[field.id].value}
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
