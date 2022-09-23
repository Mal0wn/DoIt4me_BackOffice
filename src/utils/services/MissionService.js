import React from "react";
import axios from "axios";
import { API_BASE_URL } from "../../lib/globalVar";

export default class MissionService extends React.Component {

    token = localStorage.getItem("accessToken");

    /**
     * Get all missions
     * @param {*} setAllMissions 
     */
    getAllMissions(setAllMissions){
        axios
        .get(API_BASE_URL + 'Mission/GetAllMissions', {
            headers: {
                Authorization: "Bearer " + this.token ,
            },
        })
        .then(response => {
            setAllMissions(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
}