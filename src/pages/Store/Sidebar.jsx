import { Link } from "react-router-dom"

const Sidebar = () => {
    return ( 
        <div>
            <div className="flex p-8 fixed">
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
                    <li>Power Supply</li>
                </ul>
            
            </div>
        </div>
     );
}
 
export default Sidebar;