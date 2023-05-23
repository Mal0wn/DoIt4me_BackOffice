import React, {useState, useEffect} from 'react';
import style from './MissionsList.module.css';
import Header from '../../components/Header/Header';
import dayjs from 'dayjs';
import MissionService from '../../utils/services/MissionService';

export const MissionsList = () => {
    
    // Mission service instanciation
    let missionService = new MissionService();

    let [missions, setAllMissions] = useState([]);

    useEffect(() => {
        missionService.getAllMissions(setAllMissions);
        
    }, []);

    return (
        <>
            <Header />
            <div className={style.containMissionList}>
                <div className={style.containMissionComp}>
                    <ul className={style.listMissions}>
                        {Array.isArray(missions) ? missions.map(mission => {
                            return (
                                <li className={style.itemMission}
                                    key={mission.id}>
                                    <div className={style.containerOneMiss}>
                                        <div className={style.containImgMissList}>
                                            <img className={style.imgMissList} src={mission.picture ?? "https://picsum.photos/id/76/4912/3264"} />
                                        </div>
                                        <div className={style.containTitleDesc}>
                                            <div className={style.containTitleDescTop}>
                                                <p className={style.itemTit}>{mission.title}</p>
                                                <p className={style.itemTitPrice}>{mission.price}€ </p>
                                            </div>
                                            <p className={style.itemDesc}>{mission.description}</p>
                                        </div>
                                        <div className={style.missInfUs}>
                                            <p className={style.itemMissDatPub}>Publié le: {dayjs(mission.creationDate).format('DD/MM/YYYY')}</p>
                                            <p className={style.itemIdUs}>Proposé par {mission.creator.firstname}</p>
                                            {mission.maker != null ? (
                                                <p className={style.itemIdUs}>Accepté par : {/*mission.maker.firstname*/}</p>) : (<p>Accepté par : Pas de Maker </p>)}
                                            <div className={style.containBtnSupp}>
                                                <button className={style.itemBtnSupp} onClick={() => {
                                                    missionService.deleteMission(mission.id);
                                                }}>Supprimer</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        }) : null}
                    </ul>
                </div>
            </div>
        </>
    )
}