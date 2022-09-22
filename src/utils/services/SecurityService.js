import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default class SecurityService extends React.Component {
    
    navigate = useNavigate();
    domaine = `https://localhost:7102/api/`;

    /**
     * Post method to create token and connect user 
     * @param {email} email
     * @param {password} password 
     */
    async onConnect ({email, password}) {
        let params = { email: email, password: password };
        await axios
        .post(this.domaine + "Security/Login", params)
        .then((response) => {
            if (response.data.role === "Admin") {
            localStorage.setItem("accessToken", response.data.token);
            this.getCurrentUser();
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

  
    /**
     * Get CurrentUser infos
     */
    async getCurrentUser () {
        let token = localStorage.getItem("accessToken");
        await axios
        .get(this.domaine + "User/GetCurrentUser", {
            headers: {
                Authorization: "Bearer " + token ,
                },
            })
            .then((res) => {
                localStorage.setItem("currentUser", JSON.stringify(res.data))
                console.log(res.data)
                this.navigate("/users");
            })
        .catch((err) => console.log(err));
    };

};