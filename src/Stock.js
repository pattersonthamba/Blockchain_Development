import React , { Component } from 'react';
import Web3 from 'web3';
import { STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS } from './quoteContract'


class Stock extends Component{
    
    constructor() {
        super();
        this.state = { data: [] };
      }
    
      async componentWillMount() {
          

      }
      setStockPrice =(event) => {
        var web3 = new Web3("http://localhost:7545")
        var accounts =async () => { await web3.eth.getAccounts()};
        console.log("Account 0 = ", accounts[0] )
        var stockQuote = new (web3).eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS)
        stockQuote.methods.setStock(web3.utils.fromAscii(this.state.symbol) , web3.utils.toBN(this.state.price) , web3.utils.toBN(this.state.volume)).send({from: accounts[0]})
      }

      checkStock =(event) => {
        var web3 = new Web3("http://localhost:7545")
        var accounts =async () => { await web3.eth.getAccounts()};
        console.log("Account 0 = ", accounts[0] )
        var stockQuote = new (web3).eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS)
        var price1 = stockQuote.methods.getStockPrice(web3.utils.fromAscii(this.state.symbol1)).call();
        var volume1 = stockQuote.methods.getStockVolume(web3.utils.fromAscii(this.state.symbol1)).call();
        this.setState({price1 : price1 , volume1: volume1  });
      }

      checkSymbol =async(event) => {
        try{
            const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + this.state.checksymbol + '&apikey=1G55TO7JCS38DI7M');
            const json = await response.json();
            if(json){
            console.log(json);
            console.log(json["Global Quote"]);
            this.setState({symbol : json["Global Quote"]["01. symbol"],price :json["Global Quote"]["05. price"],volume : json["Global Quote"]["06. volume"]  });
            }
            else{
              alert("No symbol found.")
            }
          }
          catch(err){

          }
      }

      handleSymbolChange = (event) =>{
        this.setState({checksymbol : event.target.value});
      }

      handleSymbolInput = (event) =>{
        this.setState({symbol : event.target.value});
      }

      handleSymbolInput1 = (event) =>{
        this.setState({symbol1 : event.target.value});
      }

      handlePriceInput = (event) =>{
        this.setState({price : event.target.value});
      }

      handleVolumeInput = (event) =>{
        this.setState({volume : event.target.value});
      }

      render() {
        return (
          <div className="App">            
            <label for="chkSymbol">Enter the symbol to check:</label>
            <input type="text" id="chkSymbol" onChange={this.handleSymbolChange}></input>
            <button onClick={this.checkSymbol}>Check Symbol</button>
            <br>
            </br>
            <label for="symbol">Symbol:</label>
            <input type="text" id="symbol" value={this.state.symbol} onChange={this.handleSymbolInput}></input>
            <label for="price">Price:</label>
            <input type="text" id="price" value={this.state.price} onChange={this.handlePriceInput}></input>
            <label for="volume">Volume:</label>
            <input type="text" id="volume" value={this.state.volume} onChange={this.handleVolumeInput}></input>
            <button onClick={this.setStockPrice}>Set Stock Price</button>
            <br></br>
            <label for="symbol">Symbol:</label>
            <input type="text" id="symbol" onChange={this.handleSymbolInput1}></input>
            <button onClick={this.checkStock}>Check Stock Price and Volume[from Smart Contract]</button>
            <br></br>
            <label>Price:</label>
            <label value={this.state.price1}></label>
            <br></br>
            <label>Volume:</label>
            <label value={this.state.volume1}></label>
          </div>
        );
      }
    
    }
    
    export default Stock; 
