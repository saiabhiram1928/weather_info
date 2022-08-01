import React from 'react'
import SearchBar from './Search_bar'

const Header = () => {
    return (
        <div><header class="text-gray-600 body-font ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span class="ml-3 text-xl border-b-2 border-black border-separate">Weather Finding</span>
                   

                </a>
                <SearchBar/>
            </div>
        
        </header></div>
    )
}

export default Header