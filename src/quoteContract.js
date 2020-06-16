export const STOCK_ORACLE_ADDRESS = '0x772b657bc5F0785A297FA76111298F4F1469209F'
export const STOCK_ORACLE_ABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockVolume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "volume",
				"type": "uint256"
			}
		],
		"name": "setStock",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]