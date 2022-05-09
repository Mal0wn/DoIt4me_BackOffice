import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";

import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import {  FaArchive } from "react-icons/fa";
import {  FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import {  RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";

import logo from '../../assets/logo.png';
import elon from '../../assets/elon.jpeg';
import "./Header.css";

const Header = () => {

    return (
        <>
            <div id="header">
                <ProSidebar >
                    <SidebarHeader>
                        <div className="logotext">
                            <img className="imgLogo" src={logo} alt={'logo'} />
                            <img className="imgUser" src={elon} alt={'image user'} />
                            <p> User Name</p>
                        </div>

                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiUser />}>
                                Utilisateurs
                            </MenuItem>
                            <MenuItem icon={<FaArchive />}>Annonces</MenuItem>
                            <MenuItem icon={<RiAdvertisementLine />}>Signalement utilisateurs</MenuItem>
                            <MenuItem icon={<FiStopCircle />}>Signalements annonces</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Deconnexion</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;
