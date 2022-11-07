import React from 'react'
import BgImg from '../images/Rectangle.png';
import Cover from '../images/Group.png';
import Headings from '../components/Headings';
import Subheadings from '../components/Subheadings';
import SigninForm from '../components/SigninForm';

const SigninPage = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="lg:max-w-[512px] w-full h-full flex flex-col" style={{ backgroundImage: `url(${BgImg})` }}>
                <div className="items-center justify-center pt-[128px] px-[72px] bg-no-repeat bg-cover bg-center">
                    <h1 className="text-white text-[56px] font-manrope font-bold mb-[38px] leading-none">Welcome to Rsquare.</h1>
                    <p className="text-white text-[14px] font-manrope font-medium">Lets get you all set up so start with your account and begin setting up your profile.</p>
                </div>
                <div className="overflow-hidden">
                    <img className='object-cover' src={Cover} alt="" />
                </div>
            </div>
            <div className="w-full lg:w-2/3 pt-[128px] py-auto px-[111px] ">
                <Headings heading={"Welcome back!"} />
                <Subheadings para={"Please Enter your details"} />
                <SigninForm />
            </div>
        </div>
    )
}

export default SigninPage