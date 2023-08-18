import { motion as m } from "framer-motion";

const Modal = ({ closeModal, description, specs }) => {
    const { cores, threads, base_clock, max_turbo, cache, socket } = specs

    return (
        <>
            <m.section
                className="relative flex flex-col h-full gap-3"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }} 
                transition={{
                    duration: 0.75
                }}
                exit={{
                    opacity: 0,
                }}
            >
                <div className="flex flex-col gap-5">
                    <div className="p-3 bg-gray-700 rounded-lg">
                        <h3>Description</h3>
                        <hr />
                        <p className="mt-2">
                            {description}
                        </p>
                    </div>
                    <div className="p-3 bg-gray-700 rounded-lg">
                        <h3>Specs</h3>
                        <hr />
                        <ol className="mt-2 list-disc ml-5">
                            <li>Cores: {cores}</li>
                            <li>Threads: {threads}</li>
                            <li>Base Clock: {base_clock}</li>
                            <li>Max Clock: {max_turbo}</li>
                            <li>Cache: {cache}</li>
                            <li>Socket: {socket}</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <button onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="32" viewBox="0 -960 960 960" width="32"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" /></svg>
                    </button>
                    <button>

                    </button>
                </div>

            </m.section>
        </>
    );
}

export default Modal;