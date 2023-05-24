import React from 'react';
import {connect} from "react-redux";

interface SelectedRowProps {
    selectRow?:any
}
interface SelectedRowState {
    selectRowData:[]
}
class SelectedTableRow extends React.Component<SelectedRowProps,SelectedRowState> {

    constructor(props: Readonly<SelectedRowProps> | SelectedRowProps) {
        super(props);
        this.state={
            selectRowData:[]
        }
    }

    setSelectRow=()=>{
        let data:any = [...this.props.selectRow]

        return data.map((data:any)=>{
            return(
                <p key={data.rowIndex}>{data.selectRow.id} : {data.selectRow.title}</p>
            )
        })
    }

    render() {
        console.log(this.props.selectRow)
        return (
            <div>
                {
                    this.setSelectRow()
                }
            </div>
        );
    }
}

const mapToProps=(state:any)=>{
    return{
        selectRow:state.customers.selectRowAndIndex
    }
}

export default connect(mapToProps)(SelectedTableRow);