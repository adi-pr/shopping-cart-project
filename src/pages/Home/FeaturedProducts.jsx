import Button from "../../components/ui/Button";

const FeaturedProducts = () => {
    return (
        <div className="relative ">
            <div className="">
                <h2 className="pl-40 pt-14 text-5xl">
                    Featured Products
                </h2>
                <div className="flex justify-center mx-40 items-center">
                    <div className="w-96 mr-2">
                        <img
                            src="https://www.amd.com/content/dam/amd/en/images/products/1933200-amd-ryzen-vcache-7-9.jpg"
                            alt="AMD Ryzen Processors"
                        />
                        <div>
                            <p className="text-2xl">
                                Cutting-Edge Processors
                            </p>
                            <Button content={"Shop Now"} />

                        </div>
                    </div>
                    <div className="w-96 mx-12">
                        <img
                            src="https://cdn.wccftech.com/wp-content/uploads/2022/05/RTX_3090_Ti_Render-scaled-very_compressed-scale-4_00x-scaled.jpg"
                            alt=""
                        />
                        <p className="text-2xl pt-5">
                            High-Performance Graphics Cards
                        </p>
                    </div>
                    <div className="w-96">
                        <img
                            className="transf"
                            src="https://wallpapercave.com/wp/wp5861928.jpg"
                            alt=""
                        />
                        <p className="text-2xl pt-6">
                                Build Your Custom PC Today
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;