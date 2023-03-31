import React from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import List from "./List";


function Contact(){
    
    const contacts = [
      {
          id: 1,
          name: "Shubham",
          contact: 8573905565
      },
      {
          id: 2,
          name: "Hardik",
          contact:8572009265 
      },
      {
          id: 3,
          name: "Raghav",
          contact: 85769381132
      }
      
  ];

  return(
    <div>
    <Navbar/>
    <Content title="Contact" content="This is the contact Page"/>
    {contacts.map(contact => (<List
      id = {contact.id}
      name = {contact.name}
      contact = {contact.contact}
    />))}
    </div>
  )
}

export default Contact
