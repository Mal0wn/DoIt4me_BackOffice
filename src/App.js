import './App.css';
import Header from "./components/Header/Header";
import {
    Routes,
    Route,
} from 'react-router-dom';
import UsersList from "./pages/Users/UsersList";
import {MissionsList} from "./pages/Missions/MissionsList";
import {UsersSignal} from "./pages/Signal/UsersSignal";
import {MissionsSignal} from "./pages/Signal/MissionsSignal";
import {Settings} from "./pages/Settings/Settings";
import {UserDetails} from "./pages/UserDetail/UserDetails";
import { Connexion } from './pages/Connexion/Connexion'
import {UserDetails} from "./components/UserDetail/UserDetails";


function App() {
  return (
      <div className="appContain">
          <Header/>
      <Routes>
          <Route  exact path='/users' element={<UsersList  />}/>
          <Route  exact path='/missions' element={< MissionsList />}/>
          <Route  exact path='/usersSignal' element={< UsersSignal />}/>
          <Route  exact path='/missionsSignal' element={< MissionsSignal />}/>
          <Route  exact path='/settings' element={< Settings />}/>
          <Route  exact path='/userDetail' element={< UserDetails />}/>
          <Route  exact path='/login' element={< Connexion />}/>
      </Routes>
      </div>
  );
}

export default App;
