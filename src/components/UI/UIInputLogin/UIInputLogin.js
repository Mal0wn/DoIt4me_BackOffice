import React from "react";
import style from "./UIInputLogin.module.css"
import PropTypes from 'prop-types'

const UIInputLogin = ({ type = "string", onChange }) => {
    return (
       <div className={style.container}>
           <input type={type} className={style.input} onChange={onChange}/>
       </div>
    )
}

UIInputLogin.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func
  }

export default UIInputLogin