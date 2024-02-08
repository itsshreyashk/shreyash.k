import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const PlaceOrderButton: React.FC = () => {

    const handleOpen = () => {
        const resizableDiv: any = document.getElementById('resizable');
        const removable = document.getElementById('removable');
        if (resizableDiv && removable) {
            resizableDiv.style.display = 'block'; // or any other suitable value, like 'flex' or 'grid'
            removable.style.display = 'flex'; // or any other suitable value, like 'flex' or 'grid'
        }
    };

    return (
        <button type="button" className="px-3 py-1 bg-blue-500 rounded-full top-4 fixed right-4 text-white text-sm hover:bg-blue-600" onClick={handleOpen}>
            Place Order
        </button>
    );
}

//Main code to display here...
const Impress: React.FC = () => {
    return (<>
        <div className="text-center px-4 py-[250px] bg-black border-b border-gray-300">
            <span className="font-bold text-7xl text-white text-anim" id="pro-2">
                Order Websites Like never Before.
            </span>
        </div>
        <div className="bg-white text-center py-[500px]">
            <span className="text-black text-5xl" id="pro-2">Get your website with a speedy, scalable and secure tech encoding with every bit made of unravelling experience.</span>
        </div>
        <div className="px-2 py-8 text-center border-t">
            <span id="pro-2" className="text-3xl">Stack that defines.</span>
            <TechStackTable />
        </div>
        <Pricing />
        <div className="pt-[500px] pb-[80px] text-center">
            <span id="pro-3" className="text-7xl tracking-tight">Just do <span className="text-red-600">it.</span> </span>
        </div>
    </>);
}

const PlaceOrder: React.FC = () => {
    return (<>
        <div className="w-full py-4 space-y-1">
            <Link to={'/fill_form'}>
                <button className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-700 transition duration-300 ease-in-out">Place Order</button>
            </Link>
            <button className="w-full px-4 py-2 text-sm bg-green-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 hover:bg-green-700 transition duration-300 ease-in-out">Connect</button>
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
        const removable = document.getElementById('removable');
        if (resizableDiv && removable) {
            resizableDiv.style.display = 'none';
            removable.style.display = 'none';
        }
    };

    return (
        <div id="removable" className="w-screen fixed bottom-0 pb-20 p-2 flex justify-center bg-[transparent] z-[5]" style={{ pointerEvents: 'none' }}>
            <div id="resizable" className=" animation_01 px-4 max-w-[500px] resize-y py-2 rounded-2xl bg-[transparent] backdrop-blur-xl shadow-xl border border-gray-200 w-full h-[max-content] hidden" style={{ pointerEvents: 'auto' }}>
                <div className="w-full flex justify-end pb-2 space-x-1">
                    <div className="p-2 w-1 rounded-full bg-green-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>
                    <div className="p-2 w-1 rounded-full bg-yellow-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>
                    <div className="p-2 w-1 rounded-full bg-red-600 cursor-pointer" onClick={handleClose} ref={closeTrack}></div>

                </div>
                <div className="w-full rounded-xl border border-gray-200 overflow-hidden">
                    {trackStatus.map((element: any, index: number) => (
                        <div key={index} className="card cursor-pointer px-4 py-2 w-full bg-white border-b hover:bg-gray-200 transition duration-300">
                            <span id="title" className="font-bold text-xl">{element.title}</span><br />
                            <span id="infom" className="text-sm text-gray-600">{element.description}</span>
                        </div>
                    ))}
                </div>
                <PlaceOrder /> {/* Using the PlaceOrder component here */}
            </div>
        </div>
    );
}
const Intro: React.FC = () => {
    const makeInit = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (makeInit.current) {
                makeInit.current.style.display = "none";
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div ref={makeInit} className="flex items-center justify-center h-screen fixed top-0 bg-transparent w-screen z-[7] anim-45">
                {/* Add your content here */}
            </div>
        </>
    );
}

interface ShowInfoProps {
    inputValue: string;
}



const ShowInfo: React.FC<ShowInfoProps> = ({ inputValue }) => {
    return (
        <div
            id="info"
            className="max-w-[40vw] w-[max-content] min-w-[190px] bg-blue-600 h-[max-content] fixed top-1 left-1 px-4 py-2 rounded-2xl rounded-tl-sm"
        >
            <span className="text-white text-sm">
                {inputValue}
            </span>
        </div>
    );
};
//Tech stack
const TechStackTable: React.FC = () => {
    return (
        <div className="w-full mx-auto my-8 bg-white shadow-md overflow-scroll no_scrollbar rounded-lg">
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Genre
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Technology
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Frontend
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                React
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">React is a popular framework for current day trendy web applications.</div>
                        </td>
                    </tr>
                    {/* Add more rows for additional technologies */}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Backend
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                NodeJS / Flask
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">NodeJS and Flask power the backend efficiently, with NodeJS excelling in scalability and Flask offering flexibility in a lightweight package.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Serverless
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                Firebase
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Firebase is developed by Google, popular for building serverless applications.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Design
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                Tailwind CSS
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Tailwind CSS makes it easier to design large-scale applications.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Deployment
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                AWS / Firebase / Linode
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Linode servers good for scalable apps.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                CMS
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                Strapi
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Strapi is a good open-source CMS provider.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Containerization
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                Docker
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Docker Provides easy containerization.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Real-time <abbr title="communication">comm.</abbr>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                SocketIO
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">Real-time bidirectional event-based communication.</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


const Pricing: React.FC = () => {
    return (<>
        <div className="py-8 px-2 text-center">
            <h1 id="pro-2" className="text-4xl">Pricing</h1>
            <PricingTable />
            <div className="py-2">
                <span className="text-gray-500 text-sm">*Disclaimer : The pricing above does not include GST charges. The charges above are not negotiable. <span className="text-gray-800 fontb-bold">Charges are low because the launch is new. Contact for further information.</span></span>
            </div>
        </div>
    </>)
}


const PricingTable: React.FC = () => {
    return (<>
        <div className="w-full mx-auto my-8 bg-white shadow-md overflow-scroll no_scrollbar rounded-lg">

            <table className="min-w-full divide-y divide-gray-100 mt-6">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Task
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Pricing
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Deployment
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                $10 to $20 + Cloud Charges
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Bug Fixing
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                $12 to $30
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Building
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                $20 per hr.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Kickoff fee
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                20% to 30% of overall cost <abbr title="Not including the cost of Deployment providers." className="text-black">info.</abbr>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-800">
                                Suggestions
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-500">
                                Free to $5
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}


const Cookies: React.FC = () => {
    return (
        <>
        </>
    );
};

export { PlaceOrderButton, Impress, TrackOrder, Intro, ShowInfo, Cookies };