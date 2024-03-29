
import React , { useState, useEffect } from  "react";
import style from './CurrentUserDetails.module.css';
import Header from "../../components/Header/Header";
import UserService from '../../utils/services/UserService.js'
import { UserDataForm } from "../../components/UserDataForm/UserDataForm.jsx";
import { UserPasswordForm } from "../../components/UserPasswordForm/UserPasswordForm.jsx";
import { DeleteAccount } from "../../components/DeleteAccount/DeleteAccount.jsx";

export const CurrentUserDetails = () => {

    // User service instanciation
    const userService = new UserService();

    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        userService.getCurrentUser(setCurrentUser)
    }, [])

  return (
    <>
        <Header />
        <div className={style.CurrentUserContainer}>
            <div className={style.CurrentUserContaint}>
                <UserDataForm data={currentUser} />
            </div>
            <div className={style.CurrentUserContaint}>
                <UserPasswordForm data={currentUser} />
            </div>
            <div className={style.CurrentUserContaint}>
                <DeleteAccount data={currentUser} />
            </div>
        </div>
    </>
  )
}