import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const styles = {
  signupStyle: {
    background: '#a8dadc',
    height: '100vh',
  },
  formStyle: {
   marginTop: '5%', 
  },
  headingStyle: {
    marginTop: '5%',
    fontSize: 45
  },
  textStyle: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  buttonStyle:{
    fontSize: 25,
    borderRadius: '50%',
    background: '#dc2f02',
    fontWeight: 'bold'
  }

}

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={styles.signupStyle}>
      <Link to="/login">← Go to Login</Link>
    <div className="d-flex justify-content-center">
      <h2 style={styles.headingStyle}>Signup</h2>
    </div>
    <div className="d-flex justify-content-center">
      <form onSubmit={handleFormSubmit} style={styles.formStyle}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName" style={styles.textStyle}>First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName" style={styles.textStyle}>Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email" style={styles.textStyle}>Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" style={styles.textStyle}>Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit" style={styles.buttonStyle}>Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;

// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const SignupForm = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   // set state for form validation
//   const [validated] = useState(false);
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error }] = useMutation(ADD_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...userFormData },
//       });
//       console.log(data);
//       Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error(err);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor="username">Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your username"
//             name="username"
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Username is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Your email address"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Email is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Password is required!
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={
//             !(
//               userFormData.username &&
//               userFormData.email &&
//               userFormData.password
//             )
//           }
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default SignupForm;