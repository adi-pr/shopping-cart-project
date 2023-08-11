import "./blob.css"

const Blob = ({ handlePointerMove }) => {

    return (
        <>
            <div
                id="blob"
                className="absolute z-10 bg-white h-96 aspect-square left-1/2 top-1/2 rounded-1/2"
                onPointerMove={handlePointerMove}
            >
            </div>

            <div
                id="blur"
                className="h-screen w-screen absolute z-20"
            >
            </div>

        </>
    );
}

export default Blob;