import { useEffect } from 'react';
import { useCart } from "../utils/CartContext";

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
                Hello
                <button onClick={toggleShowCart}>
                    Close
                </button>
            </div>
        </section>
    );
}

export default CartPreview; 