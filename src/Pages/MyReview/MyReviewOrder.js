import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const MyReviewOrder = ({ review, handleDelete }) => {
    const { _id, price, serviceName, services, message, photo } = review;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${services}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [services])

    return (
        <tr>

            <td
                className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium"
            >
                <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-gray-700 text-white hover:bg-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td
                className="text-dark border-b py-5 px-2 text-center text-base font-medium"
            >
                {
                    orderService?.img &&
                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                }
            </td>
            <td
                className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium"
            >
                {serviceName}
                <p>$ {price}</p>
            </td>
            <td
                className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
            >
                {message}
            </td>
            <td
                className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium"
            >
                {
                    orderService?.photo ||
                    <FaUserCircle className='w-16 h-16 mx-auto'></FaUserCircle>
                }
            </td>
            <td
                className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
            >
                <Link
                    className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                >
                    Edit
                </Link>
            </td>
        </tr>
    );
};

export default MyReviewOrder;