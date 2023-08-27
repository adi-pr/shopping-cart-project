import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const StorePage = () => {
    return (
        <div id="store" className="mt-32 grid ">
            <Sidebar />
            <div className="pt-8 pr-8 mb-8 flex flex-wrap justify-between gap-5">
                <ToastContainer />
                <Outlet />
            </div>
        </div>
    );
}

export default StorePage;