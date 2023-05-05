import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={style.errorMessage}>
      <svg
        className={style.cross}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <line
          className={style.crossLine}
          x1="29"
          y1="29"
          x2="23"
          y2="23"
        />
        <line
          className={style.crossLine}
          x1="23"
          y1="29"
          x2="29"
          y2="23"
        />
      </svg>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
