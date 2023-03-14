import React, { useState, useEffect } from "react";
import style from "./UserPasswordForm.module.css";
import UserService from '../../utils/services/UserService.js'

export const UserPasswordForm = ( currentUser ) => {

    currentUser = currentUser.data;
    
    // User service instanciation
    const userService = new UserService();

    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [newPasswordConfirm, setnewPasswordConfirm] = useState("")

    const PasswordSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        currentUser.oldPassword = oldPassword;
        currentUser.newPassword = newPassword;
        currentUser.newPasswordConfirm = newPasswordConfirm;
        // Handle validations
        userService.updatePassword(currentUser);
    }

    return (
        <>
            <div className={style.identityUser}>
                <form method="post" onSubmit={PasswordSubmit}>
                    <label>
                        <h3>Ancien mot de passe:</h3>
                        <input type="text" name="oldPassword" placeholder="Ancien mot de passe" onChange={e => setoldPassword(e.target.value)}/>
                    </label>
                    <label>
                        <h3>Nouveau mot de passe:</h3>
                        <input type="text" name="newPassword" placeholder="Nouveau mot de passe" onChange={e => setnewPassword(e.target.value)}/>
                    </label>
                    <label>
                        <h3>Confirmer le nouveau mot de passe:</h3>
                        <input type="text" name="newPasswordConfirm" placeholder="Confirmer le nouveau mot de passe" onChange={e => setnewPasswordConfirm(e.target.value)}/>
                    </label>
                    <input type="submit" value="Mettre à jour" />
                </form>
            </div>
        </>
    )
}
