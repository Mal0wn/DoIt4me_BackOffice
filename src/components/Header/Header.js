import React, {useEffect, useState} from "react";
import { FaArchive } from "react-icons/fa";
import { FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import elon from "../../assets/elon.jpeg";
import "./Header.css";
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
      <div id="header">
        <nav>
          <div className="logoText">
            <img className="imgUser" src={elon} alt="userPic" />
            <p>Administrateur</p>
          </div>
          <ul>
            <Link to="/users">
              <li className="navLeftItem" active="true">
                <FiUser /> <p>Utilisateurs</p>
              </li>
            </Link>
            <Link to="/missions">
              <li className="navLeftItem">
                <FaArchive /> <p>Annonces</p>
              </li>
            </Link>
            <Link to="/usersSignal">
              <li className="navLeftItem">
                <RiAdvertisementLine /> <p>Signalement utilisateurs</p>
              </li>
            </Link>
            <Link to="/missionsSignal">
              <li className="navLeftItem">
                <FiStopCircle /> <p>Signalements annonces</p>
              </li>
            </Link>
            <Link to="/settings">
              <li className="navLeftItem">
                <BiCog /> <p>Settings</p>
              </li>
            </Link>
          </ul>
          <button onClick={onDeconnect} className="deconnexion">
            <FiLogOut /> 
            <p>Deconnexion</p>
          </button>
        </nav>
      </div>
  )
};

export default Header;
