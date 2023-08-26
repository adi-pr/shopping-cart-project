import { useEffect } from 'react';
import { useCart } from "../utils/CartContext";
import { motion as m } from 'framer-motion';
import PropTypes from 'prop-types'
import './cartPreview.css'


const CartPreview = ({ toggleShowCart }) => {
    const { cart } = useCart()

    const roundedPrice = cart.totalPrice.toFixed(2)

    useEffect(() => {
        document.body.style.overflowY = 'hidden'

        return () => {
            document.body.style.overflowY = 'auto'
        };
    }, []);

    const container = {
        initial: {
            x: '100%'
        },
        animate: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delayChildren: 0.5
            },
        },
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center cursor-pointer z-60' onClick={toggleShowCart}/>
            <m.section
                className="rounded-l-xl bg-neutral-900 w-96 fixed top-0 right-0 z-60 h-full overflow-x-hidden"
                variants={container}
                initial='initial'
                animate='animate'
            >
                <m.div
                    variants={item}
                    className='flex flex-col'
                >
                    <div className='sticky flex justify-between p-5 mb-1 bg-neutral-800 top-0 z-60 w-full'>
                        <p className='text-2xl'>
                            {cart.totalItems} Items
                        </p>
                        <button onClick={toggleShowCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="32" viewBox="0 -960 960 960" width="32"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                        </button>
                    </div>
                    <ItemList cart={cart} />
                    <div className='sticky w-full bg-neutral-800 bottom-0 p-5'>
                        <p>
                            Total: ${roundedPrice}
                        </p>
                    </div>
                </m.div>
            </m.section>
        </>
    );
}

export default CartPreview;


const ItemList = ({ cart }) => {

    return (
        <main className='flex flex-col gap-3 px-5 my-5 h-full'>
            {
                cart.items.map(item => (
                    <Item
                        key={item.id}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        imgURL={item.imgURL}
                    />
                ))
            }
        </main>
    )
}

const Item = ({ brand, model, price, imgURL }) => {
    return (
        <div
            className='bg-gray-700 p-5 rounded-lg'
        >
            <div
                className='relative flex gap-5'
            >
                <div className='p-2 rounded-lg bg-white'>
                    <img
                        className='h-w-28 w-28'
                        src={imgURL}
                        alt={model}
                        loading='lazy'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <p>
                        {brand}
                    </p>
                    <p>
                        {model}
                    </p>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <p>
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
}

CartPreview.propTypes = {
    toggleShowCart: PropTypes.func.isRequired
}

ItemList.propTypes = {
    cart: PropTypes.object.isRequired
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired
}