import React from 'react';
import {connect} from "react-redux";
import CakeContainer from "./CakeContainer";

interface ShopProps {
    numOfCake?:any
}
interface ShopState {
    numOfCake:any
}

class ShopComp extends React.Component<ShopProps,ShopState> {

    constructor(props: Readonly<ShopProps> | ShopProps) {
        super(props);
        this.state={
            numOfCake:''
        }
    }

    componentDidMount() {
        this.setState({
            numOfCake:this.props.numOfCake
        })
    }

    render() {
        console.log(this.props.numOfCake)
        return (
            <div style={{marginLeft:'40%',marginTop:'9%'}}>
                <h1>{this.state.numOfCake}</h1>
                <CakeContainer/>
            </div>
        );
    }
}

const mapStateToProps=(state:any)=>{
    return{
        numOfCake:state.numOfCake
    }
}

export default connect(mapStateToProps)(ShopComp);