import React, { useState, cloneElement } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: show,
    onMouseLeave: hide,
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
