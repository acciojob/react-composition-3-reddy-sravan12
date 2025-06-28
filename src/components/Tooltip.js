import React, { useState, cloneElement } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return cloneElement(children, {
    className: `${children.props.className || ''} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        <div className={`tooltiptext ${visible ? 'visible' : ''}`}>{text}</div>
      </>
    ),
  });
};

export default Tooltip;
