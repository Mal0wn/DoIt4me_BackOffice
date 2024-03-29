import React, { useState, useEffect } from "react";
import style from "./DeleteAccount.module.css";
import UserService from '../../utils/services/UserService.js'
import { useNavigate } from "react-router-dom";

export const DeleteAccount = ( currentUser ) => {

    currentUser = currentUser.data;
    // User service instanciation
    const userService = new UserService();

    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [phrase, setphrase] = useState("");
  
    const inputValue = e => {
        setphrase(e.target.value);
    };

    const handleDeleteAccount = e => {
        e.preventDefault();

        if (phrase === "DELETE MY ACCOUNT") {
            let response = userService.deleteUser(phrase);
            console.log("voir la reponse de deleteUser: ");
            response.then((response) => {
                console.log(response);
            });
            localStorage.removeItem('accessToken')
            navigate("/login");
        } else {
            alert("Vous devez entrer 'DELETE MY ACCOUNT' pour supprimer votre compte");
        }
    };
  
    const handleDeleteButtonClicked = () => {
      setShowConfirmation(true);
    };

    return (
        <>
            {showConfirmation ? (
                <div className={style.identityUser}>
                    <div className={style.delete}>
                        <p>Veuillez saisir <strong>'DELETE MY ACCOUNT'</strong> pour supprimer votre compte</p>
                    </div>
                    <div className={style.delete}>
                        <input type="text"  placeholder="DELETE MY ACCOUNT" onChange={inputValue}/>
                    </div>
                    <div className={style.delete}>
                        <button onClick={handleDeleteAccount}>Confirmer la suppression</button>
                        <button onClick={() => setShowConfirmation(false)}>Annuler</button>
                    </div>
                </div>
            ) : (
                <div className={style.identityUser}>
                    <button onClick={handleDeleteButtonClicked}>Supprimer mon compte</button>
                </div>
            )}
        </>
    )

}