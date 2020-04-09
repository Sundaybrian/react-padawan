import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div>
        <span className={`alert alert-${alert.type}`}>{alert.msg}</span>
      </div>
    )
  );
};

export default Alert;
