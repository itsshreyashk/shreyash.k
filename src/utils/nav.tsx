import React from 'react'
import { Link } from 'react-router-dom';
const Nav: React.FC = () => {
    return (<>
        <div className="fixed bottom-0 flex w-screen justify-center z-[2] backdrop-blur-sm">
            <Link to={'/'} className='w-full transform px-4 py-2 duration-300 active:opacity-70 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> home </span>
                </button>
            </Link> {/*This is the home page tab.*/}
            <Link to={'/order'} className='w-full transform px-4 py-2 duration-300 active:opacity-70 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> shopping_bag </span>
                </button>
            </Link>
            <Link to={'/blogs'} className='w-full transform px-4 py-2 duration-300 active:opacity-70 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> book </span>
                </button>
            </Link>
            <Link to={'/info'} className='w-full transform px-4 py-2 duration-300 active:opacity-70 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> info </span>
                </button>
            </Link>
            <Link to={'/fill_form'} className='w-full transform px-4 py-2 duration-300 active:opacity-70 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> forms_apps_script </span>
                </button>
            </Link>
        </div>
    </>)
}

export default Nav;