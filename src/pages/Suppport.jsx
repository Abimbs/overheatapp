import React from "react";
import profile from "../images/Ellipse 1.png";
import { Link } from "react-router-dom";
import overheat from "../images/overheat.png";
import meditation from "../images/meditation.png";
import shake from "../images/shake.png";
import sort from "../images/sort.png";

const Support = () => {
    const data = [
        {
            id: 1,
            title: "Birmingham Overeaters",
            location: "Birmingham, United Kingdom",
            timeZone: "0:00GMT",
            date: "2 December 2021",
            time:"19:20",
            language: "English",
            Topic: "Emotional Overheating",
            image:overheat
        },
        {
            id:2 ,
            title: "Meditation by Angela",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            date: "1 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:meditation
        },
        {
            id:3 ,
            title: "London Guys",
            location: "Liverpool, United Kingdom",
            timeZone: "0.00GMT",
            date: "5 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:meditation
        },
        {
            id:4 ,
            title: "Ice Cream Lovers",
            location: "Liverpool, United Kingdom",
            timeZone: "0.00GMT",
            date: "11 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:overheat
        },
        {
            id:5 ,
            title: "Quit Smoking",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            date: "16 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:meditation
        },
        {
            id:6 ,
            title: "Manchester Overeaters",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            date: "20 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:overheat
        },
        {
            id:7 ,
            title: "UK Emotional Overeaters",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            date: "6 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:meditation
        },
        {
            id:8 ,
            title: "Meditation by Angela",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            date: "14 December 2021",
            time:"22:30",
            language: "English",
            Topic:"Meditation",image:overheat
        },
       
    ];

    const subscribedMeetings = [
        {
            id: 1,
            title: "Birmingham Overeaters",

            date: "1 December 2021 / 11:30",
            participants: "58 participants",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
           
            time: "22:30",
            language: "English",
            Topic: "Meditation",
            image: overheat,
        },
        {
            id: 2,
            title: "Eu Food Addicts",

            date: "1 December 2021 / 22:30",
            participants: "58 participants",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            
            time: "22:30",
            language: "English",
            Topic: "Meditation",
            image: meditation,
        },
        {
            id: 3,
            title: "Eu Food Addicts",

            date: "1 December 2021 / 22:30",
            participants: "58 participants",
            location: "Liverpool, United Kingdom",
            timeZone: "0:00GMT",
            
            time: "22:30",
            language: "English",
            Topic: "Meditation",
            image: overheat,
        },
    ];
    return (
        <div className="py-10 h-full x  xl:max-w-lg xl:shadow-lg xl:mx-auto xl:p-10 bg-purple40  ">
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
            <div className="flex text-textpurple gap-4">
                <p className="text-4xl font-bold my-6">Support Groups</p>

                <img src={shake} alt="wave" className="w-10 self-center h-10" />
            </div>
            <p className="font-bold text-md mb-4">Subscribed meetings</p>

            <div className="flex gap-6 overflow-x-scroll overflow-hidden">
                {subscribedMeetings.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg px-4 py-2 min-w-fit w-full"
                    >
                        <Link to={`/subscribedMeetings`} state={{ item }}>
                            <p className="text-md font-bold">{item.title}</p>
                            <p className="text-sm font-semibold">{item.date}</p>
                            <p className="text-xs font-semibold">
                                {item.participants}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <div className="flex justify-between text-textpurple">
                    <p className="font-bold text-md">Upcoming meetings</p>
                    <p>12 meetings</p>
                    <img src={sort} alt="sort" />
                </div>
                <div className="w-full  bg-white flex  rounded-lg my-3 px-2 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 bg-white self-center "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input className="w-full outline-none p-2" />
                </div>
                {data.map((item) => (
                    <div key={item.id}>
                        <Link to={`/supportdetails`} state={{ item }}>
                            <div
                                key={item.id}
                                className="px-2 py-3 flex justify-between bg-white rounded-lg my-2"
                            >
                                <p className="text-sm">{item.title}</p>
                                <p className="text-sm">{item.date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Support;
