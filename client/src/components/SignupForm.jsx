import React, { useState } from 'react'
import InputForm from './InputForm';
import Button from './Button';
import { Link } from "react-router-dom";

const SignupForm = () => {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
    });

    const { fname, lname, email, phone, password } = input;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div>
            <form action="#">
            {console.log("input", input)}
                <div className="grid grid-cols-2 gap-5 mb-[24px]">
                    <InputForm label="First Name*" type="text" value={fname} name="fname" onChange={handleChange} />
                    <InputForm label="Last Name*" type="text" value={lname}name="lname" onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-5 mb-[24px]">
                    <InputForm label="Email Address*" type="email" value={email} name="email" onChange={handleChange} />
                    <InputForm label="Phone Number*" type="number" value={phone} name="phone" onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-5 mb-[25px]">
                    <InputForm label="Password*" type="password" value={password} name="password" onChange={handleChange} />
                </div>
                <div className="flex mt-5 mb-[47px]">
                    <input type="checkbox" className="border border-gray-400 mr-[8px]" />
                    <span>
                        By signing up, you agree to our <a href="#" className="text-[#6360AB] font-semibold">User Agreement</a> , <a href="#" className="text-[#6360AB] font-semibold">Terms of Use</a> &  <a href="#" className="text-[#6360AB] font-semibold">Privacy Policy</a>
                    </span>
                </div>
                <div className="grid grid-cols-2 mb-[8px]">
                    <Button btn={"Sign Up"} />
                </div>
                <p>Already have an account? <Link to="/signin" className="text-[#6360AB] font-semibold"> Log In </Link></p>
            </form>
        </div>
    )
}

export default SignupForm