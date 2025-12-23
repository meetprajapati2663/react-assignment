import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

function Props({name,age,location}) {
  return (
    <div>
     <MDBCard alignment='center'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>{location}</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>{age}</MDBCardFooter>
    </MDBCard>

    </div>
  )
}

export default Props