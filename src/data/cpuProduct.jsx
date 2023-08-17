import data from "./json/cpuProductData.json"

const CpuItemList = () => {
    return (
        <div className="flex flex-wrap gap-y-10 justify-between">
            {
                data.pc_parts_cpu.map(item => (
                    <Item
                        key={item.id}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        description={item.description}
                        specs={item.specs}
                        imgURL={item.imgURL}
                        />
                ))
            }
        </div>
    );
}

export default CpuItemList;

const Item = ({ brand, model, price, description, specs, imgURL}) => {
    const { cores, threads, base_clock, max_turbo, cache, socket } = specs

    return ( 
        <div className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-5 w-72">
            <div className="relative">
                <img src={imgURL} alt="" />
                <div className="mt-5">
                    <p className="text-2xl">
                        {model}
                    </p>
                    <p className="text-gray-400 mt-2">
                        {brand}
                    </p>

                    <p className="absolute italic bottom-0 right-0 ">
                        {price}
                    </p>
                </div>
            </div>
        </div>
     );
}
