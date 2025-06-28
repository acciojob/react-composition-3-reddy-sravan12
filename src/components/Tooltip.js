// Tooltip.js
import React, { useState, cloneElement } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  // Clone the child element to inject className and event handlers
  return cloneElement(children, {
    className: `${children.props.className || ''} tooltip`.trim(),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
