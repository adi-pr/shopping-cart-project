import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const StorePage = () => {
    return (
        <div className="mt-32 flex absolute w-full">
            <Sidebar />
            <div className="my-5 flex flex-wrap gap-5 justify-center">
                <ToastContainer />
                <Outlet />
            </div>
        </div>
    );
}

export default StorePage;