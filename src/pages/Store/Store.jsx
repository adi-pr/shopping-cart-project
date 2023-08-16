import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import './index.css'

const StorePage = () => {
    return (
        <div id="store" className="mt-32 grid">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default StorePage;