import React from "react";
import axios from "axios";
import UserService from "./UserService";
import { API_BASE_URL } from "../../lib/globalVar";
import { useNavigate } from "react-router-dom";

export default class SecurityService extends React.Component {
    
    userService = new UserService();
    
    navigate = useNavigate();

    /**
     * Post method to create token and connect user 
     * @param {email} email
     * @param {password} password 
     */
    async onConnect ({email, password}) {
        let params = { email: email, password: password };
        await axios
        .post(API_BASE_URL + "/login/", params)
        .then((response) => {
            console.log(response.data);
            // if (response.data.role === "admin") {
                localStorage.setItem("accessToken", response.data.token);
                this.userService.getCurrentUser();
                this.navigate("/users");
            // } else {
            //     alert("Seul un administrateur peut se connecter au Back Office." + JSON.stringify(response.data));
            // }
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