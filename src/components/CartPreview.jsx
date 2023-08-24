import { useCart } from "../utils/CartContext";

const CartPreview = ({ toggleShowCart }) => {
    const { cart } = useCart()



    return ( 
        <section className="border bg-neutral-900 absolute top-0 right-0 p-5 z-50 h-full">
            <div>
                Hello
                <button onClick={toggleShowCart}>
                    Close
                </button>
            </div>
        </section>
     );
}
 
export default CartPreview;