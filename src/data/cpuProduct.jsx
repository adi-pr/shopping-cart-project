import { useState } from 'react';
import { motion as m } from 'framer-motion';
import data from "./json/cpuProductData.json"

import Modal from "../components/modals/CpuProductModal";

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

const Item = ({ brand, model, price, description, specs, imgURL }) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-5 w-72">

                {isOpen ? (
                    <Modal closeModal={closeModal} description={description} specs={specs} />
                ) : (
                    <m.div
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
                        <div className="relative">
                            <div className="relative p-2 bg-white rounded-xl border-dashed">
                                <img
                                    className="h-64 w-auto"
                                    src={imgURL}
                                    alt={model}
                                />
                            </div>
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
                        <div>
                            <button
                                className='pt-3'
                                onClick={openModal}
                            >
                                More
                            </button>
                        </div>
                    </m.div>
                )}
            </div>
        </>
    );
}
