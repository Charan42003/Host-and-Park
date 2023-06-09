import React from 'react';
import { Routes, Route } from "react-router-dom";
import Usidebar from './user-components/User_sidebar';
import Udashboard from "./user-components/Udashboard";
import Updates from "./user-components/Current_status";
import Userrecord from "./user-components/User_records";
import Usersetting from "./user-components/User_setting";

function User() {
  return (
    <div className="User">
        <Usidebar/>
        
      <Routes>
        <Route path="/user-dashboard" element={ <Udashboard/> } />
        <Route path="/current-update" element={ <Updates/> } />
        <Route path="/user-record" element={ <Userrecord/> } />
        <Route path="/user-setting" element={ <Usersetting/> } />
      </Routes>
    </div>
  )
}

export default User