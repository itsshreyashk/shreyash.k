import React, { useRef, useState } from "react";

const PlaceOrderButton: React.FC = () => {

    const handleOpen = () => {
        const resizableDiv: any = document.getElementById('resizable');
        if (resizableDiv) {
            resizableDiv.style.display = 'block'; // or any other suitable value, like 'flex' or 'grid'
        }
    };

    return (
        <button type="button" className="px-3 py-1 bg-blue-500 rounded-full top-4 fixed right-4 text-white text-sm hover:bg-blue-600" onClick={handleOpen}>
            Place Order
        </button>
    );
}

const Impress: React.FC = () => {
    return (<>
        <div className="text-center px-7 py-[30vh] bg-gray-900 border-b border-gray-300">
            <span className="font-bold text-4xl text-white" id="pro-1">
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
        },
        {
            "title": "Wait for confirmation.",
            "description": "Once your order has been confirmed, you move on."

        },
        {
            "title": "Oversee Development.",
            "description": "Get to see the progress of your purchase in real-time so that it touches where you want it to be."

        },
        {
            "title": "Get your Product.",
            "description": "Submit the form so that we can get what you want."
        }
    ]);
    const closeTrack = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        const resizableDiv = document.getElementById('resizable');
        if (resizableDiv) {
            resizableDiv.style.display = 'none';
        }
    };

    return (
        <div className="w-screen fixed bottom-0 flex justify-center bg-[transparent] z-[5]">
            <div id="resizable" className=" animation_01 px-4 max-w-[500px] resize-y py-2 rounded-t-2xl bg-[transparent] backdrop-blur-xl shadow-xl border border-gray-500 w-full h-[max-content] hidden">
                <div className="w-full flex justify-end pb-2 space-x-1">
                    <div className="p-2 w-1 rounded-full bg-green-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>
                    <div className="p-2 w-1 rounded-full bg-yellow-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>
                    <div className="p-2 w-1 rounded-full bg-red-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>

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
