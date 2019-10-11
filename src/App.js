import React, { Component } from 'react';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import { awaitExpression } from '@babel/types';
const axios = require('axios');


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      amount: parseInt(0),
      vendor: "",
      category: "",
      balance: 0
    }
  }

  async getTransactionData () {
    let data = await axios.get('http://localhost:4000/transactions')
    this.setState({
      data: data.data
    })

  }

  async  componentDidMount() { 
    await this.getTransactionData()
    this.displayBalance()
  }


  displayBalance = () => {
    let balance = 0
    let transactions = this.state.data
    transactions.forEach(t => {
      balance = (balance + t.amount)
      return balance
    })
    this.setState({ balance })
  }


  handleInputs = async (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleButtons = async (event) => {

    let state = this.state
    let isDeposit = event.target.name === "deposit"
   
    if (state.amount && state.category) {

        let data = [...state.data]
        let amountValue = isDeposit ? state.amount : -state.amount
        let transaction = { amount: parseInt(amountValue), vendor: state.vendor, category: state.category }


        let post  = await axios.post('http://localhost:4000/transaction', transaction )
        console.log(post)

        // not use this
        await this.getTransactionData()
        this.displayBalance()
    
    }


    else {
      alert("The Category or the Amount are empty")
    }
  }

  render() {

    return (
      <div>
        <div>Balance : ${this.state.balance}</div>
        <Operations data={this.state} handleInputs={this.handleInputs} handleButtons={this.handleButtons} />
        <Transactions data={this.state.data} />
      </div>)

  }
}

export default App;
