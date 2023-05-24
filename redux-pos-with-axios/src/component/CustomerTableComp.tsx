import React from 'react';
import {Table} from "antd";
import {connect} from "react-redux";

interface CustomerTableProps {
    customers?:any
}
interface CustomerTableState {

}
class CustomerTableComp extends React.Component<CustomerTableProps,CustomerTableState> {

    constructor(props: Readonly<CustomerTableProps> | CustomerTableProps) {
        super(props);
        this.state={

        }
    }

    render() {

        let columns:any=[
            {
                title:'id',
                dataIndex:'dataIndex'
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
                />
            </div>
        );
    }
}

const mapToProps=(state:any)=>{
    return{
        customers:state.customers
    }
}

export default connect(mapToProps)(CustomerTableComp);