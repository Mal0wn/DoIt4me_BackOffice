import React from "react";
import {Menu, MenuItem} from "react-pro-sidebar";
import { MdWarning  } from "react-icons/md";
import './UsersList.css';
import { users} from "../../db.js";
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";

const ItemListUser = () => {
    return (
        <div className="usersContainer page">
            <NavBar/>
            <ul >
                {users.map((user) =>
                    <li key={user.id}>
                        <Menu  iconShape="square" className="userListContain">
                            <MenuItem className="item" icon={<MdWarning />}>
                                <img className="imgUserList" src={user.profilPicture} alt={'image user'}/>
                                <div className="infoUser">
                                    <p> {user.firstName} {user.lastName} </p>
                                    <p> {user.mail} </p>
                                    <Rating star = {user.rate}/>
                                </div>
                            </MenuItem>
                        </Menu>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ItemListUser;