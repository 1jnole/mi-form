import React, {Component} from 'react'
import FormRow from './FormRow';
import './Form.css';

class Form extends Component {
  //this.refs.nombreComponent.nombreMetodo
  constructor() {
    super();
    this.state = {
      labelLegend: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  onRegister(e) {
    console.log(this.refs.name.getValue());
  }
  onSubmit(e) {
    e.preventDefault();

    let nombre = this.refs.name.getValue();
    let apellido = this.refs.lastname.getValue();
    let email = this.refs.email.getValue();
    let pwd = this.refs.password.getValue();
    let conf_pwd = this.refs.confirm_password.getValue();

    pwd === conf_pwd ? this.setState({labelLegend:'Logged successfully'}) : alert("Passwords doesn't match");
  }

  render() {
    return (<div className="Form">
      <form onSubmit={this.onSubmit} className="Form-form">
        <h2 className="Form-title">Register</h2>
        <FormRow inputType="text" labelText="Name" ref="name" isRequired={true}/>
        <FormRow inputType="text" labelText="Last Name" ref="lastname" isRequired={true}/>
        <FormRow inputType="email" labelText="Email" ref="email" isRequired={true}/>
        <FormRow inputType="password" labelText="password" ref="password" isRequired={true}/>
        <FormRow inputType="password" labelText="Confirm password" ref="confirm_password" isRequired={true}/>
        <button className="Form-button">Register</button>
        <label className="Form-labelLegend">{this.state.labelLegend}</label>
      </form>
    </div>);
    //coment
  }
}
export default Form;
