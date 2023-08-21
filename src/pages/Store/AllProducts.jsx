import CpuItemList from "../../data/CpuProduct";
import CpuCoolerItemList from "../../data/CpuCoolerProduct";

const AllProducts = () => {
    return ( 
        <div >
            <CpuItemList />
            <CpuCoolerItemList />
        </div>
     );
}
 
export default AllProducts;