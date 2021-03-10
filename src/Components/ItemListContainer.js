import React, {Component} from "react";

class ItemListContainer extends Component{
    //constructor(props){
    //    super(props);
   // }
    render(){
        return(
            <h1> {this.props.greeting}</h1>
        );
    }
}export default ItemListContainer;