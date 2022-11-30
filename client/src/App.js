import React,{useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

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

  if (!user) return <LogIn setUser={setUser} />


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
      </Routes>

    </div>
  );
}

export default App;
