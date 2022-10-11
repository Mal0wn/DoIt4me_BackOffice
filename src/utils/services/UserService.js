import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../lib/globalVar';

export default class UserService extends React.Component {

  token = localStorage.getItem("accessToken");
  navigate = useNavigate();

  async getAllUsers(setAllUsers) {        
      await axios.get(API_BASE_URL + "Admin/GetAllUsers", {
        headers: {
            Authorization: "Bearer " + this.token
        },
    })  
    .then(function (response) {
      setAllUsers(response.data)
    })
    .catch(function (error) {
        console.error(error);
    })
  }

  /**
   * Get CurrentUser infos
   */
    async getCurrentUser () {
    await axios
    .get(API_BASE_URL + "User/GetCurrentUser", {
        headers: {
            Authorization: "Bearer " + this.token
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

