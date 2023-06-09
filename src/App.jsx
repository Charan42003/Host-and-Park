import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Admin from './components/Admin';
import User from './components/User';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/admin" element={ <Admin/> } />
        <Route path="/user" element={ <User/> } />
      </Routes>
    </div>
    // <div className="App">
    //     <Asidebar/>
    //   <Routes>
    //     <Route path="/admin-dashboard" element={ <Adashboard/> } />
    //     <Route path="/addlots" element={ <Addlots/> } />
    //     <Route path="/addpremium" element={ <AddPremium/> } />
    //     <Route path="/adminrecord" element={ <Adminrecord/> } />
    //     <Route path="/adminsetting" element={ <Adminsetting/> } />
    //   </Routes>
    // </div>
    // <div className="App">
    //     <Usidebar/>
    //   <Routes>
    //     <Route path="/user-dashboard" element={ <Udashboard/> } />
    //     <Route path="/current-update" element={ <Updates/> } />
    //     <Route path="/user-record" element={ <Userrecord/> } />
    //     <Route path="/user-setting" element={ <Usersetting/> } />
    //   </Routes>
    // </div>
  )
}

export default App