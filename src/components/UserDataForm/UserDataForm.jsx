import React, { useState, userEffect } from "react";
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

    const IdentitySubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        currentUser.lastname = lastname;
        currentUser.firstname = firstname;
        currentUser.email = email;
        currentUser.phone = phone;
        currentUser.birthday = birthday;

        // Handle validations
        try {
            userService.updateCurrentUser(currentUser)
            .then(response => {
              console.log(response); // Affiche le code de statut dans la console
              <p>success</p>
            })
            .catch(error => console.error(error));
        } catch (error) {
            console.log(error);
        }

    }

    // format birthday
    let formatBirthday = currentUser.birthday ? currentUser.birthday.split("T")[0] : "";

    return (
        <>
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
                    <div>
                        <label>
                            <h3>Date de naissance:</h3>
                            <input type="date" name="birthday" placeholder={formatBirthday} onChange={e => setbirthday(e.target.value)} />
                        </label>
                    </div>
                    <input type="submit" value="Mettre à jour" />
                </form>
            </div>
        </>
    );
};