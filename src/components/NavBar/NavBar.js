import React, {useEffect, useState} from 'react';
import './NavBar.css';
import {SearchBar} from "../SearchBar/SearchBar";
import {useLocation} from "react-router-dom";

const NavBar = () => {


    const [title, setTitle] = useState('')
    const urlName = useLocation().pathname

    useEffect(()=> {
        /**
         * Methode pour passer le title de la page sur la NavBar
         * @param urlName
         */
        switch (urlName) {
            case '/users':
                return setTitle('Liste Utilisateurs')
            case '/missions' :
                return setTitle("Liste Missions")
            case '/usersSignal' :
                return setTitle("Utilisateurs Signalés")
            case '/missionsSignal' :
                return setTitle("Missions Signalées")
            case '/settings' :
                return setTitle("Paramètres")
            case '/userDetails' :
                return setTitle("Nom : ")
            default:
                return 'Espace Admin'
        }
    })

    return (
        <div id="navBar">
            <nav className="navContain">
                <h2>{title}</h2>
                <div className ="ContainSearch">
                    <SearchBar/>
                </div>
            </nav>
        </div>
        )

}

export default NavBar;