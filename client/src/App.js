import React,{useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
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
      </Routes>

    </div>
  );
}

export default App;
