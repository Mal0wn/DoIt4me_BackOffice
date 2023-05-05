import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../lib/globalVar';

export default class UserService {
  
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
  };

  /**
   * Get CurrentUser infos
  */
  async getCurrentUser(setCurrentUser) {
    await axios
    .get(API_BASE_URL + "/user/currentUser/getCurrentUser", {
      headers: {
        Authorization: "Bearer " + this.token
      },
    })
    .then((res) => {
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      setCurrentUser(res.data)
    })
      .catch((err) => console.log(err));
  };
    
  /**
   * Update CurrentUser infos
   * @param {*} user 
  */
  async updateCurrentUser(user) {
    let response;

    await axios
    .put(API_BASE_URL + "/user/currentUser/updateCurrentUser", user, {
      headers: {
        Authorization: "Bearer " + this.token,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => console.log(err));

    return response;
  };

  /**
   * Update CurrentUser password
   * @param {*} user 
   */
  async updatePassword(user) {
    await axios
    .put(API_BASE_URL + "/user/currentUser/updatePassword", user, {
      headers: {
        Authorization: "Bearer " + this.token,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      localStorage.removeItem('accessToken');
      this.navigate("/login");
    })
    .catch((err) => {
      console.log(err)
    });
  };

  /**
   * Delete CurrentUser
   * @param {*} phrase 
   */
  async deleteCurrentUser(phrase) {
    await axios
    .delete(API_BASE_URL + "/user/currentUser/deleteCurrentUser", {
      headers: {
        Authorization: "Bearer " + this.token,
        'Content-Type': 'application/json'
      },
      data: {
        phrase: phrase
      }
    })
    .then((res) => {
      return res.status
    })
    .catch((err) => console.log(err));
  };
};

