import React from 'react';

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          required={props.shouldValidate.required ? 'required' : null}
          minLength={
            props.shouldValidate.minLength
              ? props.shouldValidate.minLength
              : null
          }
          maxLength={
            props.shouldValidate.maxLength
              ? props.shouldValidate.maxLength
              : null
          }
          value={props.value}
          onChange={props.onChange}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          required={props.shouldValidate.required ? 'required' : null}
          minLength={
            props.shouldValidate.minLength
              ? props.shouldValidate.minLength
              : null
          }
          maxLength={
            props.shouldValidate.maxLength
              ? props.shouldValidate.maxLength
              : null
          }
          value={props.value}
          onChange={props.onChange}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={props.value} onChange={props.onChange}>
          {props.elementConfig.options.map((option, key) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          required={props.shouldValidate.required ? 'required' : null}
          minLength={
            props.shouldValidate.minLength
              ? props.shouldValidate.minLength
              : null
          }
          maxLength={
            props.shouldValidate.maxLength
              ? props.shouldValidate.maxLength
              : null
          }
          value={props.value}
          onChange={props.onChange}
        />
      );
  }

  return (
    <div className={props.divClass}>
      <label className={props.labelClass}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
