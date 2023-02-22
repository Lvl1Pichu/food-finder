import React from 'react';

function Button(props) {
  const { label, onClick, disabled } = props;

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;