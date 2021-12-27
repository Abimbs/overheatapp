import React from 'react'
import hearrate from '../images/heartrate.png'
import profile from "../images/Ellipse 1.png";
import { Link } from 'react-router-dom';


const data = [
    {
        id:1,
        number: "108bm",
        date:" 10 Dec/ 11:32am"
    },
    {
        id:2,
        number: "100bm",
        date:" 9 Dec/ 01:11am"
    },
    {
        id:3,
        number: "190bm",
        date:" 8 Dec/ 10:22am"
    },
    {
        id:4,
        number: "95bm",
        date:" 7 Dec/ 08:30am"
    },
    {
        id:5,
        number: "108bm",
        date:" 6 Dec/ 12:12am"
    },
]


const HeartRate = () => {
    return (
        <div className="py-10 h-full">
            <div className="flex justify-between">
                <Link to="/dashboard">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </Link>
                <img src={profile} alt="profile" className="ml-auto" />
            </div>
            <div className=" text-textpurple">
                <p className="text-4xl font-bold my-6">Heart Rate Log</p>
                <p className="text-xl font-semibold mb-3 underline">
                    December 4-10
                </p>
            </div>

            <div className="bg-white rounded-lg p-4">
                <img src={hearrate} alt="heartrate" />
            </div>

            <div className="mt-8">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="px-2 py-3 flex justify-between bg-white rounded-lg my-2"
                    >
                        <p>{item.number}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeartRate
