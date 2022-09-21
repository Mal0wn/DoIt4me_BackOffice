import axios from 'axios';

export default class UserService {

domaine = `https://localhost:7102/api/Admin/`;
token = localStorage.getItem("accessToken");

getAllUsers() {
	return axios.get(this.domaine + 'GetAllUsers', {
      headers: {
        Authorization: "Bearer " + this.token ,
      }
    })  

}
};

