import { Box } from '@chakra-ui/react';
import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <Box m="auto">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox" 
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </Box>
  );
};

export default Switch;