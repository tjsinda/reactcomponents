import React from 'react'
import Loginbox from "./Login/Loginbox";
import Signup from "./Signup/Signup";
import Footer from "./Footer/Footer";
import './App.css';

function App() {
  return (
    <>
        <div className="nav-container">
      </div>
      <div className="main">
        <Loginbox />
        <Signup />
      </div>
      <div>
        <Footer />
        {/* <Footer2 /> */}
      </div>
    </>
  )
}

export default App
