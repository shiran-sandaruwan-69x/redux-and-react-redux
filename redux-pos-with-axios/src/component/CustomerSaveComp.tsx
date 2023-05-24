import React from 'react';
import {Button, Form, Input, Space} from "antd";
import axios from "axios";
import {connect} from "react-redux";
import {saveCustomer} from "../actions/CustomerAction";
import CustomerTableComp from "./CustomerTableComp";


interface customerProps {
    saveCustomer?:any
}

interface customerState {
    customerData:any
}

// axios.defaults.baseURL ='https://jsonplaceholder.typicode.com'

class CustomerSaveComp extends React.Component<customerProps,customerState> {

    constructor(props: Readonly<customerProps> | customerProps) {
        super(props);
        this.state={
            customerData:[]
        }
    }

    saveCustomer=(data:any)=>{
        //console.log(data)
        this.setState({
            customerData:data
        },()=>{
           this.props.saveCustomer(this.state.customerData)
        })

    }

    render() {
        return (
            // <Space style={{marginTop:'2%'}}>
                <Space>
                    <Form style={{width:400}} onFinish={this.saveCustomer}>
                        <Form.Item label='user id' name='userId'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='title' name='title'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='message' name='body'>
                            <Input />
                        </Form.Item>
                        <Button type='primary' htmlType='submit'>save customer</Button>
                    </Form>
                    <CustomerTableComp/>
                </Space>
            //</Space>
        );
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        saveCustomer:(customer:any)=>dispatch(saveCustomer(customer))
    }
}

export default connect(null,mapDispatchToProps)(CustomerSaveComp);