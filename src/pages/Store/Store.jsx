import Content from "./Content";
import Sidebar from "./Sidebar";
import './index.css'

const StorePage = () => {
    return (
        <div id="store" className="mt-32 grid">
            <Sidebar />
            <Content />
        </div>
    );
}

export default StorePage;