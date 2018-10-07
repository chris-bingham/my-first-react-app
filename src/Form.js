import React, { Component } from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";
import Validate from "./FormValidation.js";

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
    this.props.fields.forEach(field => {
      formData[field.id] = field;
      formData[field.id].isValid = !field.required;
    });
    return formData;
    
  };

  handleInput = event => {
    let formData = this.state.formData;

    for (var key in formData) {
      if (key === event.target.id) {
        formData[key].value = event.target.value;
        formData[key].isValid = Validate(formData[key]);
      }
    }
    this.setState({ formData: formData });
  };

  allValid = () => {
    for(let field in this.state.formData){
      if(!this.state.formData[field].isValid && this.state.formData[field].isValid !== undefined){
        
        return false;
      }
    }
    return true;
  }


  handleSubmit = event => {
    event.preventDefault();
    if(this.allValid()){
      this.setState({ submitted: true });
      console.log("Submitted Data: ", this.state.formData);
    }
  };

 
  componentDidMount() {
    this.addFormFieldsToState();
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
