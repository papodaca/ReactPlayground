import React from 'react';

class Input extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    onChange: React.PropTypes.func
  }

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
