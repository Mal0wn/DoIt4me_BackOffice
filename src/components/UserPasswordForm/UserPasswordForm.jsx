import React, { useState, useEffect } from "react";
import style from "./UserPasswordForm.module.css";
import UserService from '../../utils/services/UserService.js'
import SuccessMessage from "../UI/SuccessMessage/SuccessMessage";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

export const UserPasswordForm = ( currentUser ) => {

    currentUser = currentUser.data;
    
    // User service instanciation
    const userService = new UserService();

    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [newPasswordConfirm, setnewPasswordConfirm] = useState("")

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const PasswordSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        currentUser.oldPassword = oldPassword;
        currentUser.newPassword = newPassword;
        currentUser.newPasswordConfirm = newPasswordConfirm;
        // Handle validations
        try {
            userService.updatePassword(currentUser);
            setSuccessMessage("Votre profil a bien été mis à jour");
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        } catch (error) {
            setErrorMessage("Une erreur est survenue");
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
        }
    }

    return (
        <>
            <div className={style.identityUser}>
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
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
