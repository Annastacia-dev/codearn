import React,{useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto login
    fetch ('/profile')
    .then( r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
      }
    })


  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/new_password" element={<NewPassword />} />
      </Routes>

    </div>
  );
}

export default App;
