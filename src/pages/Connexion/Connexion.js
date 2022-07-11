import React from "react";
import style from "./Connexion.module.css"

export const Connexion = () => {

    const isAuthenticate = false

    const onConnect = () => {
        localStorage.setItem("accessToken", true);
    };

    return (
        <div className={style.formContainer}>
            <div className={style.formContainer}>
                <button className={style.button} onClick={onConnect}>Connexion</button>
            </div>
        </div>
    )
}