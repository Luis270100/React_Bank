import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        let data = this.props.data
        return <div className= "Data" >
            <h6>Category : {data.category}</h6>
            <h6>Vendor : {data.vendor} </h6>
            <h5>Amount : {data.amount}</h5>
        </div>
    }
}
export default Transaction