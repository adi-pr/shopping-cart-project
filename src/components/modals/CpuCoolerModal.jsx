import { motion as m } from "framer-motion";

const Modal = ({ toggleModal, description, compatibility, type, cfm }) => {
    return (
        <>
            <m.section
                className="relative flex flex-col h-full gap-3 justify-between"
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
                            <li>
                                Compatibility: {compatibility}
                            </li>
                            <li>
                                Type: {type}
                            </li>
                            <li>
                                CFM: {cfm}
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <m.button
                        onClick={toggleModal}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="32" viewBox="0 -960 960 960" width="32"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" /></svg>
                    </m.button>
                </div>

            </m.section>
        </>
    );
}

export default Modal;