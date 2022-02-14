import React from "react";

const Button = ({active, action, color='button-success', text='Продолжить'}) => {
    return (
      <button
        onClick={action}
        className={`add-tour-button ${
          active ? color : 'button-disabled'
        }`}
      >
        {text}
      </button>
    )
}

export default Button