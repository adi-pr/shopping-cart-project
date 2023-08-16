import { Link } from "react-router-dom"

const Sidebar = () => {
    return ( 
        <div className="flex p-8">
            <ul className="flex flex-col gap-4">
                <Link to="cpus">
                    <li>CPU</li>
                </Link>
                <li>CPU Cooler</li>
                <li>Motherboard</li>
                <li>Memory</li>
                <li>Storage</li>
                <li>Video Card</li>
                <li>Case</li>
                <li>Power Supply</li>
            </ul>
            
        </div>
     );
}
 
export default Sidebar;