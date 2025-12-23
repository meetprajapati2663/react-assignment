import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
    MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

    
        

        
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to='/About'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink to='/Contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
       
      </MDBContainer>
    </MDBNavbar>
    <MDBContainer>
     <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Card link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Home