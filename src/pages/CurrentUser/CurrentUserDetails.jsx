
import React , { useState, useEffect } from  "react";
import style from './CurrentUserDetails.module.css';
import Header from "../../components/Header/Header";
import UserService from '../../utils/services/UserService.js'

export const CurrentUserDetails = () => {

    // User service instanciation
    const userService = new UserService();

    const [currentUser, setCurrentUser] = useState([])
    
    const [lastname, setlastname] = useState(currentUser.lastname)
    const [firstname, setfirstname] = useState(currentUser.firstname)
    const [email, setemail] = useState(currentUser.email)
    const [phone, setphone] = useState(currentUser.phone)
    const [birthday, setbirthday] = useState(currentUser.birthday)

    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [newPasswordConfirm, setnewPasswordConfirm] = useState("")

    useEffect(() => {
        userService.getCurrentUser(setCurrentUser)
    }, [])

    const IdentitySubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        currentUser.lastname = lastname;
        currentUser.firstname = firstname;
        currentUser.email = email;
        currentUser.phone = phone;
        currentUser.birthday = birthday;

        // Handle validations
        userService.updateCurrentUser(currentUser)
    }

    const PasswordSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        currentUser.oldPassword = oldPassword;
        currentUser.newPassword = newPassword;
        currentUser.newPasswordConfirm = newPasswordConfirm;
        // Handle validations
        userService.updatePassword(currentUser);
    }

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [phrase, setphrase] = useState("");
  
    const handleDeleteAccount = () => {
      if (phrase === "DELETE MY ACCOUNT") {
        userService.deleteUser(phrase);
      } else {
        alert("Vous devez entrer 'DELETE MY ACCOUNT' pour supprimer votre compte");
      }
    };
  
    const handleDeleteButtonClicked = () => {
      setShowConfirmation(true);
    };
    
    // format birthday
    let formatBirthday = currentUser.birthday ? currentUser.birthday.split("T")[0] : "";

  return (
    <>
        <Header />
        <div className={style.userInfosDetail}>
            <div className={style.identityUser}>
                <form method="post" onSubmit={IdentitySubmit}>
                    <div>
                        <label>
                            <h3>Nom:</h3>
                            <input type="text" name="name" placeholder={currentUser.lastname} onChange={e => setlastname(e.target.value)} />
                        </label>
                        <label>
                            <h3>Prénom:</h3>
                            <input type="text" name="firstname" placeholder={currentUser.firstname} onChange={e => setfirstname(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h3>Email:</h3>
                            <input type="text" name="email" placeholder={currentUser.email} onChange={e => setemail(e.target.value)} />
                        </label>
                        <label>
                            <h3>Téléphone:</h3>
                            <input type="text" name="phone" placeholder={currentUser.phone} onChange={e => setphone(e.target.value)} />
                        </label>
                    </div>
                    <label>
                        <h3>Date de naissance:</h3>
                        <input type="date" name="birthday" placeholder={formatBirthday} onChange={e => setbirthday(e.target.value)} />
                    </label>
                    <input type="submit" value="Mettre à jour" />
                </form>
            </div>
        </div>
        <div className={style.userInfosDetail}>
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
        </div>
                {showConfirmation ? (
                    <div className={style.userInfosDetail}>
                        <div className={style.identityUser}>
                            <div className={style.delete}>
                                <p>Veuillez saisir <strong>'DELETE MY ACCOUNT'</strong> pour supprimer votre compte</p>
                            </div>
                            <div className={style.delete}>
                                <input type="text" value={phrase} />
                            </div>
                            <div className={style.delete}>
                                <button onClick={handleDeleteAccount}>Confirmer la suppression</button>
                                <button onClick={() => setShowConfirmation(false)}>Annuler</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={style.userInfosDetail}>
                        <div className={style.identityUser}>
                            <button onClick={handleDeleteButtonClicked}>Supprimer mon compte</button>
                        </div>
                    </div>
                )}
    </>
  )
}