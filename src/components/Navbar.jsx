import {React,useState} from 'react';
import cart from '../assets/online-shopping.png'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

    return (

        <div className="flex justify-between relative items-center h-16 my-3 font-sans px-3 border-b border-gray-700 w-full">
            <div className="nav-left">
                <h1 className="font-bold text-2xl flex-1">SHOPORA</h1>
            </div>

            <div className="hidden md:flex items-center text-center gap-8 justify-center flex-1">
                <p className="border-b-2 border-b-transparent hover:border-b-black transition duration-300 ease-in-out cursor-pointer">Home</p>
                <p className="border-b-2 border-b-transparent hover:border-b-black transition duration-300 ease-in-out cursor-pointer">Categories</p>
                <p className="border-b-2 border-b-transparent hover:border-b-black transition duration-300 ease-in-out cursor-pointer">Orders</p>
            </div>


            <div className="flex gap-4 justify-end items-center relative">
                <input placeholder="Search..." className="hidden md:block border-2 border-gray-700 rounded-md p-1 h-7"/>

                <img src={cart} className="h-7 w-7 flex-none mx-2" />


                <button
                    onClick={toggleNavbar}
                    className="w-8 h-8 flex items-center justify-center"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <IoMdClose className="h-7 w-7" /> : <CiMenuBurger className="h-5 w-5 md:hidden" />}
                </button>
            </div>

            {isOpen && (

                <div className="absolute right-0 top-full translate-y-2 backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg rounded-xl p-4 z-50 min-w-[160px]">
                    <p className="py-1 cursor-pointer">Categories</p>
                    <p className="py-1 cursor-pointer">Orders</p>
                    <p className="py-1 cursor-pointer">Home</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
