import React, { useState } from 'react';

const Form = () => {
    const countries = ["India", "USA", "UK"];
    const cities = {
        India: ["Delhi", "Mumbai", "Chennai"],
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
    const [adharError, setAdharError] = useState("")
    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
            setCityError("Please select the city")
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
            <center>
                <div className="form">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <p>First Name : <input type="text" onChange={handlefname} value={fname} /></p>
                        <p id="error" style={{ color: 'red' }}>{fNameError}</p>

                        <p>Last Name : <input type="text" onChange={handlelname} value={lname} /></p>
                        <p id="error" style={{ color: 'red' }}>{lNameError}</p>

                        <p>Username : <input type="text" onChange={handleUser} value={userName} /></p>
                        <p id="error" style={{ color: 'red' }}>{uNameError}</p>

                        <p>Email : <input type="email" onChange={handleEmail} value={email} /></p>
                        <p id="error" style={{ color: 'red' }}>{emailError}</p>

                        <p>Password : <input type="password" onChange={handlePassword} value={password} /></p>
                        <p id="error" style={{ color: 'red' }}>{passwordError}</p>

                        <p>Phone No. : <input type="number" onChange={handlePhone} value={phone} /></p>
                        <p id="error" style={{ color: 'red' }}>{phoneError}</p>

                        <p>
                            Country:
                            <select onChange={handleCountry} value={country}>
                                <option value=""> Select Country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </p>
                        <p id="error" style={{ color: 'red' }}>{countryError}</p>

                        <p>
                            City:
                            <select onChange={handleCity} value={city} disabled={!country}>
                                <option value="">Select City</option>
                                {country && cities[country].map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </p>
                        <p id="error" style={{ color: 'red' }}>{cityError}</p>

                        <p>Adhar Number : <input type="number" onChange={handleAdhar} value={adhar} /></p>
                        <p id="error" style={{ color: 'red' }}>{adharError}</p>

                        <button>Submit</button>
                    </form>
                </div>
            </center>
        </>
    )
}

export default Form;
