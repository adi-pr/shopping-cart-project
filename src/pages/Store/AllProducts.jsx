import CpuItemList from "../../data/CpuProduct";
import CpuCoolerItemList from "../../data/CpuCoolerProduct";

const AllProducts = () => {
    return ( 
        <div className="flex flex-wrap gap-y-10 gap-5 justify-center">
            <CpuItemList />
            <CpuCoolerItemList />
        </div>
     );
}
 
export default AllProducts;