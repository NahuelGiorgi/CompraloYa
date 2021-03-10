import React, {Component} from "react";

class CartWidget extends Component{
    render(){
        return(
            <ul className="navbar-nav d-flex">
                <li className="nav-item me-3 me-lg-2 ">
                    <a className="nav-link " href="#">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                    </a>
                </li>
            </ul>
        );
    }
}
export default CartWidget;