import { Link } from "react-router-dom"

const Sidebar = () => {
    return ( 
        <div className="p-8">
            <ul className="flex flex-col gap-4">
                <li>CPU</li>
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