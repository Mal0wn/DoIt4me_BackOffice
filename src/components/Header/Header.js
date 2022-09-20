import React, {useEffect, useState} from "react";
import { FaArchive } from "react-icons/fa";
import { FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";



import style from './Header.module.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState()

  const onDeconnect = () => {
    localStorage.removeItem('accessToken')
    navigate("/");
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    setUser(user)
  }, []);

  return (
      <div id="header" className={style.header}>
        <nav>
          <div className={style.logoText}>
            <p>Administrateur</p>
          </div>
          <ul className={style.listNav}>
            <Link to="/users">
              <li className={style.navLeftItem} active="true">
                <FiUser /> <p>Utilisateurs</p>
              </li>
            </Link>
            <Link to="/missions">
              <li className={style.navLeftItem}>
                <FaArchive /> <p>Annonces</p>
              </li>
            </Link>
            <Link to="/usersSignal">
              <li className={style.navLeftItem}>
                <RiAdvertisementLine /> <p>Signalement utilisateurs</p>
              </li>
            </Link>
            <Link to="/missionsSignal">
              <li className={style.navLeftItem}>
                <FiStopCircle /> <p>Signalements annonces</p>
              </li>
            </Link>
            <Link to="/settings">
              <li className={style.navLeftItem}>
                <BiCog /> <p>Settings</p>
              </li>
            </Link>
          </ul>
          <button onClick={onDeconnect} className={style.deconnexion}>
            <FiLogOut /> 
            <p>Deconnexion</p>
          </button>
        </nav>
      </div>
  )
};

export default Header;
