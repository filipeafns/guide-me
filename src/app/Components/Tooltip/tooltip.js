// components/Tooltip.js
import React from 'react';
import Link from 'next/link';

const Tooltip = ({ title, text, top, left, direction, backLink, nextLink }) => {
  const tooltipStyles = {
    top: `${top}%`,
    left: `${left}%`,
  };

  // Determine the direction class based on the `direction` prop
  const directionClass = direction ? `tooltip-${direction}` : '';

  return (
    <div className="tooltip-ctrl">
      <div className="overlay"></div>
      <div style={tooltipStyles} className={`tooltip ${directionClass}`}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="button-group">
          <Link className="button-link" href={backLink}>Back</Link>
          <Link className="button-link" href={nextLink}>Next</Link>
        </div>
      </div>
    </div>
  );
};

// Provide default props
Tooltip.defaultProps = {
  title: "Default Title",
  text: "Default Tooltip Text",
  top: 20,
  left: 20,
  direction: "left",
  backLink: "/",
  nextLink: "/"
};

export default Tooltip;