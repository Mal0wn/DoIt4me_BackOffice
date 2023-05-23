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
        .get(API_BASE_URL + '/mission', {
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

    /**
     * Delete a mission by id
     * @param {*} id 
     */
    deleteMission(id) {
        axios.delete(API_BASE_URL + `/mission/${id}`, {
            headers: {
                Authorization: "Bearer " + this.token
            },
        })
        .then(response => {
            window.location.reload(false)
        })
        .catch(function (error) {
            console.error(error)
        })
    }
}