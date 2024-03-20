import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './LoginPage';


import ViewUser from './ViewUser';
import EditUser from './EditUser';
import LoginAccount from './LoginAccount';
import MainPage from './MainPage';
import CreateUser from './CreateUser';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/createLoginAccount' element={<LoginAccount></LoginAccount>}></Route>
      <Route path='/mainPage' element={<MainPage></MainPage>}></Route>
      <Route path='/createUser' element={<CreateUser></CreateUser>}></Route>
      <Route path='/viewUser/:id' element={<ViewUser></ViewUser>}></Route>
      <Route path='/editUser/:id' element={<EditUser></EditUser>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;