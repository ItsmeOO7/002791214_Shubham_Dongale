import React from "react";
import "../Navbar/Navbar.css"
import { Link} from "react-router-dom";


function Navbar ( ) {
    return (
    <div className = "navbar">
      <div className="rightside">
      <Link to='/Home'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Jobs'>Jobs</Link>
    </div>
    </div>
   
    
    )
}
    export default Navbar;