import React, { useRef } from 'react'

const Nav: React.FC = () => {
    const homeButtonRef : any = useRef<HTMLButtonElement>(null);
    const shoppingButtonRef : any = useRef<HTMLButtonElement>(null);
    const infoButtonRef : any = useRef<HTMLButtonElement>(null);

    return (<>
        <div className="fixed bottom-0 flex w-screen justify-center border-t border-gray-300">
            <button ref={homeButtonRef} type="button" className="w-full transform border-r px-4 py-2 duration-300 active:bg-gray-300">
                <span className="material-symbols-outlined py-2 text-gray-600"> home </span>
            </button>
            <button ref={shoppingButtonRef} type="button" className="w-full transform border-r px-4 py-2 duration-300 active:bg-gray-300">
                <span className="material-symbols-outlined py-2 text-gray-600"> shopping_bag </span>
            </button>
            <button ref={infoButtonRef} type="button" className="w-full transform border-r px-4 py-2 duration-300 active:bg-gray-300">
                <span className="material-symbols-outlined py-2 text-gray-600"> info </span>
            </button>
        </div>
    </>)
}

export default Nav;