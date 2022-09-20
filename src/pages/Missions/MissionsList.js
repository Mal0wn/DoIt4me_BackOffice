import React, {useState, useMemo, useEffect} from 'react';
import axios from 'axios'
import NavBar from "../../components/NavBar/NavBar";
//import {missions, users} from "../../db";
import './MissionsList.css';
import {Rating} from "../../components/Rating/Rating";
import Pagination from "../../components/Pagination/Pagination";
import Header from '../../components/Header/Header';
import dayjs from 'dayjs'
import { BiWindows } from 'react-icons/bi';

export const MissionsList = () => {

let [missions, setAllMissions] = useState([])
let [itemToSupp , setItemToSupp] = useState()


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

    function deleteMission(item) {
    let token = localStorage.getItem("accessToken")
    
    axios.delete(`https://localhost:7102/api/Mission/DeleteMission?missionId=${item}`, {
        headers: {
        Authorization: "Bearer " + token
        },
    })
    .then(function (response){
    window.location.reload(false)
    console.log(item)
    })
    .catch(function (error) {
    console.log(error)
    })
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
                                    <img className="imgMissList" src={item.picture ?? "https://bitsofco.de/content/images/2018/12/broken-1.png" }/>
                                </div>
                                <div className="containTitleDesc">
                                    <p className="itemTit">{item.title}</p>
                                    <p className="itemPri">{item.price}€ </p>

                                </div>
                                <p className="itemDesc">{item.description}</p>
                                <div className="missInfUs">
                                    <p className="itemMissDatPub">Publié le: {dayjs(item.creationDate).format('DD/MM/YYYY')}</p>
                                   
                                    <p className="itemIdUs">Proposé par {item.claimant.firstname}</p>
                                    <div className="containBtnSupp">
                                        <button className="itemBtnSupp" onClick={(event) =>  {
                                        setItemToSupp(item.id) 
                                        deleteMission(item.id);
                                        }}>Supprimer</button>
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