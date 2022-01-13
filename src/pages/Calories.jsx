import React from "react";
import calories from "../images/calorieslog.png";
import fire from "../images/fire.png";
import profile from "../images/Ellipse 1.png";
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        number: "Weekly goal",
        date: " 14000",
    },
    {
        id: 2,
        number: "Daily average",
        date: " 1749",
    },
    {
        id: 3,
        number: "Daily average under weekly goal",
        date: " 1751",
    },
];

const foodData = [
    {
        id: 1,
        per: "22.8 %",
        text:"Breakfast"
    },
    {
        id: 2,
        per: "30.2 %",
        text:"Lunch"
    },
    {
        id: 3,
        per: "15.1 %",
        text:"Dinner"
    },
    {
        id: 4,
        per: "31.9%",
        text:"Snacks"
    },
]

const Calories = () => {
    return (
        <div className="py-10 h-full xl:max-w-6xl xl:shadow-lg xl:mx-auto xl:p-10 bg-purple40 ">
            <div className="flex justify-between">
                <Link to="/">
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
                <div className="flex gap-4">
                    <p className="text-4xl font-bold my-6">Calories Log</p>

                    <img
                        src={fire}
                        alt="wave"
                        className="w-10 self-center h-10"
                    />
                </div>
                <p className="text-xl font-semibold mb-3 underline">
                    December 4-10
                </p>
            </div>

            <div className="bg-white xl:bg-none rounded-lg p-4 flex justify-center items-center">
                <img src={calories} alt="Calories" />
            </div>

            <div className="mt-8 flex justify-between px-2 py-3  bg-white rounded-lg my-2">
                {foodData.map((item) => (
                    <div key={item.id}>
                        <p
                            className={
                                item.id === 1 || item.id === 3
                                    ? " text-green-400 text-center font-semibold"
                                    : item.id === 2
                                    ? "text-purple font-semibold"
                                    : item.id === 4
                                    ? "text-red-400 font-semibold"
                                    : ""
                            }
                        >
                            {item.per}
                        </p>
                        <p>{item.text}</p>
                    </div>
                ))}
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
};

export default Calories;
