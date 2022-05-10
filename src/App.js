import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import NavBar from "./components/NavBar/NavBar";
import UsersList from "./pages/Users/UsersList";
import ItemListUser from "./pages/Users/UsersList";
import {Rating} from "./components/Rating/Rating";
import {Navigation} from "./components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
        <Navigation/>
    </div>
  );
}

export default App;
