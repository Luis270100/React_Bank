import React, { Component } from 'react';

class Operations extends Component {



    render() {
        let data = this.props.data
        let handleInputs = this.props.handleInputs
        let handleButtons = this.props.handleButtons

        return (
            <div className="operations">
                <div className="inputs">
                    <input type="text" name="category" placeholder="Category" value={data.category} onChange={handleInputs} />
                    <input type="text" name="vendor" placeholder="Vendor" value={data.vendor} onChange={handleInputs} />
                    <input type="number" name="amount" placeholder="Amount" value={data.amount} onChange={handleInputs} />
                </div>
                <div className="buttons">
                    <button name="deposit" onClick= {handleButtons}>Deposit</button>
                    <button name="withdraw" onClick= {handleButtons}>Withdraw</button>
                </div>
            </div>)
    }
}

export default Operations