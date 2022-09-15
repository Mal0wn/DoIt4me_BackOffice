import React from "react";
import style from "./UIInput.module.css"
import PropTypes from 'prop-types'

const UIInput = ({ type = "text", onChange, placeholder = "" }) => {
    return (
       <div className={style.container}>
           <input type={type} className={style.input} onChange={onChange} placeholder={placeholder}/>
       </div>
    )
}

UIInput.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  }

export default UIInput