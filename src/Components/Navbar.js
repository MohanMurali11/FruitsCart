import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {

    const cartCount = useSelector((state) => state.CartReducer.cartValues.length)
    const cartPrice = useSelector((state) => state.CartReducer.totalPrice)

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="d-inline p-2 navbar-nav mx-auto">
                    <span className="btn btn-info">Cart Items: {cartCount}</span> &nbsp;
                    <span className="btn btn-info">Cart Price: {cartPrice}</span>
                </div>
            </nav>
        </div>
    )

}
export default Navbar;