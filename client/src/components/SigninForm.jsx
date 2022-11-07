import React, { useState } from 'react'
import InputForm from './InputForm';
import Button from './Button';
import { Link } from "react-router-dom";

const SigninForm = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;

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
                    <InputForm label="Email Address*" type="email" value={email} name="email" onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-5 mb-[25px]">
                    <InputForm label="Password*" type="password" value={password} name="password" onChange={handleChange} />
                </div>
                <div className="flex mt-5 mb-[47px]">
                    <input type="checkbox" className="border border-gray-400 mr-[8px]" />
                    <span className="flex justify-between">
                        <span>Remember Me </span>
                        <span className="ml-[50px]">
                            <a href="#" className="text-purple-500 font-semibold">Forget Password</a>
                        </span>
                    </span>
                </div>
                <div className="grid grid-cols-2 mb-[8px]">
                    <Button btn={"Log In"} />
                </div>
                <p>Don't have an account? <Link to="/" className="text-[#6360AB] font-semibold"> Sign Up </Link> here</p>
            </form>
        </div>
    )
}

export default SigninForm