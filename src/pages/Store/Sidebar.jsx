import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { motion as m, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="lg:block hidden w-1/3">
                <div className="flex  p-8 ">
                    <ul className="flex flex-col gap-4 text-lg">
                        <Link to="cpus">
                            <li>CPU</li>
                        </Link>
                        <Link to="cpu coolers">
                            <li>CPU Cooler</li>
                        </Link>
                        <li>Motherboard</li>
                        <li>Memory</li>
                        <li>Storage</li>
                        <li>Video Card</li>
                        <li>Case</li>
                        <li>
                            <div className="flex gap-1">
                                <p>Power</p>
                                <p>Supply</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden block bg-white fixed rounded-full p-1 m-3 bottom-0 right-0" onClick={toggleSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"><path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>
            {sidebarOpen ? (
                <AnimatePresence>
                    <m.div
                        className='fixed z-60 lg:hidden block'
                        initial={{ x: "-100%" }}
                        animate={{ x: "0" }}
                        exit={{ x: "-100%", opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <div
                            className="flex p-8 relative z-60 text-black bg-white w-screen h-screen "
                        >
                            <ul
                                className="flex flex-col gap-4 text-lg">
                                <Link
                                    to="cpus">
                                    <li>CPU</li>
                                </Link>
                                <Link
                                    to="cpu coolers">
                                    <li>CPU
                                        Cooler</li>
                                </Link>
                                <li>Motherboard</li>
                                <li>Memory</li>
                                <li>Storage</li>
                                <li>Video
                                    Card</li>
                                <li>Case</li>
                                <li>
                                    <div
                                        className="flex gap-1">
                                        <p>Power</p>
                                        <p>Supply</p>
                                    </div>
                                </li>
                            </ul>
                            <div
                                className="lg:hidden block bg-black fixed rounded-full p-1 m-3 top-0 right-0"
                                onClick={toggleSidebar}
                            >
                                <svg
                                    fill='white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 -960 960 960"
                                    width="24"><path
                                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                                    /></svg>
                            </div>
                        </div>
                    </m.div>
                </AnimatePresence>
            ) : null}
        </>
    );
}

export default Sidebar;