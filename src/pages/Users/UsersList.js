import React from "react";
import {Menu, MenuItem} from "react-pro-sidebar";
import elon from "../../assets/elon.jpeg";
import { MdWarning  } from "react-icons/md";
import {FaList, FaStar} from "react-icons/fa"
import './UsersList.css';
import { users} from "../../db.js";
import {Rating} from "../../components/Rating/Rating";

const ItemListUser = () => {




    return (
        <div className="usersContainer">
            {users.map((user) =>
                <div>
                    <Menu iconShape="square" className="userListContain">
                        <MenuItem className="item" icon={<MdWarning />}>
                            <img className="imgUserList" src={user.profilPicture} alt={'image user'}/>
                            <div className="infoUser">
                                <p> {user.firstName} {user.lastName} </p>
                                <p> {user.mail} </p>
                                <Rating star = {user.rate}/>


                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            )}

        </div>






    )
}

export default ItemListUser;