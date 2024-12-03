import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className="btn"
      onClick={onClick}
    >
      {label || 'Default Button'}
    </button>
  );
};

export default Button;
