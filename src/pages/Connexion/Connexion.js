import React, { useState } from "react";
import style from "./Connexion.module.css";
import Logo from "../../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import UIInput from "../../components/UI/UIInput/UIInput";
import { API_BASE_URL } from "../../lib/globalVar";
import { useNavigate } from "react-router-dom";
import SecurityService from "../../utils/services/SecurityService";

export const Connexion = () => {

  //Get input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Security service instanciation
  let onConnect = new SecurityService();

  return (
    <div className={style.formContainer}>
      <div className={style.formContainer}>
        <div className={style.logoSize}>
          <img src={Logo} alt="Logo" className={style.logoSize} />
        </div>
        <UIInput
          type="text"
          placeholder="test@test.fr"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <UIInput
          type="password"
          placeholder="*****"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className={style.button} onClick={() => onConnect.onConnect({ email, password })}>
          Connexion
        </button>
        <div className={style.formButtons}>
          <div>
            <Link to="/forgotPassword">Mot de passe oublié ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
