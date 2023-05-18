import React from 'react';
import {buyIceCream} from "../redux";
import {connect} from "react-redux";

interface IceCreamProps {
    noOfIceCream?:any,
    buyIceCream?:any
}

interface IceCreamState {

}

const mapToProps=(state:any)=>{
    return{
        noOfIceCream:state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

class IceCreamComp extends React.Component<IceCreamProps,IceCreamState> {

    constructor(props: Readonly<IceCreamProps> | IceCreamProps) {
        super(props);
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <h1>{this.props.noOfIceCream}</h1>
                <button onClick={this.props.buyIceCream}>buy ice cream</button>
            </div>
        );
    }
}

export default connect(mapToProps,mapDispatchToProps)(IceCreamComp);