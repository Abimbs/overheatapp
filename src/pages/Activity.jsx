import React, {useState} from 'react'
import { useAuth } from '../componets/Context'
import { Link } from 'react-router-dom'
import profile from "../images/Ellipse 1.png";
import todobutton from "../images/todoButton.png";


const Activity = () => {
    const [index, setIndex] = useState(1)

   

    const dateArr = [
        {
            id: 1,
            number: 21,
            text:"Today"
        },
        {
            id: 2,
            number: 22,
            text:"Mon"
        },
        {
            id:3,
            number: 23,
            text:"Tue"
        },
        {
            id: 4,
            number: 24,
            text:"Wed"
        },
        {
            id: 5,
            number: 25,
            text:"Thur"
        },
        {
            id: 6,
            number: 26,
            text:"Fri"
        },
        {
            id: 7,
            number: 27,
            text:"Sat"
        },
        // {
        //     id: 1,
        //     number: 21,
        //     text:"Today"
        // },
    ]
    const { dashboard, todoComplete, addTodo,  valuehandler } =
        useAuth();
    
    console.log(dashboard)
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
                <p className="text-4xl font-bold my-6">Checklist</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2 my-6">
                <p className="text-xl font-semibold mb-3 underline">
                    November 2021
                </p>
                <div className="flex  justify-between ">
                    {dateArr.map((item) => (
                        <div
                            className={
                                index === item.id
                                    ? "bg-purple text-white text-center shadow-lg rounded-lg px-2 py-1"
                                    : "text-purple40 font-bold text-center"
                            }
                            key={item.id}
                            onClick={() => setIndex(item.id)}
                        >
                            <p>{item.text}</p>
                            <p>{item.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full  bg-white flex  rounded-lg my-3 px-2 ">
                <form onSubmit={addTodo}>
                    <input
                        className="w-full outline-none p-2"
                        placeholder="Add an activity.........."
                        onChange={valuehandler}
                    />
                </form>
            </div>
            {dashboard.map((item) => (
                <div
                    key={item.id}
                    className="min-w-fit w-full  flex bp-2 bg-white px-4 py-3 my-2 rounded-xl"
                    onClick={() => todoComplete(item.id)}
                >
                    <div className="">
                        <div className="bg-purple40 rounded-full h-6 w-6 ">
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
                    <img
                        src={todobutton}
                        alt="button sort"
                        className="ml-auto"
                    />
                </div>
            ))}

            <div className="bg-purple h-10 w-10 rounded-full flex justify-center  items-center mx-auto mt-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    onClick={addTodo}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Activity
