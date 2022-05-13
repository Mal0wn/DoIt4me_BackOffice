import React, {useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
export const Settings = () => {

    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [town, setTown] = useState('')
    const [mail , setMail] = useState('')

    return(
        <div className="containSettingsPage page">
            <NavBar />
            <section className="settings">
                <form>
                    <input placeholder='Nom' onChange={setName}/>
                    <input placeholder='Prénom' onChange={setFirstName}/>
                    <input placeholder='Date de Naissance' onChange={setBirthDate}/>
                    <input placeholder='Adresse' onChange={setAddress}/>
                    <input placeholder='Code Postal' onChange={setPostalCode}/>
                    <input placeholder='Ville' onChange={setTown}/>
                    <input placeholder='Mail' onChange={setMail}/>
                    <button onPress={onValidMyProfilForm}>Enregistrer</button>
                </form>
            </section>
        </div>
    )

}
const onValidMyProfilForm = () => {
    console.log("onValidMyProfilForm")
}