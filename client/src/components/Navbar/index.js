import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navItem: {
        color: '#90e0ef',
        fontSize: 25
    }
}

function Navigation({currentPage, handlePageChange}) {
    return (
         <ul className='nav navigation justify-content-end link-danger'>
            <li className='nav-item'>
                <Link to="/"
                    style={styles.navItem} 
                    className={currentPage === 'Home' ? 'nav-link  active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Closets"
                    
                    className={currentPage === 'Closets' ? 'nav-link active' : 'nav-link'}
                    style={styles.navItem} 
                >
                    Closets
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Login"
                    
                    className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                    style={styles.navItem} 
                > 
                    Login
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Signup"
                    style={styles.navItem} 
                    className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
                   
                >
                    Signup
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           <Navbar.Brand as={Link} to='/'>
//             TheL.P.U
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar'>
//             <Nav className='ml-auto'>
//               <Nav.Link as={Link} to='/'>
//                 Search For Books
//               </Nav.Link>
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/saved'>
//                     See Your Books
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* set modal data up */}
//       <Modal
//         size='lg'
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby='signup-modal'>
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey='login'>
//           <Modal.Header closeButton>
//             <Modal.Title id='signup-modal'>
//               <Nav variant='pills'>
//                 <Nav.Item>
//                   <Nav.Link eventKey='login'>Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey='login'>
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey='signup'>
//                 <SignUpForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

// export default AppNavbar;
