import { PropTypes } from 'prop-types'
import style from "./UIInputLogin.module.css";

const UIInput = ({ type = "string", onChangeValueInput }) => {
  return (
    <div className={style.container} >
        <input type={type} className={style.input} onChange={onChangeValueInput}/>
    </div>
  )
}

UIInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChangeValueInput: PropTypes.func
}

export default UIInput