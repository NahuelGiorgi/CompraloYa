import React, {Component} from "react";
//import './ItemListContainer.css';

class ItemListContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "item-list">
                <h1> Titulo:  {this.props.greeting}</h1>
            </div>
        );
    }
}export default ItemListContainer;