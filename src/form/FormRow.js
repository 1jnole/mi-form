import React, {Component} from 'react'
import Proptypes from 'prop-types'

class FormRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  onChange(e) {
    this.setState({inputValue: e.target.value});
  }

  getValue() {
    return this.state.inputValue;
  }

  render() {
    return (<div>
      <label>{this.props.labelText}</label>
      <input type={this.props.inputType} value={this.state.inputValue} onChange={this.onChange} required={this.props.isRequired}/>
    </div>);
  }
}

FormRow.proptype = {
  inputType: Proptypes.string,
  labelText: Proptypes.string,
  isRequired: Proptypes.bool
}
export default FormRow;
