import React from "react";
import axios from "axios";
import UserService from "./UserService";
import { API_BASE_URL } from "../../lib/globalVar";

export default class SecurityService extends React.Component {
    
    userService = new UserService();
    
    /**
     * Post method to create token and connect user 
     * @param {email} email
     * @param {password} password 
     */
    async onConnect ({email, password}) {
        let params = { email: email, password: password };
        await axios
        .post(API_BASE_URL + "Security/Login", params)
        .then((response) => {
            if (response.data.role === "Admin") {
            localStorage.setItem("accessToken", response.data.token);
            this.userService.getCurrentUser();
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
}