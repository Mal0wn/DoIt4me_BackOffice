import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../lib/globalVar";
import axios from "axios";
import style from "./Settings.module.css";
import Header from "../../components/Header/Header";

export const Settings = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [town, setTown] = useState("");
  const [mail, setMail] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [modifyAccountInfos, setModifyAccountInfos] = useState("");
  const [user, setUser] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    setModifyAccountInfos("onModify");
  }, []);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    setUser(user);
    setName(user.lastname);
    setFirstName(user.firstname);
    setBirthDate(user.birthday);
    setAdress(user.adress);
    setPostalCode(user.postCode);
    setTown(user.city);
    setMail(user.email);
    setState(user.state);
    setPhoneNumber("0605040305");
  }, [modifyAccountInfos]);

  const onValidMyProfilForm = () => {
    if (password === verifPassword) {
      setErrorMessage("");
      let localUser = {
        id: user.id,
        adress: adress,
        birthday: birthDate,
        city: town,
        email: mail,
        password: user.password,
        role: "Admin",
        firstname: firstName,
        lastname: name,
        phoneNumber: phoneNumber,
        postCode: postalCode,
        state: state,
      };
      setUser(localUser);
      localStorage.setItem("currentUser", JSON.stringify(localUser));
      modifyProfil(localUser);
    } else {
      setErrorMessage("Mots de passes non identiques");
    }
  };

  const modifyProfil = async (localUser) => {
    let token = localStorage.getItem("accessToken");
    await axios
      .put(API_BASE_URL + "Admin/UpdateUser", localUser, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        if (password === "") {
          setModifyAccountInfos("onRefreshInfos");
          window.location.reload(false);
        } else {
          let localPassword = {
            confirmNewPassword: password,
            newPassword: password,
            oldPassword: oldPassword,
          };
          modifyPassword(localPassword);
        }
      })
      .catch((err) => console.log(err));
  };

  const modifyPassword = async (localPassword) => {
    let token = localStorage.getItem("accessToken");
    await axios
      .put(API_BASE_URL + "User/UpdatePassword", localPassword, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        alert("Mot de passe changer");
        setModifyAccountInfos("onRefreshInfos");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.container}>
      <Header />
      <section>
        <form>
          <div className={style.formPartDiv}>
            <label>Nom </label>
            <input
              placeholder="Nom"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
            <br></br>

            <label>Prénom </label>
            <input
              placeholder="Prénom"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
          </div>

          <div className={style.formPartDiv}>
            <label>Date de Naissance </label>
            <input
              value={birthDate}
              placeholder="Date de Naissance"
              onChange={(event) => {
                setBirthDate(event.target.value);
              }}
            />
            <br></br>

            <label>Mail </label>
            <input
              placeholder="Mail"
              onChange={(event) => {
                setMail(event.target.value);
              }}
              value={mail}
            />
            <br></br>

            <label>Numéro de téléphone </label>
            <input
              placeholder="Numéro de téléphone"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              value={phoneNumber}
            />
          </div>
          <div className={style.formPartDiv}>
            <label>Adresse </label>
            <input
              placeholder="Adresse"
              onChange={(event) => {
                setAdress(event.target.value);
              }}
              value={adress}
            />
            <br></br>

            <label>Code Postal </label>
            <input
              placeholder="Code Postal"
              onChange={(event) => {
                setPostalCode(event.target.value);
              }}
              value={postalCode}
            />
            <br></br>

            <label>Ville </label>
            <input
              placeholder="Ville"
              onChange={(event) => {
                setTown(event.target.value);
              }}
              value={town}
            />
            <br></br>
            
            <label>Pays </label>
            <input
              placeholder="Pays"
              onChange={(event) => {
                setState(event.target.value);
              }}
              value={state}
            />
          </div>

          <div className={style.formPartDiv}>
            <label>Ancien mot de passe </label>
            <input
              placeholder="Ancien Mot de Passe"
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
              value={oldPassword}
            />
            <br></br>

            <label>Mot de Passe </label>
            <input
              placeholder="Mot de Passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              value={password}
            />
            <br></br>

            <label>Verification du mot de passe </label>
            <input
              placeholder="Verification du mot de passe"
              type="password"
              onChange={(event) => {
                setVerifPassword(event.target.value);
              }}
              value={verifPassword}
            />
          </div>
        </form>
        <button className={style.saveButton} onClick={onValidMyProfilForm}>Enregistrer</button>
        <h1>{errorMessage}</h1>
      </section>
    </div>
  );
};
