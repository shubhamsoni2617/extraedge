import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderField = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  render() {
    console.log(this.props);
    let data = null;
    if (this.props.clickCount % 2 !== 0) {
      data = (
        <>
          <i
            className="hand point right icon"
            onClick={this.props.iconClicked}
          />
          <form>
            <Field name="title" component={this.renderField} label="Name" />
            <Field
              name="description"
              component={this.renderField}
              label="Email"
            />
            <button className="ui button primary">Submit</button>
          </form>
        </>
      );
    }
    return data;
  }
}

export default reduxForm({ form: "streamForm" })(StreamForm);
