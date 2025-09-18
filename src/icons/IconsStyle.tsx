import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const IconsStyle = () => {
    const listRef = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        if (listRef.current) {
        gsap.fromTo(listRef.current.children, 
        {
            x:-100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.25,
            ease: "power4.inOut",
        }
    );
        }
    }, []);
    
    return (
        <ul className="w-64 flex flex-col gap-1 pl-1" ref={listRef}>
            {/* Instagram */}
            <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-gray-800 transition-all duration-500 hover:w-40 hover:border-gray-700 hover:shadow-lg">
                <a 
                href="https://www.instagram.com/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-pink-400 transition-all active:scale-95"
                >
                <div className="rounded-lg border-2 border-pink-500/40 bg-pink-500/10 p-1">
                    {/* Instagram Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/>
                    </svg>
                </div>
                <div className="font-semibold text-gray-100">Instagram</div>
                </a>
            </li>

            {/* LinkedIn */}
            <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-gray-800 transition-all duration-500 hover:w-40 hover:border-gray-700 hover:shadow-lg">
                <a 
                href="https://www.linkedin.com/in/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-blue-400 transition-all active:scale-95"
                >
                <div className="rounded-lg border-2 border-blue-500/40 bg-blue-500/10 p-1">
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.9 1.8-1.85 3.7-1.85 4 0 4.75 2.65 4.75 6.1V21H18v-5.2c0-1.25-.02-2.85-1.75-2.85-1.75 0-2.02 1.35-2.02 2.75V21H11V9z"/>
                    </svg>
                </div>
                <div className="font-semibold text-gray-100">LinkedIn</div>
                </a>
            </li>

            {/* GitHub */}
            <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-gray-800 transition-all duration-500 hover:w-40 hover:border-gray-700 hover:shadow-lg">
                <a 
                href="https://github.com/moad-cod" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-gray-300 transition-all active:scale-95"
                >
                <div className="rounded-lg border-2 border-gray-400/40 bg-gray-500/10 p-1">
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.53-1.35-1.3-1.71-1.3-1.71-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.65-5.49 5.95.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="font-semibold text-gray-100">GitHub</div>
                </a>
            </li>

            {/* Twitter (X) */}
            <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-gray-800 transition-all duration-500 hover:w-40 hover:border-gray-700 hover:shadow-lg">
                <a 
                href="https://twitter.com/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-cyan-400 transition-all active:scale-95"
                >
                <div className="rounded-lg border-2 border-cyan-500/40 bg-cyan-500/10 p-1">
                    {/* Twitter/X Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M4.5 3h4.8l3.1 4.6L15.4 3H20l-6.2 8.2L20.5 21h-4.8l-3.6-5.2L8 21H3.5l6.7-9z"/>
                    </svg>
                </div>
                <div className="font-semibold text-gray-100">X</div>
                </a>
            </li>
        </ul>
  )
}

export default IconsStyle
