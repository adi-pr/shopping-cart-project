import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div className="lg:block hidden w-1/3">
                <div className="flex p-8 ">
                    <ul className="flex flex-col gap-4">
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
            <div className="lg:hidden block bg-white fixed rounded-full p-1 m-3 bottom-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"><path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>
        </>
    );
}

export default Sidebar;