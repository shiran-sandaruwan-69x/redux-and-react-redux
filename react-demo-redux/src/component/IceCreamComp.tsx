import React from 'react';
import {buyIceCream} from "../redux";
import {connect} from "react-redux";

interface IceCreamProps {
    noOfIceCream?:any,
    buyIceCream?:any
}

interface IceCreamState {
    noOf:number
}

const mapToProps=(state:any)=>{
    return{
        noOfIceCream:state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        buyIceCream:(noOf:number)=>dispatch(buyIceCream(noOf))
    }
}

class IceCreamComp extends React.Component<IceCreamProps,IceCreamState> {

    constructor(props: Readonly<IceCreamProps> | IceCreamProps) {
        super(props);
        this.state={
            noOf:1
        }
    }



    render() {
        //console.log(this.props)
        return (
            <div>
                <h1>{this.props.noOfIceCream}</h1>
                <input type='text' value={this.state.noOf} onChange={(event:any)=>this.setState({
                    noOf:event.target.value
                })}/>
                <button onClick={()=>{
                    this.props.buyIceCream(this.state.noOf)
                }}>buy {this.state.noOf} ice cream</button>
            </div>
        );
    }
}

export default connect(mapToProps,mapDispatchToProps)(IceCreamComp);