import React from 'react';
import {Table} from "antd";
import {connect} from "react-redux";
import {getCustomer} from "../actions/CustomerAction";

interface CustomerTableProps {
    customers?:any,
    getCustomers?:any
}
interface CustomerTableState {

}
class CustomerTableComp extends React.Component<CustomerTableProps,CustomerTableState> {

    constructor(props: Readonly<CustomerTableProps> | CustomerTableProps) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
       this.props.getCustomers()
    }

    render() {

        let columns:any=[
            {
                title:'id',
                dataIndex:'userId'
            },
            {
                title: 'title',
                dataIndex: 'title'
            },
            {
                title: 'message',
                dataIndex: 'body'
            }
        ]

        return (
            <div>
                <Table
                columns={columns}
                scroll={{x:300,y:400}}
                dataSource={this.props.customers}
                rowKey={'id'}
                pagination={false}
                />
            </div>
        );
    }
}

const mapToProps=(state:any)=>{
   
    return{
        customers:state.customers.allCustomer
    }
}

const mapToDispatchProps=(dispatch:any)=>{
    return{
        getCustomers:()=>dispatch(getCustomer())
    }
}

export default connect(mapToProps,mapToDispatchProps)(CustomerTableComp);