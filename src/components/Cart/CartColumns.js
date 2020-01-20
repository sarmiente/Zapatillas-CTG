import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid py-2 text-center d-none d-lg-block"> 
                <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Productos</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">nombre de producto</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">precio</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">cantidad</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quitar</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        )
    }
}
