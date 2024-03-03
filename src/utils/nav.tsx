import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <>
            <div className="fixed top-0 w-full flex justify-center p-1 ">
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
        </>
    );
}

export default Nav;
