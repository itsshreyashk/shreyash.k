import React, { useState } from "react";

const PlaceOrderButton: React.FC = () => {
    return (
        <button className="px-3 py-1 bg-blue-500 rounded-full top-4 fixed right-4 text-white text-sm hover:bg-blue-600">
            Place Order
        </button>
    );
}

const Impress: React.FC = () => {
    return (<>
        <div className="text-center px-7 py-[30vh] border-b border-gray-300">
            <span className="font-bold text-4xl" id="pro-1">
                Order Websites Like never Before.
            </span>
        </div>
    </>);
}

const PlaceOrder: React.FC = () => {
    return (<>
    <div className="w-full py-4 space-y-1">
        <button className="w-full px-4 py-2 text-sm active:bg-blue-800 bg-blue-600 text-white rounded-full">Place Order</button>
        <button className="w-full px-4 py-2 text-sm active:bg-green-800 bg-green-600 text-white rounded-full">Connect</button>
        <button className="w-full px-4 py-2 border-red-400 border text-sm active:bg-gray-400 bg-[transparent] text-gray-800 rounded-full">Request Cancellation</button>
    </div>
    </>)
}

const TrackOrder: React.FC = () => {
    const [trackStatus, setTrackStatus] = useState([
        {
            "title": "Welcome!",
            "description": "Place an order and login to view status."
        },
    ]);

    return (
        <div className="fixed animation_01 bottom-0 px-4 resize-y py-2 rounded-t-xl bg-[transparent] backdrop-blur-xl border-t border-gray-700 w-screen z-[5] h-[max-content]">
            <div className="w-full flex justify-center pb-2">
                <div className="w-10 py-1 rounded-full bg-gray-600"></div>
            </div>
            <div className="w-full rounded-xl border border-gray-700 overflow-hidden">
                {trackStatus.map((element: any, index: number) => (
                    <div key={index} className="card px-4 py-2 w-full bg-white border-b active:bg-gray-200 transition duration-300">
                        <span id="title" className="font-bold text-xl">{element.title}</span><br />
                        <span id="info" className="text-sm text-gray-600">{element.description}</span>
                    </div>
                ))}
            </div>
            <PlaceOrder /> {/* Using the PlaceOrder component here */}
        </div>
    );
}
export { PlaceOrderButton, Impress, TrackOrder };
