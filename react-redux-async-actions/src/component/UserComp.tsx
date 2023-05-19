import React from 'react';
import {Table} from "antd";
import {connect} from "react-redux";
import {getUsers} from "../redux";


interface UserProps {
    usersData:any,
    getUsers:any
}

interface UserState {
    users:any
}
class UserComp extends React.Component<UserProps,UserState> {

    constructor(props: Readonly<UserProps> | UserProps) {
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount() {
        this.props.getUsers()
        console.log(this.props.usersData)
    }

    getAllUsers=()=>{
        this.setState({
            users:this.props.usersData
        })
    }

    render() {

        let col:any=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'name',
                dataIndex:'name'
            },
            {
                title:'email',
                dataIndex:'email'
            },
        ]
        return (
            <div>
                <h1>hello</h1>
                <Table
                    columns={col}
                    dataSource={this.props.usersData}
                    rowKey={'id'}
                    pagination={false}

                />
            </div>
        );
    }
}

const mapToProps=(state:any,ownProps:any)=>{
   // console.log(state.users.users)
    return{
        usersData:state.users.users
    }
}
const mapDispatchToProps=(dispatch:any,ownProps:any)=>{
    return{
        getUsers:()=>dispatch(getUsers())
    }
}

export default connect(mapToProps,mapDispatchToProps)(UserComp);