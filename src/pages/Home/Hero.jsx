import "./index.css"

const Hero = () => {
    return (
        <div className="absolute hero-container w-full h-screen bg-no-repeat bg-top z-40 ">
            <div>
                <img
                    className="absolute w-full h-screen opacity-50"
                    src="src/assets/Hero.jpg"
                    alt="Hero Img" />
            </div>
            <div>
                <div className="relative pt-40 pl-40 ml-1 mb-20 ">
                    <div className="hero-text bottom-0 text-5xl">
                        <span>Your Gateway to</span>
                        <br />
                        <span>High-Performance PC Parts</span>
                    </div>
                    <div className="hero-text delayed py-3 ">
                        <p>
                            <i>Unleash the Power of Custom-Built PCs</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;