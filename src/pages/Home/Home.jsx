import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
    return (
        <>
            <div className="absolute w-full">
                <Hero />
                <FeaturedProducts />
            </div>
        </>
    );
}

export default HomePage;