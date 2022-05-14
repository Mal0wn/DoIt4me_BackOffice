import React, {useState, useMemo} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import {missions, users} from "../../db";
import './MissionsList.css';
import {Rating} from "../../components/Rating/Rating";
import Pagination from "../../components/Pagination/Pagination";

export const MissionsList = () => {

    let PageSize = 3;
    const [currentPage, setCurrentPage] = useState(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return missions.slice(firstPageIndex , lastPageIndex);
    }, [currentPage])


    function handlePageChange(pageNumber) {
        this.setState({activePage : pageNumber})
    }


    return (
        <div className="containMissionList page">
            <NavBar/>
            <div className="containMission">
                <ul className="listMissions">
                    {currentTableData.map(item => {
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
                    })}

                </ul>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={users.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />

            </div>
        </div>

    )

}