import React, {Component} from "react";

class CartWidget extends Component{
    render(){
        return(
            <ul class="navbar-nav d-flex">
                <li class="nav-item me-3 me-lg-2 ">
                    <a class="nav-link " href="#">
                        <i class="fas fa-shopping-cart fa-lg"></i>
                    </a>
                </li>
            </ul>
        );
    }
}
export default CartWidget;