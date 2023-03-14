
import React , {useState, useEffect} from  "react";
import style from './UsersList.module.css';
import {Rating} from "../../components/Rating/Rating";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import UserService from '../../utils/services/UserService.js'

export const UsersList = () => {

  // User service instanciation
  const userService = new UserService();

  const [users, setAllUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers(setAllUsers)
  }, [])

  return (
    <>
      <Header />
      <div className={style.usersContainer}>
        <div className={style.column}>
          <section className={style.containList}>
            <div>
              {Array.isArray(users) ? users.map(user => {
                return (
                  <>
                    <div key={user.id}>
                      <div> <img alt="profil" className={style.imgUserList} src={user.picture ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png"} /></div>
                      <p>{user.firstname}</p>
                      <p>{user.lastname}</p>
                      <p>{user.email}</p>
                      <p>{user.phoneNumber}</p>
                      <div><Rating star={user.rate ?? 1} /></div>
                      <Link to={`/userDetail/${user.id}`}> details </Link>
                    </div>
                  </>
                );
              })
                : null}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}