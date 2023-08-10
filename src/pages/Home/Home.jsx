import Blob from "./Blob";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {

    const handlePointerMove = (event) => {
        const blob = document.getElementById("blob")
        const { clientX, clientY } = event
          
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" }) 
    }

    return (
        <>
            <div className=" w-full" onPointerMove={handlePointerMove}>
                <Blob/>
                <div>
                    <Hero />
                    <FeaturedProducts />
                </div>
            </div>
        </>
    );
}

export default HomePage;