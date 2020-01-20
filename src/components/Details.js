import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                                {/* title*/}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-dark"> 
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/*End title */}
                                {/* Product info*/}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                {/*Product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>marca : {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Fabricante : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            precio: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Descripcion:
                                    </p>
                                    <p className="text-muted lead text-justify">{info}</p>
                                    {/*Buttons */}
                                    <div className="text-center">
                                        <Link to="/">
                                        <ButtonContainer>
                                            Volver a productos
                                        </ButtonContainer>
                                        </Link>
                                        <ButtonContainer className="text-primary"
                                        cart
                                        disabled={inCart ? true :
                                        false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? "Agreado a carrito" : "Agregar al carrito"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                                </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
