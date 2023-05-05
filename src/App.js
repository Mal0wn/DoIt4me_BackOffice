import './App.css';
import Header from "./components/Header/Header";
import {
    Routes,
    Route,
} from 'react-router-dom';
import { UsersList } from "./pages/Users/UsersList";
import { Connexion } from './pages/Connexion/Connexion';
import { MissionsList } from "./pages/Missions/MissionsList";
import { UsersSignal } from "./pages/Signal/UsersSignal";
import { MissionsSignal } from "./pages/Signal/MissionsSignal";
import { Settings } from "./pages/Settings/Settings";
import { UserDetails } from "./pages/UserDetail/UserDetails";

function App() {
  return (
      <div className="appContain">
      <Routes>
            <Route  exact path='/users' element={<UsersList  />}/>
            <Route  exact path='/missions' element={< MissionsList />}/>
            <Route  exact path='/usersSignal' element={< UsersSignal />}/>
            <Route  exact path='/missionsSignal' element={< MissionsSignal />}/>
            <Route  exact path='/settings' element={< Settings />}/>
            <Route  exact path='/userDetail/:userId' element={< UserDetails />}/>
            <Route  exact path='/login' element={< Connexion />}/>
            <Route  exact path='/' element={< Connexion />}/>

      </Routes>
      </div>
  );
}

export default App;
