import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        let data = this.props.data
        return (
            <div className="displayData">
                {data.map((d, index) => <Transaction data = {d} key= {index}/>)}
            </div>)
    }
}

export default Transactions 