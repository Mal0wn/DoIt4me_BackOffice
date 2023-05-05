import React, {useEffect, useState} from "react";
import { FaArchive } from "react-icons/fa";
import { FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import elon from "../../assets/elon.jpeg";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserService from "../../utils/services/UserService";

export const Header = () => {
  const userService = new UserService();

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([])

  const onDeconnect = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    navigate("/");
  };

  useEffect(() => {
    userService.getCurrentUser(setCurrentUser)
  }, []);

  return (
      <div id={style.header}>
        <nav>
          <div className={style.logoText}>
            <img className={style.imgUser} src={elon} alt="userPic" />
            <p>{currentUser.lastname} {currentUser.firstname}</p>
          </div>
          <ul>
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