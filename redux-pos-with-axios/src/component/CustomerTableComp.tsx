import React from 'react';

interface CustomerTableProps {

}
interface CustomerTableState {

}
class CustomerTableComp extends React.Component<CustomerTableProps,CustomerTableState> {
    
    constructor(props: Readonly<CustomerTableProps> | CustomerTableProps) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default CustomerTableComp;