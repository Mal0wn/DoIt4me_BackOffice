import React from "react";
import "./UserDetails.css";
import {Signal} from "../../components/Signal/Signal";
import { users} from "../../db.js";
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";
import {Link} from "react-router-dom";

export const UserDetails = () => {

    let user = users[0];


    return (
        <div className="userDetailContain ">
            <Link to="/users">Retour</Link>
            <div className="userInfosDetail">
                <div className='identityUser'>
                    <img src={user.profilPicture} alt="profilPictureUser" />
                    <p> {user.firstName} {user.lastName}</p>
                    <p> {user.birthdayDate}</p>
                </div>
                <div className="otherInfosUser">
                    <p> {user.address}</p>
                    <p> {user.postalCode}</p>
                    <p> {user.city}</p>
                    <p> {user.phone}</p>
                    <p> {user.mail}</p>
                    <Rating star = {user.rate}/>
                </div>

            </div>
            <div className="containButtonMiss">
                <button>Missions proposées
                </button>
                <button>Missions acceptées
                </button>
            </div>
            <div className="containButtonAdmin">
                <button>Restreindre le compte
                </button>
                <button>Supprimer le compte
                </button>
            </div>
            <Signal/>

        </div>

    )

}
