/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import style from './MissionsList.module.css';
import Header from '../../components/Header/Header';
import dayjs from 'dayjs';


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
    <div className={style.containMissionList}>
    <Header/>
        <div className={style.containMissionComp}>
            <ul className={style.listMissions}>
            {Array.isArray(missions) ? missions.map(item => {
                return (
                        <li className={style.itemMission} 
                        key={item.id}>
                            <div className={style.containerOneMiss}>
                                <div className={style.containImgMissList}>
                                <img className={style.imgMissList} src={item.picture ?? "https://bitsofco.de/content/images/2018/12/broken-1.png" }/>
                                </div>
                                <div className={style.containTitleDesc}>
                                    <div className={style.containTitleDescTop}>
                                        <p className={style.itemTit}>{item.title}</p>
                                        <p className={style.itemTitPrice}>{item.price}€ </p>
                                    </div>
                                    <p className={style.itemDesc}>{item.description}</p>
                                </div>
                                <div className={style.missInfUs}>
                                    <p className={style.itemMissDatPub}>Publié le: {dayjs(item.creationDate).format('DD/MM/YYYY')}</p>
                                    <p className={style.itemIdUs}>Proposé par {item.claimant.firstname}</p>
                                    {item.maker != null ? (
                                        <p className={style.itemIdUs}>Accepté par : {item.maker.firstname}</p>) : (<p>Accepté par : Pas de Maker </p>)}
                                        <div className={style.containBtnSupp}>
                                            <button className={style.itemBtnSupp} onClick={(event) =>  {
                                                deleteMission(item.id);
                                            }}>Supprimer</button>
                                        </div>
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