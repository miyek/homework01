import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Reusable input ui component
 * @param className
 * @param input
 * @param type
 * @param placeholder
 * @param touched
 * @param error
 * @returns {*}
 * @constructor
 */
const Input = ({className, input, type, placeholder, text, onChange}) =>
  (
    <div className={className}>
      <input {...input} placeholder={placeholder} type={type} onChange={onChange}/>
      <small className="text"><span>{text}</span></small>
    </div>
  );

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']).isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  text: null
};
export default styled(Input)`
  & label {
    display: block;
  }

  & input {
    border: solid 1px lightgrey;
    color: black;
    padding: 10px;
    margin: 5px 0;
    width: 100%;
  }
  
  & .error {
    color: red;
    display: block;
  }
`;
