import React from "react";
import style from "./Title.module.css";

export const Title = ( props ) => {
    return (
        <div className={style.title}>
            <h1>{props.title}</h1>
        </div>
    );
}