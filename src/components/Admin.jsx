import React from 'react';
import { Routes, Route } from "react-router-dom";
import Asidebar from './admin-components/Admin-sidebar';
import Adashboard from "./admin-components/Adashboard";
import Addlots from "./admin-components/Add_lots";
import AddPremium from "./admin-components/Add_premium";
import Adminrecord from "./admin-components/Admin_record";
import Adminsetting from "./admin-components/Admin_setting";

function Admin() {
  return (
    <div className="Admin">
        <Asidebar/>
      <Routes>
        <Route path="/admin-dashboard" element={ <Adashboard/> } />
        <Route path="/addlots" element={ <Addlots/> } />
        <Route path="/addpremium" element={ <AddPremium/> } />
        <Route path="/adminrecord" element={ <Adminrecord/> } />
        <Route path="/adminsetting" element={ <Adminsetting/> } />
      </Routes>
    </div>
  )
}

export default Admin