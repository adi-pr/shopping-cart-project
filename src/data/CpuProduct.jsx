import { useState } from 'react';
import PropTypes from 'prop-types'
import { motion as m } from 'framer-motion';
import data from "./json/cpuProductData"
import { useCart } from '../utils/CartContext';

import Modal from "../components/modals/CpuProductModal";

const CpuItemList = () => {
    const { addToCart } = useCart()

    return (
        <>
            {
                data.pc_parts_cpu.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        description={item.description}
                        specs={item.specs}
                        imgURL={item.imgURL}
                        addToCart={addToCart}
                    />
                ))
            }
        </>
    );
}

export default CpuItemList;

const Item = ({ id, brand, model, price, description, specs, imgURL, addToCart }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleAddToCart = () => {
        addToCart({
            id,
            brand,
            model,
            price,
            imgURL
        })
    }

    return (
        <>
            <div className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-5 w-72">

                {isOpen ? (
                    <Modal toggleModal={toggleModal} description={description} specs={specs} />
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
                            <div className="mt-5 ">
                                <div className='flex gap-3'>
                                    <p className="text-2xl">
                                        {model}
                                    </p>
                                    <p className="text-gray-400 mt-2">
                                        <i>{brand}</i>
                                    </p>
                                </div>
                                <div className='mt-5 flex justify-between items-center'>
                                    <div>
                                        <button
                                            className=''
                                            onClick={toggleModal}
                                        >
                                            More
                                        </button>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p>
                                            <i>${price}</i>
                                        </p>
                                        <button onClick={handleAddToCart}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="30" viewBox="0 -960 960 960" width="30"><path d="M465-613v-123H341v-60h124v-123h60v123h123v60H525v123h-60ZM289.788-80Q260-80 239-101.212q-21-21.213-21-51Q218-182 239.212-203q21.213-21 51-21Q320-224 341-202.788q21 21.213 21 51Q362-122 340.788-101q-21.213 21-51 21Zm404 0Q664-80 643-101.212q-21-21.213-21-51Q622-182 643.212-203q21.213-21 51-21Q724-224 745-202.788q21 21.213 21 51Q766-122 744.788-101q-21.213 21-51 21ZM290-287q-42 0-61.5-34t.5-69l61-111-150-319H62v-60h116l170 364h292l156-280 52 28-153 277q-9.362 16.667-24.681 25.833Q655-456 634-456H334l-62 109h494v60H290Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </m.div>
                )}
            </div>
        </>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    specs: PropTypes.object.isRequired,
    imgURL: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
  };