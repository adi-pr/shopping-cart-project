import { useEffect } from 'react';
import { useCart } from "../utils/CartContext";
import { motion as m } from 'framer-motion';
import PropTypes from 'prop-types'


const CartPreview = ({ toggleShowCart }) => {
    const { cart } = useCart()

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
                className="rounded-xl bg-neutral-900 fixed top-0 right-0 p-5 z-60 h-full overflow-x-hidden"
                variants={container}
                initial='initial'
                animate='animate'
            >
                <m.div
                    variants={item}
                >
                    <ItemList cart={cart} />
                    <button onClick={toggleShowCart}>
                        Close
                    </button>
                </m.div>
            </m.section>
        </>
    );
}

export default CartPreview;


const ItemList = ({ cart }) => {

    return (
        <div className='flex flex-col gap-3'>
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
        </div>
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