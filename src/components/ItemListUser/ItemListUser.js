import React from "react";
import {Menu, MenuItem} from "react-pro-sidebar";
import elon from "../../assets/elon.jpeg";
import {RiAdvertisementLine} from "react-icons/ri";
import { MdWarning  } from "react-icons/md";
import {  FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import './ItemListUser.css'

const ItemListUser = () => {

    return (
        <div>
            <Menu iconShape="square">
                <MenuItem className="item" icon={<MdWarning />}>
                    <img className="imgUserList" src={elon} alt={'image user'}/>
                    <p> UserName</p>
                </MenuItem>
            </Menu>
        </div>

    )
}

export default ItemListUser;