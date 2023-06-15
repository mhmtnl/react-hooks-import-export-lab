import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About"
import user from "../data/user"

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.username} city={user.city} />
      <About image = {user.image}/>
    </div>
  );
}

export default App;
