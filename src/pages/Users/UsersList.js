
import React , {useState, useEffect} from  "react";
import style from './UsersList.module.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Rating} from "../../components/Rating/Rating";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import userService from '../../utils/services/UserService.js'

const ItemListUser = () => {

  
  const [users , setAllUsers] = useState([])
  const navigate = useNavigate();
  

  
  const getAllUsers = () => {
    let token = localStorage.getItem("accessToken");
        
        axios.get(`https://localhost:7102/api/Admin/GetAllUsers`, {
        headers: {
            Authorization: "Bearer " + token ,
        },
    })  
    .then(function (response) {
      setAllUsers(response.data)
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
  }

useEffect(() => {
  getAllUsers()
}, [])



//function get user by id 





return (
  <div className={style.usersContainer}>
  <Header/>
    <div className={style.column}>
    
      <section className={style.containList}>
        
        <div>
        {Array.isArray(users) ? users.map(item => {
        console.log("item " + item)
        console.log("users" + users)
          return (
          <>
            <div  key={item.id}>
            <div> <img alt="profil" className={style.imgUserList} src={item.picture ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png" }/></div>
            <p>{item.firstname}</p>
            <p>{item.lastname}</p>
            <p>{item.email}</p>
            <p>{item.phoneNumber}</p>
            <div><Rating star = {item.rate ?? 1}/></div>
            
              <Link to={`/userDetail/${item.id}`}> details </Link>
            </div>  
      </>
            );
          })
          : null }
          
          </div>
        </section>
      
      </div>
    </div>
    )
  }
  
  export default ItemListUser;