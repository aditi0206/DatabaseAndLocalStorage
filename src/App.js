import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

   const [firstname, setFirstName] = useState('');
   const [lastname, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [pin, setPin] = useState('');


   const handle = () => {
      localStorage.setItem('FirstName', firstname);
      localStorage.setItem('LastName', lastname);
      localStorage.setItem('Email', email);
      localStorage.setItem('Phone', phone);
      localStorage.setItem('Address', address);
      localStorage.setItem('Pin', pin);
   };
   const remove = () => {
      localStorage.removeItem('FirstName',firstname);
      localStorage.removeItem('LastName', lastname);
      localStorage.removeItem('Email', email);
      localStorage.removeItem('Phone', phone);
      localStorage.removeItem('Address', address);
      localStorage.removeItem('Pin', pin);
   };
   return (
      <div className="App">
      <h1><u>Contact Details</u></h1>
      <h2>Personal Details</h2>
        <div className="form-group1">
            <label>First Name</label>
           <input className="form-control"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}/>
         </div>

         <div className="form-group2">
         <label>Last Name</label>
           <input className="form-control"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}/>
         </div>

         <div className="form-group3">
         <label>Email Id</label>
           <input className="form-control"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
         </div>
         <div className="form-group4">
         <label>Phone No</label>
           <input className="form-control"
                placeholder="Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
         </div>
         <h2>Address Details</h2>
         <div className="form-group5">
         <label>Address</label>
           <input className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}/>
         </div>
         <div className="form-group6">
         <label>Pin Code</label>
           <input className="form-control"
                placeholder="Pin Code"
                value={pin}
                onChange={(e) => setPin(e.target.value)}/>
         </div>
        
          
         <div>
            <button className="btn btn-success btn-block" onClick={handle}>Submit To Local Storage</button>
         </div>


         {localStorage.getItem('FirstName') && (
            <div>
               First Name: <p>{localStorage.getItem('FirstName')}</p>
            </div>
         )}
         {localStorage.getItem('LastName') && (
            <div>
               Last Name: <p>{localStorage.getItem('LastName')}</p>
            </div>
         )}
         {localStorage.getItem('Email') && (
            <div>
               Email Id: <p>{localStorage.getItem('Email')}</p>
            </div>
         )}
         {localStorage.getItem('Phone') && (
            <div>
               Phone No: <p>{localStorage.getItem('Phone')}</p>
            </div>
         )}
         {localStorage.getItem('Address') && (
            <div>
                Address: <p>{localStorage.getItem('Address')}</p>
            </div>
         )}
         {localStorage.getItem('Pin') && (
            <div>
               Pin Code: <p>{localStorage.getItem('Pin')}</p>
            </div>
         )}
         
         <div>
            <button className="btn btn-danger btn-block" onClick={remove}>Remove The Data</button>
         </div>
      </div>
   );
};
export default App;