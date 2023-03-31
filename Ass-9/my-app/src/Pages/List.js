import React from 'react'
import "../Pages/List.css"

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader
  } from 'mdb-react-ui-kit';


function List(props){
    return(
      <div id="list-item">
          <MDBCard alignment='center'>
      <MDBCardHeader>{props.id}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>{props.contact}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
    )
}

export default List