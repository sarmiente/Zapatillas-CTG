import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                <h1 className="display-3">404</h1>
                <h1>ERROR</h1>
                <h2>Pagina no encontrada</h2>
                <h3>
                La URL que buscas
                <span className="text-danger">{this.props.location.pathname}</span>{" "}
                no existe
                </h3>

                </div>
                </div>
                
            </div>
        )
    }
}
