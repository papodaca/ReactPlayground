import { Component, PropTypes } from 'react';

class Input extends Component {
  render() {
    const { name, label, onChange, ...props } = this.props;

    let input;

    if(this.props.type === "select") {
      const { type, placeholder, ...props } = this.props;
      input = (
        <select id={name} name={name} onChange={onChange} {...props} className="form-control">
          <option>{placeholder}</option>
          {this.props.children}
        </select>
      );
    } else {
      input = <input id={name} name={name} onChange={onChange} {...props} className="form-control">{this.props.children}</input>;
    }

    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-2 col-form-label">{this.props.label}</label>
        <div className="col-sm-10">
          {input}
        </div>
      </div>
    );
  }
}

export default Input;
