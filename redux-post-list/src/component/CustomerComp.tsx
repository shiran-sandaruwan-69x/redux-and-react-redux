import React from 'react';
import {connect} from "react-redux";
import {getCustomers, getSelectTableRowAndIndex, getTableSelectRow} from "../actions/PostActions";
import {Table} from "antd";
import SelectedTableRow from "./SelectedTableRow";

interface CustomerProps {
    getCustomers?:any,
    cusData?:any,
    postRowSelect?:any,
    postRowSelectDataAndIndex?:any

}

interface CustomerState {
    customers:any,
    value:number
}



class CustomerComp extends React.Component<CustomerProps,CustomerState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
        this.state={
            customers:[],
            value:0
        }
    }

    componentDidMount() {
        this.props.getCustomers()
    }



    render() {
        let col:any=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'title',
                dataIndex:'title'
            }
        ]

        return (
            <div>
                <Table
                    style={{maxWidth:900}}
                    pagination={false}
                    scroll={{ y: 300 , x:300}}
                    dataSource={this.props.cusData}
                    columns={col}
                    rowKey={'id'}
                    onRow={(record:any,rowIndex:any):any=>{
                        return{
                            onClick:(event:any)=>{
                                console.log(record)
                                console.log(rowIndex)
                                console.log(event)
                                this.props.postRowSelect(record)
                                this.props.postRowSelectDataAndIndex(record,rowIndex)
                            }
                        }
                    }}
                />
                <SelectedTableRow/>
            </div>
        );
    }
}

const mapToProps=(state:any,ownProps:any)=>{
    return{
        cusData:state.customers.customers
    }
}

const mapDispatchProps=(dispatch:any,ownProps:any)=>{
    return{
        getCustomers:()=>dispatch(getCustomers()),
        postRowSelect:(selectRow:any)=>dispatch(getTableSelectRow(selectRow)),
        postRowSelectDataAndIndex:(selectRow:any,rowIndex:any)=>dispatch(getSelectTableRowAndIndex(selectRow,rowIndex))
    }
}

export default connect(mapToProps,mapDispatchProps)(CustomerComp);