import React from 'react'
import { Link } from 'react-router-dom';
const Nav: React.FC = () => {
    return (<>
        <div className="fixed bottom-0 flex w-screen justify-center border-t border-gray-300 z-[2]">
            <Link to={'/'} className='w-full transform border-r px-4 py-2 duration-300 hover:bg-gray-300 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> home </span>
                </button>
            </Link>
            <Link to={'/order'} className='w-full transform border-r px-4 py-2 duration-300 hover:bg-gray-300 text-center'>
                <button type="button" className="">
                    <span className="material-symbols-outlined py-2 text-gray-600"> shopping_bag </span>
                </button>
            </Link>

            <button type="button" className="w-full transform border-r px-4 py-2 duration-300 hover:bg-gray-300">
                <span className="material-symbols-outlined py-2 text-gray-600"> info </span>
            </button>
        </div>
    </>)
}

export default Nav;