import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../lib/globalVar';

export default class UserService {

  token = localStorage.getItem("accessToken");
  navigate = useNavigate();

  getAllUsers() {
    return axios.get(API_BASE_URL + 'Admin/GetAllUsers', {
      headers: {
        Authorization: "Bearer " + this.token ,
      }
    })  
  }

  /**
   * Get CurrentUser infos
   */
    async getCurrentUser () {
    await axios
    .get(API_BASE_URL + "User/GetCurrentUser", {
        headers: {
            Authorization: "Bearer " + this.token
            },
        })
        .then((res) => {
            localStorage.setItem("currentUser", JSON.stringify(res.data))
            console.log(res.data)
            this.navigate("/users");
        })
    .catch((err) => console.log(err));
  };
};

