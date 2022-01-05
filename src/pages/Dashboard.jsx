import React from 'react'
import profile from "../images/Ellipse 1.png"
import calories from '../images/calories.png'
import water from '../images/water.png'
import weight from '../images/weight.png'
import heartrate from '../images/heart.png'
import support from '../images/support.png'
import activity from '../images/activity.png'
import hand from '../images/hand.png'
import { useAuth } from '../componets/Context'
import { Link } from 'react-router-dom'


const array1 = [
    {
        id: 1,
        image: calories,
        route: "/calories",
    },
    {
        id: 2,
        image: weight,
        route: "/weightlog",
    },
];


const array2 = [
    {
        id: 1,
        image: heartrate,
        route: "/heartrate",
    },
    {
        id: 2,
        image: water,
        route: "/waterlog",
    },
];

const array3 = [
    {
        id: 1,
        image: support,
        route:"/support"
    },
    {
        id: 2,
        image: activity,
        route:""
    },
];


const Dashboard = () => {
    const { dashboard,  todoComplete } = useAuth();

   
    
    // console.log(dashboard)
    return (
        <div className=" xl:rounded-lg h-full  mx-auto py-10 xl:max-w-lg xl:shadow-lg xl:mx-auto xl:p-10 bg-purple40 ">
            <div>
                <img src={profile} alt="profile" className="ml-auto" />
            </div>
            <div className="text-textpurple mb-6 ">
                <div className="flex gap-4">
                    <p className="text-2xl font-semibold">Good Morning </p>
                    <img
                        src={hand}
                        alt="wave"
                        className="w-10 self-center h-10"
                    />
                </div>
                <p className="font-bold mt-2 text-6xl">ANNE</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg py-5 px-4 mb-6">
                <div className="flex gap-3 mb-4">
                    <Link to="/checklist">
                        <p className="font-black my-2">Daily Checklist </p>
                    </Link>
                    <div className="bg-green-700 h-7 w-7 flex justify-center content-center rounded-md mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex gap-14 overflow-x-scroll   ">
                    {dashboard.map((item) => (
                        <div
                            key={item.id}
                            className=" bp-2  px-4 py-3 my-2 whitespace-nowrap min-w-fit w-full rounded-full flex  bg-purple40 p-2"
                            onClick={() => todoComplete(item.id)}
                        >
                            <div className="">
                                <div className="bg-white rounded-full h-6 w-6 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={
                                            item.completed === true
                                                ? " h-6 w-6 bg-purple rounded-full mr-2 self-center"
                                                : " mr-4 "
                                        }
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#fff"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p
                                className={
                                    item.completed === true
                                        ? " line-through ml-4"
                                        : " ml-4"
                                }
                            >
                                {item.item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>{" "}
            <div className="mx-auto xl:max-w-xl  ">
                <div className="flex">
                    {array1.map(({ id, image, route }) => (
                        <div key={id}>
                            <Link to={route}>
                                <img
                                    className=""
                                    src={image}
                                    alt="dashboard"
                                    key={id}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {array2.map(({ id, image, route }) => (
                        <div key={id}>
                            <Link to={route}>
                                <img
                                    className=""
                                    src={image}
                                    alt="dashboard"
                                    key={id}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {array3.map(({ id, image, route }) => (
                        <div key={id}>
                            <Link to={route}>
                                <img
                                    className=" "
                                    src={image}
                                    alt="dashboard"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard
