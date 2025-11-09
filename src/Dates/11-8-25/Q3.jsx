import React, { useState } from "react";

const Q3 = ({ type, onDismiss, children }) => {
  return <div>Q3</div>;
};

export default Q3;

// Create an Alert wrapper component that:

//     Takes props: type (string: "success", "error", "warning"), onDismiss (function), children

//     Shows a colored box based on type (you can use inline styles or className)

//     Displays props.children inside

//     Has a "×" close button that calls onDismiss when clicked

//     The parent component should manage whether the alert is visible

// Write both the Alert component AND a small example of how a parent would use it (with state to show/hide).
