import React, { useState } from "react";
import style from "./Connexion.module.css";
import Logo from "../../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import UIInput from "../../components/UI/UIInput/UIInput";
import { API_BASE_URL } from "../../lib/globalVar";
import { useNavigate } from "react-router-dom";

export const Connexion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onConnect = async () => {
    let params = { email: email, password: password };
    await axios
      .post(API_BASE_URL + "Security/Login", params)
      .then((response) => {
        if (response.data.role === "Admin") {
          localStorage.setItem("accessToken", response.data.token);
          getUersInfos();
        } else {
          alert("Seul un administrateur peut se connecter au Back Office.");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("Mauvais identifiants");
        } else {
          console.log("There was an error!", error);
        }
      });
  };

  const getUersInfos = async () => {
    let token = localStorage.getItem("accessToken");
    await axios
      .get(API_BASE_URL + "User/GetCurrentUser", {
        headers: {
          Authorization: "Bearer " + token ,
        },
      })
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data))
        console.log(res.data)
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };

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
        <button className={style.button} onClick={onConnect}>
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
