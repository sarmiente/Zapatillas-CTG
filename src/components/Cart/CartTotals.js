import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubtotal,cartTax,cartTotals,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container text-right">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize"></div></div>    
                    <Link to="/">
                    <button className="btn btn-danger text-uppercase mb-3 px-5" type="button" onClick={() =>clearCart()}>Limpiar carrito</button>
                    </Link>     
                    <h5>
                    <span className="text-title">subtotal :
                    <strong> $ {cartSubtotal}</strong>
                    </span>
                    </h5>       
                    <h5>
                    <span className="text-title">impuesto :
                    <strong> $ {cartTax}</strong>
                    </span>
                    </h5>       
                    <h5>
                    <span className="text-title">total :
                    <strong> $ {cartTotals}</strong>
                    </span>
                    </h5>       
            </div>
        </React.Fragment>
    
    );
}
