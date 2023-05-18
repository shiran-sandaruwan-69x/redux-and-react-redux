import React from 'react';
import {connect,useSelector} from "react-redux";
import {buyCakes} from '../redux'
import ShopComp from "./ShopComp";

interface CakeProps {
    numOfCake?:any,
    buyCake?:any
}
interface CakeState {

}

const mapStateToProps=(state:any)=>{
    return{
        numOfCake: state.cake.numOfCake
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        buyCake:()=> dispatch(buyCakes())
    }
}


class CakeContainer extends React.Component<CakeProps,CakeState> {

    constructor(props: Readonly<CakeProps> | CakeProps) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        this.setState({
            numOfCake:this.props.numOfCake
        })
    }


    render() {

        return (
            <div style={{marginLeft:'40%',marginTop:'9%'}}>
                <h2>no of cakes {this.props.numOfCake}</h2>
                <button onClick={this.props.buyCake}>buy cake</button>

            </div>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);