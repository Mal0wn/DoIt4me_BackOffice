import React from "react";
import "./Signal.css"
import {users} from "../../db";
import {
    Link
} from 'react-router-dom';

export const Signal = () => {
    let signalement = false;

    if (signalement == true) {
        return(
            <div className="signalInfos">
                <div className="signalBy">
                    <div className="left">
                        <p>Signalé par : { users.name[0]} </p>
                        <img className="profilPictureSign" src={users.profilPicture[0]} alt="Photo profil"/>
                        <Link to="/discussion"> Session Chat</Link>
                    </div>


                </div>
            </div>
        )
    }else {
        return (
            <div className="noSignal">

            </div>
        )
    }


}