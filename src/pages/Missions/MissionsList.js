import React, {useState, useMemo, useEffect} from 'react';
import axios from 'axios'
import NavBar from "../../components/NavBar/NavBar";
//import {missions, users} from "../../db";
import './MissionsList.css';
import {Rating} from "../../components/Rating/Rating";
import Pagination from "../../components/Pagination/Pagination";
import Header from '../../components/Header/Header';

export const MissionsList = () => {

let [missions, setAllMissions] = useState([])

    function getAllMissions(){
      let token = localStorage.getItem("accessToken");
      
      axios.get('https://localhost:7102/api/Mission/GetAllMissions', {
      headers: {
        Authorization: "Bearer " + token ,
      },
    })  
    
    .then(function (response) {
      
      console.log(response.data);
      setAllMissions(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  useEffect(() =>{
  getAllMissions()
  }, [] )


    return (
        <div className="containMissionList page">
            <Header/>
            <NavBar/>
            <div className="containMission">
                <ul className="listMissions">
                    {Array.isArray(missions) ? missions.map(item => {
                        return (
                            <li className={`itemMission ${item.status === "signal"? 'signalTrue' : 'signalFalse'}`} key={item.id}>
                                <div className="containImgMissList">
                                    <img className="imgMissList" src={item.picture}/>
                                </div>
                                <div className="containTitleDesc">
                                    <p className="itemTit">{item.title}</p>
                                    <p className="itemPri">{item.price}€ </p>

                                </div>
                                <p className="itemDesc">{item.desc}</p>
                                <div className="missInfUs">
                                    <p className="itemMissDat">Publié le: {item.missionDate}</p>
                                    <p className="itemIdUs">Proposé par {item.idUser}</p>
                                    <div className="containBtnSupp">
                                        <button className="itemBtnSupp">Supprimer</button>
                                    </div>

                                </div>

                            </li>
                        );
                    }) : null }

                </ul>
                

            </div>
        </div>

    )

}