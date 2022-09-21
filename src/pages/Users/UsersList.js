import React , {useState, useMemo, useEffect} from  "react";
import { FaSkull  } from "react-icons/fa";
import './UsersList.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from '../../components/Pagination/Pagination'
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";



const ItemListUser = () => {

  
  let [users , setAllUsers] = useState([])
  
  
  
  function getAllUsers(){
      let token = localStorage.getItem("accessToken");
      
      axios.get('https://localhost:7102/api/Admin/GetAllUsers', {
      headers: {
        Authorization: "Bearer " + token ,
      },
    })  
    
    .then(function (response) {
      
      console.log(response.data);
      setAllUsers(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

useEffect(() => {
  getAllUsers()
}, [])



return (
  <div className="usersContainer page">
    <div className="column">
    <Header/>
      <table className="containList">
        <thead>
          <tr>
            <th></th>
            <th className="headTab"></th>
            <th className="headTab">First Name</th>
            <th className="headTab">Last Name</th>
            <th className="headTab">Email</th>
            <th className="headTab">Phone</th>
            <th className="headTab">Rating</th>
            <th className="headTab"></th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(users) ? users.map(item => {
        console.log("item " + item)
        console.log("users" + users)
          return (
            <tr  key={item.id}>
            <td className={`itemSignalUser ${item.status === "signal"? 'userSignalTrue' : 'userSignalFalse'}`}><FaSkull/></td>
            <td> <img alt="image user" className="imgUserList" src={item.picture ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png" }/></td>
            <td>{item.firstname} {item.id}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td><Rating star = {item.rate ?? 1}/></td>
            <td className="btnDetail"><Link to="/userDetail/">Détails</Link></td>
            </tr>
            );
          })
          : null }
          </tbody>
        </table>
      
      </div>
    </div>
    )
  }
  
  export default ItemListUser;