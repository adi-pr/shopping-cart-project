import data from "./json/cpuProductData.json"

const CpuItemList = () => {
    return (
        <div className="flex">
            {
                data.pc_parts_cpu.map(item => (
                    <Item
                        key={item.id}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        description={item.description}
                        specs={item.specs}
                    />
                ))
            }
        </div>
    );
}

export default CpuItemList;

const Item = ({ key, brand, model, price, description, specs}) => {
    const { cores, threads, base_clock, max_turbo, cache, socket } = specs

    return ( 
        <div className="text-white p-5">
            {brand}
        </div>
     );
}
