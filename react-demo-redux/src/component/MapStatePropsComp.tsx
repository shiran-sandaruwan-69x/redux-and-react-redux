import React from 'react';
import {connect} from "react-redux";

interface MapStateProps {
    item?:any,
    pp?:any,
    cake?:any

}

interface MapState {

}


class MapStatePropsComp extends React.Component<MapStateProps,MapState> {

    constructor(props: Readonly<MapStateProps> | MapStateProps) {
        super(props);
        this.state={

        }
    }


    render() {
        return (
            <div>
                <h1>map state props - {this.props.item}</h1>
            </div>
        );
    }
}

const mapStateProps=(state:any,ownProps:any)=>{
    console.log(ownProps)
    const itemState=ownProps.cake
        ? state.cake.numOfCake
        : state.iceCream.noOfIceCream

    return{
        item:itemState
    }
}

export default connect(mapStateProps)(MapStatePropsComp);