import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Nav from '../utils/nav';

const Home: React.FC = () => {
    const [greeting, setGreeting] = useState("Good Morning");
    const getGreeting: any = () => {
        const currentTime: any = new Date().getHours();
        let newGreeting = "Good Morning";

        if (currentTime >= 12 && currentTime < 18) {
            newGreeting = "Good Afternoon";
        } else if (currentTime >= 18 && currentTime < 24) {
            newGreeting = "Good Evening";
        }

        setGreeting(newGreeting);
    };

    useEffect(() => {
        getGreeting();
        return () => {
        }
    }, [])

    return (<>
        <div className="p-10 text-center bg-black pt-20">
            <h1 className='text-6xl bg-gradient-to-r from-blue-100 via-blue-800 to-red-500 text-transparent bg-clip-text' id='pro-2'>{greeting},</h1>
        </div>
        <div className="bg-black">
            <Knit />
        </div>
        <div className="p-4 mx-2 rounded-xl bg-black">
            <h1 className='tetx-3xl text-white' id="pro-2">Explore Projects in Github</h1>
            <Projects />
        </div>
        <div className="py-20 flex justify-center">
            <a href="https://twitter.com/lightxcv" className="mr-4">
                <svg className="w-8 h-8 fill-current text-blue-500 hover:text-blue-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 5.44c-.84.37-1.74.62-2.68.74.96-.58 1.7-1.5 2.05-2.6-.9.53-1.9.92-2.96 1.13-.85-.9-2.06-1.46-3.4-1.46-2.58 0-4.67 2.1-4.67 4.67 0 .37.04.73.13 1.08-3.88-.2-7.31-2.05-9.62-4.87-.4.68-.63 1.47-.63 2.3 0 1.62.82 3.04 2.06 3.87-.76-.02-1.47-.23-2.1-.57v.06c0 2.26 1.6 4.14 3.72 4.57-.4.1-.82.16-1.25.16-.3 0-.6-.03-.9-.08.6 1.8 2.3 3.12 4.32 3.16-1.58 1.24-3.57 1.98-5.73 1.98-.37 0-.73-.02-1.1-.07 2 1.28 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.86-12.86v-.58c.88-.64 1.64-1.44 2.24-2.34z"></path></svg>
            </a>
            <a href="https://github.com/itsshreyashk">
                <svg className="w-8 h-8 fill-current text-gray-700 hover:text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58l-.01-2.05c-3.34.72-4.05-1.62-4.05-1.62-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.82 1.31 3.5.99.1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.41 3-.41 1.02 0 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.78.85 1.25 1.92 1.25 3.23 0 4.61-2.82 5.63-5.49 5.93.43.37.81 1.1.81 2.22l-.01 3.31c0 .32.22.7.83.58A12 12 0 0 0 12 0"></path></svg>
            </a>
        </div>
        <Nav />
    </>);
}
const Knit: React.FC = () => {
    return (<>
        <div className="max-w-full px-4 rounded-xl mb-4 py-20 bg-black px-4 mx-4">
            <span className='text-5xl font-bold text-white' id='pro-2'>{">"}Hello. I'm Shreyash Kumar. I'm working towards in building <span className="text-blue-600">powerful servers</span> and <span className="text-green-600">DevOps.</span> You can view all information and place order anytime from <Link to={'/order'} className='text-green-300 hover:underline'>here.</Link></span>
        </div>
    </>)
}

const Projects: React.FC = () => {
    const ProjectsMain: any[] = [
        {
            url: "https://github.com/itsshreyashk/Loudrooms-Actuator",
            name: "Loudrooms-Actuator",
            description: "Create and Join Chat rooms.",
            status: "public",
        },
        {
            url: "https://github.com/itsshreyashk/shreyash.k",
            name: "shreyash.k",
            description: "Official WebApp.",
            status: "public",
        },
        {
            url: "https://github.com/itsshreyashk/ConnectSturd",
            name: "ConnectSturd",
            description: "Connect to random people.",
            status: "public",
        }
    ]
    return (<>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {
                ProjectsMain.map((element, index) => (
                    <div className="bg-white border rounded px-4 py-2 cursor-pointer active:opacity-70 min-w-[max-content]" key={index}>
                        <div className="flex w-full">
                            <div className="w-full text-start">
                                <a href={`${element.url}`}>
                                    <h3 className='text-blue-600 font-bold hover:underline'>{element.name}</h3>
                                </a>
                            </div>
                            <div className="w-full flex justify-end">
                                <h3 className='text-sm border w-[max-content] px-4 rounded-full h-[max-content]'>{element.status}</h3>
                            </div>
                        </div>
                        <div className="w-full pb-10">
                            <span className='text-sm text-gray-600'>{element.description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}
export default Home;