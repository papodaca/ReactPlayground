import React from 'react';

const Input = () => {
  const { name, label, onChange, ...props } = props;

  let input;

  if(props.type === "select") {
    const { type, placeholder, ...props } = props;
    input = (
      <select id={name} name={name} onChange={onChange} {...props} className="form-control">
        <option>{placeholder}</option>
        {props.children}
      </select>
    );
  } else {
    input = <input id={name} name={name} onChange={onChange} {...props} className="form-control">{props.children}</input>;
  }

  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-2 col-form-label">{props.label}</label>
      <div className="col-sm-10">
        {input}
      </div>
    </div>
  );
}

Input.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  onChange: React.PropTypes.func
};

export default Input;
