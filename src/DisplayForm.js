import React from 'react'
import { useLocation } from 'react-router'

const DisplayForm = () => {
  const location= useLocation();
  const {formData} = location.state || {};
  return (
    <>
        <center><div className="form">
        <h1>Sign up</h1>
            <form action="">
                <p>First Name : {formData.fname} </p>
                <p>Last Name : {formData.lname} </p>
                <p>User Name : {formData.userName} </p>
                <p>Email : {formData.email}</p>
                <p>Password : {formData.password}</p>
                <p>Phone : {formData.phone}</p>
                <p>Country : {formData.country}</p>
                <p>City : {formData.city}</p>
                <p>Adhar Number : {formData.adhar}</p>
            </form>
        </div></center>
    </>
  )
}

export default DisplayForm