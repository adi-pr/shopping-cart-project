import { useEffect } from 'react';
import { useCart } from "../utils/CartContext";
import PropTypes from 'prop-types'

const CartPreview = ({ toggleShowCart }) => {
    const { cart } = useCart()

    useEffect(() => {
        document.body.style.overflowY = 'hidden'

        return () => {
            document.body.style.overflowY = 'auto'
        };
    }, []);


    return (
        <section className="border bg-neutral-900 absolute top-0 right-0 p-5 z-60 h-full overflow-x-hidden">
            <div className="p-10">
                <ItemList cart={cart} />
                <button onClick={toggleShowCart}>
                    Close
                </button>
            </div>
        </section>
    );
}

export default CartPreview;


const ItemList = ({ cart }) => {

    return (
        <>
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
        </>
    )
}

const Item = ({ brand, model, price, imgURL }) => {
    return ( 
        <div>
            {model}
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