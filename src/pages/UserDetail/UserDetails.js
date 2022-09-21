import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./UserDetails.module.css";
import {Signal} from "../../components/Signal/Signal";
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";
import {Link} from "react-router-dom";
import UsersList from "../Users/UsersList"
import axios from 'axios';

export const UserDetails = () => {

const [user , setUser] = useState("")
 const params = useParams();
function getUserById(item){
        let token = localStorage.getItem("accessToken");
        
        axios.get(`https://localhost:7102/api/Admin/GetUserById?id=${params.userId}`, {
        headers: {
            Authorization: "Bearer " + token ,
        },
    })  
    .then(function (response) {
     setUser(response.data)
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}



useEffect(() => {
  getUserById()
}, [])




        return (
        <div className={style.userDetailContain}>
            <Link to="/users">Retour</Link>
            <div className={style.userInfosDetail}>
                <div className={style.identityUser}>
                    
                    <p> {user.firstname} {user.lastname}</p>
                    <p> {user.birthdayDate}</p>
                </div>
                <div className={style.otherInfosUser}>
                    <p> {user.address}</p>
                    <p> {user.postalCode}</p>
                    <p> {user.city}</p>
                    <p> {user.phone}</p>
                    <p> {user.mail}</p>
                    <Rating star = {user.rate}/>
                </div>

            </div>
            <div className={style.containButtonMiss}>
                <button>Missions proposées
                </button>
                <button>Missions acceptées
                </button>
            </div>
            <div className={style.containButtonAdmin}>
                <button>Restreindre le compte
                </button>
                <button>Supprimer le compte
                </button>
            </div>
            <Signal/>

        </div>
    )
    

}
