import { Routes, Route } from "react-router-dom";
import CpuItemList from "../../data/cpuProduct";

const Content = () => {
    return ( 
        <div className="p-8">
            <CpuItemList />
        </div>
     );
}
 
export default Content;