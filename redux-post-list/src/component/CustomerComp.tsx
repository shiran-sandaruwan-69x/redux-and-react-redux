import React from 'react';
import {connect} from "react-redux";
import {getCustomers} from "../actions/PostActions";

interface CustomerProps {
    getCustomers?:any
}

interface CustomerState {

}

class CustomerComp extends React.Component<CustomerProps,CustomerState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        this.props.getCustomers()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapToProps=(state:any,ownProps:any)=>{
    return{
        cusName:state.customers.customers
    }
}

const mapDispatchProps=(dispatch:any,ownProps:any)=>{
    return{
        getCustomers:()=>dispatch(getCustomers())
    }
}

export default connect(mapToProps,mapDispatchProps)(CustomerComp);