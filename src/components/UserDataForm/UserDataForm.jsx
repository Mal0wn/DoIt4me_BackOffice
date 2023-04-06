import React, { useState, useEffect } from "react";
import style from "./UserDataForm.module.css";
import UserService from "../../utils/services/UserService.js";

export const UserDataForm = ( currentUser ) => {

    currentUser = currentUser.data;
    // User service instanciation
    const userService = new UserService();

    const [lastname, setlastname] = useState(currentUser.lastname);
    const [firstname, setfirstname] = useState(currentUser.firstname);
    const [email, setemail] = useState(currentUser.email);
    const [phone, setphone] = useState(currentUser.phone);
    const [birthday, setbirthday] = useState(currentUser.birthday);

    const [modify, setModify] = useState(false);
    
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Update user data
    const IdentitySubmit = async (e) => {
        e.preventDefault()

        //If the user doesn't change the value, the value is the same as the current user
        currentUser.firstname = firstname ? firstname : currentUser.firstname;
        currentUser.lastname = lastname ? lastname : currentUser.lastname;
        currentUser.email = email ? email : currentUser.email;
        currentUser.phone = phone ? phone : currentUser.phone;
        currentUser.birthday = birthday ? birthday : currentUser.birthday;        

        try {
            await userService.updateCurrentUser(currentUser);
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

    // format birthday
    let formatBirthday = currentUser.birthday ? currentUser.birthday.split("T")[0] : "";

    return (
        <>
            {
                modify ? (
                    <div className={style.identityUser}>
                        <div>
                            {successMessage && <p className={style.success}>{successMessage}</p>}
                            {errorMessage && <p className={style.error}>{errorMessage}</p>}
                        </div>
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
                            <div>
                                <label>
                                    <h3>Date de naissance:</h3>
                                    <input type="date" name="birthday" placeholder={formatBirthday} onChange={e => setbirthday(e.target.value)} />
                                </label>
                            </div>
                            <input type="submit" value="Mettre à jour" />
                        </form>
                        <button onClick={() => setModify(false)}>Annuler</button>
                    </div>
                ) : (
                    <div className={style.identityUser}>
                        <div>
                            <label>
                                <h3>Nom:</h3>
                                <p>{currentUser.lastname}</p>
                            </label>
                            <label>
                                <h3>Prénom:</h3>
                                <p>{currentUser.firstname}</p>
                            </label>
                        </div>
                        <div>
                            <label>
                                <h3>Email:</h3>
                                <p>{currentUser.email}</p>
                            </label>
                            <label>
                                <h3>Téléphone:</h3>
                                <p>{currentUser.phone}</p>
                            </label>
                        </div>
                        <div>
                            <label>
                                <h3>Date de naissance:</h3>
                                <p>{formatBirthday}</p>
                            </label>
                        </div>
                        <button onClick={() => setModify(true)}>Modifier</button>                        
                    </div>
                )}
        </>
    );
};