import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../zapatillas.png';
import styled from 'styled-components'
import { ButtonContainer } from './Button';



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                <img src={logo} className="navbar-brand" alt="store" />
                </Link>
                <ul className="navbar-nav">
                <li className="nav-item ml-5"></li>
                <Link to="/" className="nav-link">
                    Productos disponibles
                </Link>
                </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer className="text-warning">
                <span>
                    <i className="fas fa-shopping-cart" /> 
                </span>
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.2rem;
        text-transform: uppercase !important;
    }
    .navbar-brand {
        height: 70px;
        pointer-events: none;
    }
   
@media (prefers-reduced-motion: no-preference) {
        .navbar-brand {
        animation: navbar-brand-spin infinite 20s linear;
    }
}
@keyframes navbar-brand-spin {
         from {
                transform: rotate(0deg);
        }
            to {
                transform: rotate(360deg);
    }
}
`;