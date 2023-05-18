import React from 'react';
import {connect} from "react-redux";
import {stat} from "fs";
import {buyCakes, buyIceCream} from "../redux";

interface MapDispatchProps {
    cake?:any,
    iceCream?:any,
    buyItem?:any
}

interface MapDispatchState {

}


class MapDispatchPropsComp extends React.Component<MapDispatchProps,MapDispatchState> {

    constructor(props: Readonly<MapDispatchProps> | MapDispatchProps) {
        super(props);
        this.state={

        }
    }


    render() {
        return (
            <div>
                <h1>map Dispatch props {this.props.cake} {this.props.iceCream}</h1>
                <button onClick={()=>this.props.buyItem()}>buyItem</button>
            </div>
        );
    }
}

const mapStateProps=(state:any,ownProps:any)=>{
    return{
        cake:state.cake.numOfCake,
        iceCream:state.iceCream.noOfIceCream
    }
}

const mapDispatchProps=(dispatch:any,ownProps:any)=>{
    const dispatchFunction = ownProps.cake
        ? ()=>dispatch(buyCakes())
        : ()=>dispatch(buyIceCream(1))

    return{
        buyItem:dispatchFunction
    }
}

// if you want we can pass mapStateProps to null
export default connect(null,mapDispatchProps)(MapDispatchPropsComp);