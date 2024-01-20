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
        </div>
    </>)
}

const TrackOrder: React.FC = () => {
    const [trackStatus] = useState([
        {
            "title": "Go to the Google form.",
            "description": "Fill up the Google Forms to initiate process. See the Plans and choose accordingly."
        },
        {
            "title": "Submit the Form.",
            "description": "Submit the form so that we can get what you want."
        }
    ]);
    return (
        <div className="w-screen fixed bottom-0 flex justify-center bg-[transparent] z-[5]">
            <div className=" animation_01 px-4 max-w-[500px] resize-y py-2 rounded-t-xl bg-[transparent] backdrop-blur-xl shadow-xl border border-gray-200 w-full h-[max-content]">
                <div className="w-full flex justify-center pb-2">
                    <div className="w-10 py-1 rounded-full bg-gray-600"></div>
                </div>
                <div className="w-full rounded-xl border border-gray-700 overflow-hidden">
                    {trackStatus.map((element: any, index: number) => (
                        <div key={index} className="card cursor-pointer px-4 py-2 w-full bg-white border-b hover:bg-gray-200 transition duration-300">
                            <span id="title" className="font-bold text-xl">{element.title}</span><br />
                            <span id="info" className="text-sm text-gray-600">{element.description}</span>
                        </div>
                    ))}
                </div>
                <PlaceOrder /> {/* Using the PlaceOrder component here */}
            </div>
        </div>
    );
}
export { PlaceOrderButton, Impress, TrackOrder };
