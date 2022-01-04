import React from 'react'

const Bookedmodal = ({setModal}) => {
    return (
        <div
            className="bg-black top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center fixed xl:max-w-lg xl:shadow-lg xl:mx-auto xl:p-10 "
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="bg-white w-96  py-4 rounded-lg shadow-lg mx-auto">
                <p className="font-bold text-2xl">Booked</p>
                <p className="font-light text-md">
                    The Confirmation email has been sent to your email
                </p>
                <hr />
                <p className="font-bold text-xl cursor-pointer mt-2" onClick={()=>setModal(false)}>OK</p>
            </div>
        </div>
    );
}

export default Bookedmodal
