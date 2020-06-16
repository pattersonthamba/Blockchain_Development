pragma solidity ^0.5.16;

contract stockPriceOracle {
    

    struct stock {
        uint price;
        uint volume;
    }
    mapping (bytes4 => stock) private stocks;


    address oracleOwner;
    
    constructor() public {
        oracleOwner = msg.sender;
    }
    

    function setStock(bytes4 symbol, uint price, uint volume) public {
        stocks[symbol] = stock(price, volume);
    }

    function getStockPrice(bytes4 symbol) public view returns (uint) {
        return stocks[symbol].price;
    }

    function getStockVolume(bytes4 symbol) public view returns (uint) {
        return stocks[symbol].volume;
    }
}