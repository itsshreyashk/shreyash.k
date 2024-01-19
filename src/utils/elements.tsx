import React from "react";

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

export { PlaceOrderButton, Impress };
