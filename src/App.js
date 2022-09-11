import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Login from './pages/login/Login';
import { productInputs, userInputs } from "./formSource";
import { AuthContext } from './context/AuthContext';

function App() {
  const {darkMode} = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

  const RequiredAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<RequiredAuth><Home /></RequiredAuth>} />
            <Route path='users'>
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path=':userId' element={<RequiredAuth><Single /></RequiredAuth>} />
              <Route 
                path='new'
                element={<RequiredAuth><New inputs={userInputs} title="Add New User" /></RequiredAuth>}
              />
            </Route>
            <Route path='products'>
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path=':productId' element={<RequiredAuth><Single /></RequiredAuth>} />
              <Route
                path='new'
                element={<RequiredAuth><New inputs={productInputs} title="Add New Product" /></RequiredAuth>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
