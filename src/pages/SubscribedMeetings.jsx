import React from "react";
import { useLocation, Link } from "react-router-dom";
import profile from "../images/Ellipse 1.png";
import speak from "../images/speak.png";
import PrimaryButton from "../componets/PrimaryButton";

const SubscribedMeetings = () => {
    const location = useLocation();
    const item = location.state;

    return (
        <div className="py-10 h-full">
            <div className="flex justify-between">
                <Link to="/support">
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
            <div className="flex gap-4 text-textpurple mb-3 ">
                <p className="text-2xl font-semibold">Meeting Details</p>
                <img src={speak} alt="wave" className="w-10  h-10 " />
            </div>
            {Object.values(item).map((item, index) => (
                <div key={item.id}>
                    <img src={item.image} alt="item.pic" />
                    <div key={index}>
                        <p className="my-4 text-xl font-bold">{item.title}</p>
                        <p className="mt-3">
                            <span className="font-semibold">Location</span>:{" "}
                            {item.location}
                        </p>
                        <p className="mt-3">
                            <span className="font-semibold">Time zone</span>:{" "}
                            {item.timeZone}
                        </p>
                        <p className="mt-3">
                            <span className="font-semibold">Date</span>:{" "}
                            {item.date} /{item.time}
                        </p>
                        <p className="mt-3">
                            <span className="font-semibold">Language</span>:{" "}
                            {item.language}
                        </p>
                        <p className="mt-3">
                            <span className="font-semibold">Topic</span>:{" "}
                            {item.Topic}
                        </p>
                    </div>
                </div>
            ))}
            <div>
                <p className="text-textpurple text-xl font-bold mt-5 ">
                    Summary:
                </p>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda minus sequi id eos maiores, possimus obcaecati
                    dignissimos delectus perspiciatis perferendis? Corrupti
                    dolore, facere id repellat autem atque veniam sint officiis.
                </p>
            </div>{" "}
            <div className="mt-20">
                <PrimaryButton text="Join Via Zoom" />
            </div>
        </div>
    );
};

export default SubscribedMeetings;
