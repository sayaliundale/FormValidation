import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const countries = ["India", "USA", "UK"];
    const cities = {
        India: ["Delhi", "Mumbai", "Chennai", "Hydrabad", "Banglore"],
        USA: ["New York", "Los Angeles", "Chicago"],
        UK: ["London", "Manchester", "Liverpool"]
    };
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [adhar, setAdhar] = useState("");
    const [fNameError, setFnameError] = useState("");
    const [lNameError, setLnameError] = useState("");
    const [uNameError, setUnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [cityError, setCityError] = useState("");
    const [adharError, setAdharError] = useState("");
    const formData = { fname, lname, userName, password, adhar, phone, email, city, country };
    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname.trim() === "") {
            setFnameError("Fill the First Name field");
        }

        else if (lname.trim() === "") {
            setLnameError("Please fill Last Name field");
        }
        else if (userName.trim() === "") {
            setUnameError("Please fill Username field");
        }
        else if (!Email.test(email)) {
            setEmailError("Please fill Email field");
        }
        else if (password.length < 6) {
            setPasswordError("Password length should be greater than 6")
        }

        else if (!country.trim()) {
            setCountryError("Please select country");
        }
        else if (!city.trim()) {
            setCityError("Please select the city");
        }
        else if (fname && lname && adhar && phone && country && city && password && email && userName) {
            navigate("/display", { state: { formData } });
        }
        else {
            navigate("")
        }
    }

    const handlefname = (e) => {
        let item = e.target.value;
        setFname(item);
        if (item.trim() !== "") {
            setFnameError("");
        }
    }
    const handlelname = (e) => {
        let item = e.target.value;
        setLname(item);
        if (item.trim() !== "") {
            setLnameError("");
        }
    }
    const handleUser = (e) => {
        let item = e.target.value;
        setUserName(item);
        if (userName.trim() !== "") {
            setUnameError("");
        }
    }

    const handleEmail = (e) => {
        let item = e.target.value;
        setEmail(item);
        if (email.trim() !== "") {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        let item = e.target.value;
        setPassword(item);
        if (password.trim() !== "") {
            setPasswordError(" ")
        }
    }
    const handlePhone = (e) => {
        let item = e.target.value;
        setPhone(item);
        if (item.length === 10) {
            setPhoneError("");
        } else {
            setPhoneError("Phone number should be of 10 digits");
        }
    }
    const handleCountry = (e) => {
        let item = e.target.value;
        setCountry(item);
        if (item) {
            setCountryError("");
        }
    }
    const handleCity = (e) => {
        let item = e.target.value;
        setCity(item);
        if (item) {
            setCityError("");
        }
    }
    const handleAdhar = (e) => {
        let item = e.target.value
        setAdhar(item);
        if (adhar.length === 12) {
            setAdharError("")
        }
        else {
            setAdharError("Please enter adhar number ");
        }
    }
    return (
        <>
            <div className="shadow-2xl rounded-md p-8 w-1/3 pl-16 mt-16 bg-white" style={{ marginLeft: '35%' }}>
                <p class="font-poppins text-3xl font-bold mx-32 pb-8" >Sign Up</p>
                <form onSubmit={handleSubmit}>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="text" onChange={handlefname} value={fname} placeholder="First Name" />
                    <p class="mx-8 text-red-600 mb-2">{fNameError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="text" onChange={handlelname} value={lname} placeholder="Last Name" />
                    <p className="mx-8 text-red-600 mb-2">{lNameError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="text" onChange={handleUser} value={userName} placeholder="User Name" />
                    <p className="mx-8 text-red-600 mb-2">{uNameError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="email" onChange={handleEmail} value={email} placeholder="Email" />
                    <p className="mx-8 text-red-600 mb-2">{emailError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="password" onChange={handlePassword} value={password} placeholder="Password" />
                    <p className="mx-8 text-red-600 mb-2">{passwordError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="number" onChange={handlePhone} value={phone} placeholder="Phone" />
                    <p className="mx-8 text-red-600 mb-2">{phoneError}</p>

                    <select className="shadow-md mx-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500" onChange={handleCountry} value={country}>
                        <option value=""> Country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>

                    <p id="error" style={{ color: 'red' }}>{countryError}</p>

                    <select className="shadow-md mx-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500" onChange={handleCity} value={city} disabled={!country}>
                        <option value="">City</option>
                        {country && cities[country].map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>

                    <p id="error" style={{ color: 'red' }}>{cityError}</p>

                    <input className="shadow-md mx-2 px-2 w-5/6 mb-4 border border-gray-600 bg-gray-100 rounded-md p-1 hover:grey-500 placeholder-black" type="number" onChange={handleAdhar} value={adhar} placeholder="Adhar Number" />
                    <p id="error" style={{ color: 'red' }}>{adharError}</p>

                    <button className="border shadow-lg rounded-md mx-32 bg-lime-400 p-2 w-1/3 mt-8 text- font-semibold" type="submit">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Form;
