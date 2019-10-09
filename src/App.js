import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
const axios = require('axios');


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      amount: 0,
      vendor: "",
      category: "",
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:4000/transactions', function (req, res) {

  //   })
  // }



  handleInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleButtons = (event) => {

    let state = this.state
    let eventName = event.target.name === "deposit"

    if (state.amount && state.category) {
      
      let data = [...state.data]
      let amountValue = eventName ? state.amount : -state.amount
      let transaction = { amount: amountValue, vendor: state.vendor, category: state.category}
      data.push(transaction)
      this.setState({
        data
      })
    }

    else {
      alert("The Category or the Amount are empty")
    }
  }


  render() {
    return (
      <div>
        <Operations data={this.state} handleInputs={this.handleInputs} handleButtons={this.handleButtons} />
        <Transactions data={this.state.data} />
      </div>)

  }
}

export default App;
