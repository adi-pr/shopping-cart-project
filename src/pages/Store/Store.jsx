import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import './index.css'

const StorePage = () => {
    return (
        <div id="store" className="mt-32 grid ">
            <Sidebar />
            <div className="pt-8 pr-8 mb-8">
                <Outlet />
            </div>
        </div>
    );
}

export default StorePage;