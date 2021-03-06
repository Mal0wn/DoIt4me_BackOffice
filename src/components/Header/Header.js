import React from "react";
import { FaArchive } from "react-icons/fa";
import { FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import elon from "../../assets/elon.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";

const isAuthenticate = false

const onDeconnect = () => {
  localStorage.removeItem("accessToken");
};

const Header = () => {
  if (isAuthenticate === true) {
    return (
      <div id="header">
        <nav>
          <div className="logoText">
            <img className="imgUser" src={elon} alt={"image user"} />
            <p> User Name</p>
          </div>
          <ul>
            <Link to="/users">
              <li className="navLeftItem" active="true">
                {" "}
                <FiUser /> Utilisateurs
              </li>
            </Link>
            <Link to="/missions">
              <li className="navLeftItem">
                <FaArchive /> Annonces
              </li>
            </Link>
            <Link to="/usersSignal">
              <li className="navLeftItem">
                <RiAdvertisementLine /> Signalement utilisateurs
              </li>
            </Link>
            <Link to="/missionsSignal">
              <li className="navLeftItem">
                <FiStopCircle /> Signalements annonces
              </li>
            </Link>
            <Link to="/settings">
              <li className="navLeftItem">
                <BiCog /> Settings
              </li>
            </Link>
          </ul>
          <button onClick={onDeconnect()} className="deconnexion">
            <FiLogOut /> Deconnexion
          </button>
        </nav>
      </div>
    );
  } 
};

export default Header;
