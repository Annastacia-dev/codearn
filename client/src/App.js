import React,{useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import SingleTemplate from "./components/SingleTemplate";
import SellContent from "./components/SellContent";
import SellerDashboard from "./components/SellerDashboard";
import UserView from "./components/UserView";
import SellerTemplates from "./components/SellerTemplates";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Guidelines from "./components/Guidelines";


function App() {

  // user

  const [user, setUser] = useState([]);

  // get user asychronously

  async function getUser() {
    const response = await fetch("/profile");
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);


  // templates

  const [templates, setTemplates] = useState([])

  // getTemplates asynchronously
  
  async function getTemplates() {
    const response = await fetch('/templates')
    const data = await response.json()
    setTemplates(data)
  }

useEffect(() => {
  getTemplates()
}, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home templates={templates} user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={<SellerDashboard templates={templates} user={user} setUser={setUser} />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/new_password" element={<NewPassword />} />
        <Route path="/templates/:id" element={<SingleTemplate templates={templates} user={user} setUser={setUser} />} />
        <Route path="/sell_content" element={<SellContent user={user}/>} />
        <Route path="/user_view" element={<UserView templates={templates} user={user} setUser={setUser} />} />
        <Route path="/seller_templates" element={<SellerTemplates templates={templates} user={user} setUser={setUser} />} />
        <Route path="/user_profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
