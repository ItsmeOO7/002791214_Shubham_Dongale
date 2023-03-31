import React from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";


function Home(){
  return(
      <div>
      <Navbar/>
      <Content title="Home" content="This is the Home Page"/>
      </div>
      )
}

export default Home