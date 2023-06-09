import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import Admin from './components/Admin';
import User from './components/User';

import Udashboard from "./components/user-components/Udashboard";
import Updates from "./components/user-components/Current_status";
import Userrecord from "./components/user-components/User_records";
import Usersetting from "./components/user-components/User_setting";

import Adashboard from "./components/admin-components/Adashboard";
import Addlots from "./components/admin-components/Add_lots";
import AddPremium from "./components/admin-components/Add_premium";
import Adminrecord from "./components/admin-components/Admin_record";
import Adminsetting from "./components/admin-components/Admin_setting";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/admin" element={ <Admin/> } >
          <Route path="admin-dashboard" element={ <Adashboard/> } />
          <Route path="addlots" element={ <Addlots/> } />
          <Route path="addpremium" element={ <AddPremium/> } />
          <Route path="adminrecord" element={ <Adminrecord/> } />
          <Route path="adminsetting" element={ <Adminsetting/> } />
        </Route>
        <Route path="/user" element={ <User/> }>
          <Route path="user-dashboard" element={ <Udashboard/> } />
          <Route path="current-update" element={ <Updates/> } />
          <Route path="user-record" element={ <Userrecord/> } />
          <Route path="user-setting" element={ <Usersetting/> } />
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);