
import React , { useState, useEffect } from  "react";
import style from './CurrentUserDetails.module.css';
import { Rating } from "../../components/Rating/Rating";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import UserService from '../../utils/services/UserService.js'
import NavBar from "../../components/NavBar/NavBar";


export const CurrentUserDetails = () => {

  // User service instanciation
  const userService = new UserService();

  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    userService.getCurrentUser(setCurrentUser)
  }, [])

// format birthday
  let birthday = currentUser.birthday ? currentUser.birthday.split("T")[0] : "";
  birthday = birthday.split("-").reverse().join("/");

  return (
    <>
        <Header />
        <div className={style.userInfosDetail}>
            <div className={style.identityUser}>
                <form>
                    <div>
                        <label>
                            <h3>Nom:</h3>
                            <input type="text" name="name" placeholder={currentUser.lastname}/>
                        </label>
                        <label>
                            <h3>Prénom:</h3>
                            <input type="text" name="firstname" placeholder={currentUser.firstname}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <h3>Email:</h3>
                            <input type="text" name="email" placeholder={currentUser.email}/>
                        </label>
                        <label>
                            <h3>Téléphone:</h3>
                            <input type="text" name="phone" placeholder={currentUser.phone}/>
                        </label>
                    </div>
                    <label>
                        <h3>Anniversaire:</h3>
                        <input type="text" name="birthday" placeholder={birthday} format/>
                    </label>
                    <label>
                        <h3>Adresse:</h3>
                        <div>
                            <label>
                                <p>Numéro</p>
                                <input type="text" name="address" placeholder={currentUser.address ? currentUser.address[0].number : ""}/>
                            </label>
                            <label>
                                <p>Nom de voie</p>
                                <input type="text" name="address" placeholder={currentUser.address ? currentUser.address[0].street : ""}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <p>Ville</p>
                                <input type="text" name="address" placeholder={currentUser.address ? currentUser.address[0].city : ""}/>
                            </label>
                            <label>
                                <p>Code postal</p>
                                <input type="text" name="address" placeholder={currentUser.address ? currentUser.address[0].zip_code : ""}/>
                            </label>
                        </div>
                    </label>
                    <input type="submit" value="Mettre à jour" />
                </form>
            </div>
        </div>
        <div className={style.userInfosDetail}>
            <div className={style.identityUser}>
                <form>
                    <label>
                        <h3>Ancien mot de passe:</h3>
                        <input type="password" name="oldPassword" placeholder="Ancien mot de passe"/>
                    </label>
                    <label>
                        <h3>Nouveau mot de passe:</h3>
                        <input type="password" name="newPassword" placeholder="Nouveau mot de passe"/>
                    </label>
                    <label>
                        <h3>Confirmer le nouveau mot de passe:</h3>
                        <input type="password" name="confirmNewPassword" placeholder="Confirmer le nouveau mot de passe"/>
                    </label>
                    <input type="submit" value="Mettre à jour" />
                </form>
            </div>
        </div>
    </>
  )
}