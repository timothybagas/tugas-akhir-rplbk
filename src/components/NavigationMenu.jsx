import React from "react";

export default function NavigationMenu({ children, isActive, onClick }) {
    const style = isActive ? 
        "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        :
        "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"; 
    return (
        <li>
            <button 
                type="button"
                className={style}
                aria-current="page"
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}