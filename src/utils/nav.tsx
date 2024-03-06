import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Background: React.FC = () => {
    const colors = ['black']; // Define your list of background colors
    const [spreader_width, set_spreader_width] = useState(10);
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]; // Get a random color from the list
    };
    const Resize = () => {
        const sizes = [10, 20, 40, 60, 40, 20, 10];
        const currentIndex = sizes.indexOf(spreader_width);
        const nextIndex = (currentIndex + 1) % sizes.length; // Ensure cyclic loop
        set_spreader_width(sizes[nextIndex]);
    };
    setInterval(Resize, 6000);
    return (
        <div className="fixed top-0 p-1 left-0 w-screen flex justify-center">
            <div id='spreader'
                className={`w-${spreader_width} h-8 z-0 opacity-60 rounded-xl bg-[${getRandomColor()}] transition-width duration-300`}
            ></div>
        </div>

    );
};

const Nav: React.FC = () => {
    return (
        <>
            {/* Render the background component */}
            <div className="fixed top-0 w-full flex justify-center p-1 ">
                <div className="flex justify-center" id="stage">
                    <Background />
                    <div className=" w-full max-w-[800px] flex justify-center rounded-xl bg-[transparent] backdrop-blur-xl px-4 py-2 space-x-8">
                        <Link to={'/'} className='text-white hover:scale-[2] transform transition duration-200'>
                            <span className="material-symbols-outlined text-xl">home</span>
                        </Link>
                        <Link to={'/order'} className='text-white hover:scale-[2] transform transition duration-200'>
                            <span className="material-symbols-outlined text-xl">shopping_bag</span>
                        </Link>
                        <Link to={'/blogs'} className='text-white hover:scale-[2] transform transition duration-200'>
                            <span className="material-symbols-outlined text-xl">book</span>
                        </Link>
                        <Link to={'/info'} className='text-white hover:scale-[2] transform transition duration-200'>
                            <span className="material-symbols-outlined text-xl">info</span>
                        </Link>
                        <Link to={'/fill_form'} className='text-white hover:scale-[2] transform transition duration-200'>
                            <span className="material-symbols-outlined text-xl">forms_apps_script</span>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Nav;
