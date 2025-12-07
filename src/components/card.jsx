import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Card = ({products}) => {

    
    return (
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 p-6 ">
            {products.map((p) => (

                <div className=" pb-5 flex-col">
                    <div className="relative">
                        <img src={p.images} className="rounded-2xl"/>

                    </div>
                    <p className="font-bold text-xs py-2 pl-2 md:text-xl">{p.title}</p>
                    <p className="font-semibold pl-2 pb-2">${p.price}</p>
                    <button className=" ml-2 rounded-xl text-xs border-2 border-black p-1 hover:bg-gray-300 cursor-pointer">add to cart</button>
                </div>
            ))}
        </div>
    );
};

export default Card;