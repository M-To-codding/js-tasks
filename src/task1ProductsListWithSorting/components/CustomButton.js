import React from "react";

function CustomButton({onClickAction, theme, text}) {

  return (
    <button
      type="button"
      onClick={() => onClickAction()}
      style={theme}
    >
      {text}
    </button>
  )
}

export default CustomButton;