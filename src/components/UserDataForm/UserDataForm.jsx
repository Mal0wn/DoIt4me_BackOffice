import React, { useState } from "react";
import style from "./UserDataForm.module.css";
import UserService from "../../utils/services/UserService.js";
import SuccessMessage from "../UI/SuccessMessage/SuccessMessage";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

export const UserDataForm = ( currentUser ) => {

    currentUser = currentUser.data;
    // User service instanciation
    const userService = new UserService();

    const [lastname, setlastname] = useState(currentUser.lastname);
    const [firstname, setfirstname] = useState(currentUser.firstname);
    const [email, setemail] = useState(currentUser.email);
    const [phone, setphone] = useState(currentUser.phone);
    const [birthday, setbirthday] = useState(currentUser.birthday);
    
    const [number, setnumber] = useState(currentUser.address && currentUser.address.length > 0 ? currentUser.address[0].number : "");
    const [street, setstreet] = useState(currentUser.address && currentUser.address.length > 0 ? currentUser.address[0].street : "");
    const [zipCode, setzipCode] = useState(currentUser.address && currentUser.address.length > 0 ? currentUser.address[0].zip_code : "");
    const [city, setcity] = useState(currentUser.address && currentUser.address.length > 0 ? currentUser.address[0].city : "");
    const [country, setcountry] = useState(currentUser.address && currentUser.address.length > 0 ? currentUser.address[0].country : "");


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

        currentUser.address[0].number = number ? number : currentUser.address[0].number;
        currentUser.address[0].street = street ? street : currentUser.address[0].street;
        currentUser.address[0].zip_code = zipCode ? zipCode : currentUser.address[0].zip_code;
        currentUser.address[0].city = city ? city : currentUser.address[0].city;
        currentUser.address[0].country = country ? country : currentUser.address[0].country;
        

        try {
            let response = await userService.updateCurrentUser(currentUser);
            console.log(response.status);
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
    let parts = formatBirthday.split('-');
    let reversedDate = parts.reverse().join('-');

    return (
        <>
            {
                modify ? (
                    <div className={style.identityUser}>
                        {successMessage && <SuccessMessage message={successMessage} />}
                        {errorMessage && <ErrorMessage message={errorMessage} />}
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
                            <div>
                                <label>
                                    <h3>Numéro</h3>
                                    <input type="text" name="number" placeholder={currentUser.address[0]?.number ?? ""} onChange={e => setnumber(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Rue</h3>
                                    <input type="text" name="street" placeholder={currentUser.address[0]?.street ?? ""} onChange={e => setstreet(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <h3>Code postal</h3>
                                    <input type="text" name="zipCode" placeholder={currentUser.address[0]?.zip_code ?? ""} onChange={e => setzipCode(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Ville</h3>
                                    <input type="text" name="city" placeholder={currentUser.address[0]?.city ?? ""} onChange={e => setcity(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <h3>Pays</h3>
                                    <input type="text" name="country" placeholder={currentUser.address[0]?.country ?? ""} onChange={e => setcountry(e.target.value)} />
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
                                <p>{reversedDate}</p>
                            </label>
                        </div>
                            {currentUser && currentUser.address ? (
                                <>
                                    <div>
                                        <label>
                                            <h3>Numéro</h3>
                                            <p>{currentUser.address[0].number}</p>
                                        </label>
                                        <label>
                                            <h3>Rue</h3>
                                            <p>{currentUser.address[0]?.street}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <h3>Code postal</h3>
                                            <p>{currentUser.address[0].zip_code}</p>
                                        </label>
                                        <label>
                                            <h3>Ville</h3>
                                            <p>{currentUser.address[0].city}</p>
                                        </label>
                                        <label>
                                            <h3>Pays</h3>
                                            <p>{currentUser.address[0].country}</p>
                                        </label>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {console.log(currentUser.address)}
                                    <label>
                                        <p>L'adresse n'est pas renseignée.</p>
                                    </label>
                                </>
                            )}
                        <button onClick={() => setModify(true)}>Modifier</button>                        
                    </div>
                )}
        </>
    );
};