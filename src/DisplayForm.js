import React from 'react'
import { useLocation } from 'react-router'

const DisplayForm = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  return (
    <>
      <div className="shadow-2xl rounded-md p-8 w-1/3 pl-16 mt-16 bg-white" style={{ marginLeft: '35%' }}>
        <p className="font-poppins text-3xl font-bold mx-16 pb-8" >Signed In user</p>

        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">First Name : {formData.fname} </p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Last Name : {formData.lname} </p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">User Name : {formData.userName} </p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Email : {formData.email}</p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Password : {formData.password}</p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Phone : {formData.phone}</p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Country : {formData.country}</p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">City : {formData.city}</p>
        <p className="mx-2 px-2 w-5/6 mb-2 p-1 text-lg">Adhar Number : {formData.adhar}</p>

      </div>
    </>
  )
}

export default DisplayForm