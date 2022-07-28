export const abi = {
  cantoPriceOracle : 
    [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_factory",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_wcanto",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "USDC_",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "Comptroller_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "Comptroller",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "stable",
                  "type": "bool"
                }
              ],
              "internalType": "struct BaseV1Router01.route[]",
              "name": "routes",
              "type": "tuple[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "UNSAFE_swapExactTokensForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "USDC",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "amountADesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTOMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidityCANTO",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTO",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "tokenIn",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenOut",
              "type": "address"
            }
          ],
          "name": "getAmountOut",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "stable",
                  "type": "bool"
                }
              ],
              "internalType": "struct BaseV1Router01.route[]",
              "name": "routes",
              "type": "tuple[]"
            }
          ],
          "name": "getAmountsOut",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            }
          ],
          "name": "getReserves",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "reserveA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveB",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract CToken",
              "name": "ctoken",
              "type": "address"
            }
          ],
          "name": "getUnderlyingPrice",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pair",
              "type": "address"
            }
          ],
          "name": "isPair",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isPriceOracle",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            }
          ],
          "name": "pairFor",
          "outputs": [
            {
              "internalType": "address",
              "name": "pair",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "amountADesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBDesired",
              "type": "uint256"
            }
          ],
          "name": "quoteAddLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "name": "quoteRemoveLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTOMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidityCANTO",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTO",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTOMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityCANTOWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountCANTO",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            }
          ],
          "name": "sortTokens",
          "outputs": [
            {
              "internalType": "address",
              "name": "token0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token1",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "stable",
                  "type": "bool"
                }
              ],
              "internalType": "struct BaseV1Router01.route[]",
              "name": "routes",
              "type": "tuple[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactCANTOForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "stable",
                  "type": "bool"
                }
              ],
              "internalType": "struct BaseV1Router01.route[]",
              "name": "routes",
              "type": "tuple[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForCANTO",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "stable",
                  "type": "bool"
                }
              ],
              "internalType": "struct BaseV1Router01.route[]",
              "name": "routes",
              "type": "tuple[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "tokenFrom",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenTo",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "stable",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokensSimple",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "wcanto",
          "outputs": [
            {
              "internalType": "contract IWCANTO",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]
    
  ,
    cCatno: [
      {
        inputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "comptroller_",
            type: "address",
          },
          {
            internalType: "contract InterestRateModel",
            name: "interestRateModel_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa_",
            type: "uint256",
          },
          { internalType: "string", name: "name_", type: "string" },
          { internalType: "string", name: "symbol_", type: "string" },
          { internalType: "uint8", name: "decimals_", type: "uint8" },
          { internalType: "address payable", name: "admin_", type: "address" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "cashPrior",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "interestAccumulated",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "borrowIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "AccrueInterest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "borrowAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "accountBorrows",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "Borrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "error",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "info",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "detail",
            type: "uint256",
          },
        ],
        name: "Failure",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "cTokenCollateral",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "seizeTokens",
            type: "uint256",
          },
        ],
        name: "LiquidateBorrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "minter",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mintAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mintTokens",
            type: "uint256",
          },
        ],
        name: "Mint",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newAdmin",
            type: "address",
          },
        ],
        name: "NewAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract ComptrollerInterface",
            name: "oldComptroller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract ComptrollerInterface",
            name: "newComptroller",
            type: "address",
          },
        ],
        name: "NewComptroller",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract InterestRateModel",
            name: "oldInterestRateModel",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract InterestRateModel",
            name: "newInterestRateModel",
            type: "address",
          },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldPendingAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newPendingAdmin",
            type: "address",
          },
        ],
        name: "NewPendingAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldReserveFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newReserveFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewReserveFactor",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "redeemer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "redeemAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "redeemTokens",
            type: "uint256",
          },
        ],
        name: "Redeem",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "accountBorrows",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "RepayBorrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "benefactor",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "addAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTotalReserves",
            type: "uint256",
          },
        ],
        name: "ReservesAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "reduceAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTotalReserves",
            type: "uint256",
          },
        ],
        name: "ReservesReduced",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          { indexed: true, internalType: "address", name: "to", type: "address" },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      { payable: true, stateMutability: "payable", type: "fallback" },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "reduceAmount", type: "uint256" },
        ],
        name: "_reduceReserves",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "newComptroller",
            type: "address",
          },
        ],
        name: "_setComptroller",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract InterestRateModel",
            name: "newInterestRateModel",
            type: "address",
          },
        ],
        name: "_setInterestRateModel",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address payable",
            name: "newPendingAdmin",
            type: "address",
          },
        ],
        name: "_setPendingAdmin",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newReserveFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setReserveFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address payable", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOfUnderlying",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrow",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "borrowBalanceCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "borrowBalanceStored",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAccountSnapshot",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "comptroller_",
            type: "address",
          },
          {
            internalType: "contract InterestRateModel",
            name: "interestRateModel_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa_",
            type: "uint256",
          },
          { internalType: "string", name: "name_", type: "string" },
          { internalType: "string", name: "symbol_", type: "string" },
          { internalType: "uint8", name: "decimals_", type: "uint8" },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [
          {
            internalType: "contract InterestRateModel",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "borrower", type: "address" },
          {
            internalType: "contract CToken",
            name: "cTokenCollateral",
            type: "address",
          },
        ],
        name: "liquidateBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ internalType: "address payable", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeem",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "redeemAmount", type: "uint256" },
        ],
        name: "redeemUnderlying",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "repayBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "borrower", type: "address" }],
        name: "repayBorrowBehalf",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seize",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    newCERC20: [
      {
        inputs: [
          { internalType: "address", name: "underlying_", type: "address" },
          {
            internalType: "contract ComptrollerInterface",
            name: "comptroller_",
            type: "address",
          },
          {
            internalType: "contract InterestRateModel",
            name: "interestRateModel_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa_",
            type: "uint256",
          },
          { internalType: "string", name: "name_", type: "string" },
          { internalType: "string", name: "symbol_", type: "string" },
          { internalType: "uint8", name: "decimals_", type: "uint8" },
          { internalType: "address payable", name: "admin_", type: "address" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "cashPrior",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "interestAccumulated",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "borrowIndex",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "AccrueInterest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "borrowAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "accountBorrows",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "Borrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "error",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "info",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "detail",
            type: "uint256",
          },
        ],
        name: "Failure",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "cTokenCollateral",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "seizeTokens",
            type: "uint256",
          },
        ],
        name: "LiquidateBorrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "minter",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mintAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mintTokens",
            type: "uint256",
          },
        ],
        name: "Mint",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newAdmin",
            type: "address",
          },
        ],
        name: "NewAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract ComptrollerInterface",
            name: "oldComptroller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract ComptrollerInterface",
            name: "newComptroller",
            type: "address",
          },
        ],
        name: "NewComptroller",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract InterestRateModel",
            name: "oldInterestRateModel",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract InterestRateModel",
            name: "newInterestRateModel",
            type: "address",
          },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldPendingAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newPendingAdmin",
            type: "address",
          },
        ],
        name: "NewPendingAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldReserveFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newReserveFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewReserveFactor",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "redeemer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "redeemAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "redeemTokens",
            type: "uint256",
          },
        ],
        name: "Redeem",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "accountBorrows",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "totalBorrows",
            type: "uint256",
          },
        ],
        name: "RepayBorrow",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "benefactor",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "addAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTotalReserves",
            type: "uint256",
          },
        ],
        name: "ReservesAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "reduceAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTotalReserves",
            type: "uint256",
          },
        ],
        name: "ReservesReduced",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          { indexed: true, internalType: "address", name: "to", type: "address" },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "addAmount", type: "uint256" }],
        name: "_addReserves",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "reduceAmount", type: "uint256" },
        ],
        name: "_reduceReserves",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "newComptroller",
            type: "address",
          },
        ],
        name: "_setComptroller",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract InterestRateModel",
            name: "newInterestRateModel",
            type: "address",
          },
        ],
        name: "_setInterestRateModel",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address payable",
            name: "newPendingAdmin",
            type: "address",
          },
        ],
        name: "_setPendingAdmin",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newReserveFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setReserveFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address payable", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOfUnderlying",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrow",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "borrowBalanceCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "borrowBalanceStored",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAccountSnapshot",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "underlying_", type: "address" },
          {
            internalType: "contract ComptrollerInterface",
            name: "comptroller_",
            type: "address",
          },
          {
            internalType: "contract InterestRateModel",
            name: "interestRateModel_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa_",
            type: "uint256",
          },
          { internalType: "string", name: "name_", type: "string" },
          { internalType: "string", name: "symbol_", type: "string" },
          { internalType: "uint8", name: "decimals_", type: "uint8" },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract ComptrollerInterface",
            name: "comptroller_",
            type: "address",
          },
          {
            internalType: "contract InterestRateModel",
            name: "interestRateModel_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa_",
            type: "uint256",
          },
          { internalType: "string", name: "name_", type: "string" },
          { internalType: "string", name: "symbol_", type: "string" },
          { internalType: "uint8", name: "decimals_", type: "uint8" },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [
          {
            internalType: "contract InterestRateModel",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
          {
            internalType: "contract CTokenInterface",
            name: "cTokenCollateral",
            type: "address",
          },
        ],
        name: "liquidateBorrow",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "mintAmount", type: "uint256" },
        ],
        name: "mint",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ internalType: "address payable", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeem",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "redeemAmount", type: "uint256" },
        ],
        name: "redeemUnderlying",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "repayBorrow",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "repayBorrowBehalf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seize",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "underlying",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    newPriceOracle: [
      {
        inputs: [
          {
            internalType: "contract OpenOraclePriceData",
            name: "priceData_",
            type: "address",
          },
          { internalType: "address", name: "reporter_", type: "address" },
          {
            internalType: "uint256",
            name: "anchorToleranceMantissa_",
            type: "uint256",
          },
          { internalType: "uint256", name: "anchorPeriod_", type: "uint256" },
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig[]",
            name: "configs",
            type: "tuple[]",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "anchorPrice",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldTimestamp",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTimestamp",
            type: "uint256",
          },
        ],
        name: "AnchorPriceUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "reporter",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "anchor",
            type: "uint256",
          },
        ],
        name: "PriceGuarded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "PriceUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "reporter",
            type: "address",
          },
        ],
        name: "ReporterInvalidated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "symbolHash",
            type: "bytes32",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldTimestamp",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newTimestamp",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldPrice",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newPrice",
            type: "uint256",
          },
        ],
        name: "UniswapWindowUpdated",
        type: "event",
      },
      {
        inputs: [],
        name: "anchorPeriod",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "ethBaseUnit",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "expScale",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "i", type: "uint256" }],
        name: "getTokenConfig",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "cToken", type: "address" }],
        name: "getTokenConfigByCToken",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "string", name: "symbol", type: "string" }],
        name: "getTokenConfigBySymbol",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
        ],
        name: "getTokenConfigBySymbolHash",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "underlying", type: "address" },
        ],
        name: "getTokenConfigByUnderlying",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "address", name: "underlying", type: "address" },
              { internalType: "bytes32", name: "symbolHash", type: "bytes32" },
              { internalType: "uint256", name: "baseUnit", type: "uint256" },
              {
                internalType: "enum UniswapConfig.PriceSource",
                name: "priceSource",
                type: "uint8",
              },
              { internalType: "uint256", name: "fixedPrice", type: "uint256" },
              { internalType: "address", name: "uniswapMarket", type: "address" },
              { internalType: "bool", name: "isUniswapReversed", type: "bool" },
            ],
            internalType: "struct UniswapConfig.TokenConfig",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "cToken", type: "address" }],
        name: "getUnderlyingPrice",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "message", type: "bytes" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "invalidateReporter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "lowerBoundAnchorRatio",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maxTokens",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        name: "newObservations",
        outputs: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "uint256", name: "acc", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "numTokens",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        name: "oldObservations",
        outputs: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "uint256", name: "acc", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes[]", name: "messages", type: "bytes[]" },
          { internalType: "bytes[]", name: "signatures", type: "bytes[]" },
          { internalType: "string[]", name: "symbols", type: "string[]" },
        ],
        name: "postPrices",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "string", name: "symbol", type: "string" }],
        name: "price",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "priceData",
        outputs: [
          {
            internalType: "contract OpenOraclePriceData",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        name: "prices",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "reporter",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "reporterInvalidated",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "message", type: "bytes" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "source",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "upperBoundAnchorRatio",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    newComptroller: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "action",
            type: "string",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "pauseState",
            type: "bool",
          },
        ],
        name: "ActionPaused",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "CompGranted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newSpeed",
            type: "uint256",
          },
        ],
        name: "CompSpeedUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newSpeed",
            type: "uint256",
          },
        ],
        name: "ContributorCompSpeedUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compDelta",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compBorrowIndex",
            type: "uint256",
          },
        ],
        name: "DistributedBorrowerComp",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "supplier",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compDelta",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compSupplyIndex",
            type: "uint256",
          },
        ],
        name: "DistributedSupplierComp",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "error",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "info",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "detail",
            type: "uint256",
          },
        ],
        name: "Failure",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "isComped",
            type: "bool",
          },
        ],
        name: "MarketComped",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "MarketEntered",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "MarketExited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
        ],
        name: "MarketListed",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newBorrowCap",
            type: "uint256",
          },
        ],
        name: "NewBorrowCap",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldBorrowCapGuardian",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newBorrowCapGuardian",
            type: "address",
          },
        ],
        name: "NewBorrowCapGuardian",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCloseFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCloseFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewCloseFactor",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCollateralFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCollateralFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewCollateralFactor",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCompRate",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCompRate",
            type: "uint256",
          },
        ],
        name: "NewCompRate",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldLiquidationIncentiveMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newLiquidationIncentiveMantissa",
            type: "uint256",
          },
        ],
        name: "NewLiquidationIncentive",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldPauseGuardian",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newPauseGuardian",
            type: "address",
          },
        ],
        name: "NewPauseGuardian",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract PriceOracle",
            name: "oldPriceOracle",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract PriceOracle",
            name: "newPriceOracle",
            type: "address",
          },
        ],
        name: "NewPriceOracle",
        type: "event",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "cTokens", type: "address[]" },
        ],
        name: "_addCompMarkets",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract Unitroller",
            name: "unitroller",
            type: "address",
          },
        ],
        name: "_become",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_borrowGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "cToken", type: "address" }],
        name: "_dropCompMarket",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "_grantComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_mintGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "newBorrowCapGuardian",
            type: "address",
          },
        ],
        name: "_setBorrowCapGuardian",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          { internalType: "bool", name: "state", type: "bool" },
        ],
        name: "_setBorrowPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newCloseFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setCloseFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          {
            internalType: "uint256",
            name: "newCollateralFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setCollateralFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "compRate_", type: "uint256" }],
        name: "_setCompRate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "contributor", type: "address" },
          { internalType: "uint256", name: "compSpeed", type: "uint256" },
        ],
        name: "_setContributorCompSpeed",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newLiquidationIncentiveMantissa",
            type: "uint256",
          },
        ],
        name: "_setLiquidationIncentive",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "newBorrowCaps", type: "uint256[]" },
        ],
        name: "_setMarketBorrowCaps",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          { internalType: "bool", name: "state", type: "bool" },
        ],
        name: "_setMintPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "newPauseGuardian", type: "address" },
        ],
        name: "_setPauseGuardian",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract PriceOracle",
            name: "newOracle",
            type: "address",
          },
        ],
        name: "_setPriceOracle",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "bool", name: "state", type: "bool" }],
        name: "_setSeizePaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "bool", name: "state", type: "bool" }],
        name: "_setTransferPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "_supportMarket",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "accountAssets",
        outputs: [{ internalType: "contract CToken", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "allMarkets",
        outputs: [{ internalType: "contract CToken", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowCapGuardian",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "borrowCaps",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "borrowGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "checkMembership",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      // {
      //   constant: false,
      //   inputs: [
      //     { internalType: "address", name: "holder", type: "address" },
      //     {
      //       internalType: "contract CToken[]",
      //       name: "cTokens",
      //       type: "address[]",
      //     },
      //   ],
      //   name: "claimComp",
      //   outputs: [],
      //   payable: false,
      //   stateMutability: "nonpayable",
      //   type: "function",
      // },
      // {
      //   constant: false,
      //   inputs: [
      //     { internalType: "address[]", name: "holders", type: "address[]" },
      //     {
      //       internalType: "contract CToken[]",
      //       name: "cTokens",
      //       type: "address[]",
      //     },
      //     { internalType: "bool", name: "borrowers", type: "bool" },
      //     { internalType: "bool", name: "suppliers", type: "bool" },
      //   ],
      //   name: "claimComp",
      //   outputs: [],
      //   payable: false,
      //   stateMutability: "nonpayable",
      //   type: "function",
      // },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "holder", type: "address" }],
        name: "claimComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "closeFactorMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compAccrued",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compBorrowState",
        outputs: [
          { internalType: "uint224", name: "index", type: "uint224" },
          { internalType: "uint32", name: "block", type: "uint32" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "compBorrowerIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "compClaimThreshold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compContributorSpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "compInitialIndex",
        outputs: [{ internalType: "uint224", name: "", type: "uint224" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "compRate",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compSpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "compSupplierIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compSupplyState",
        outputs: [
          { internalType: "uint224", name: "index", type: "uint224" },
          { internalType: "uint32", name: "block", type: "uint32" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "comptrollerImplementation",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "cTokens", type: "address[]" },
        ],
        name: "enterMarkets",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenAddress", type: "address" },
        ],
        name: "exitMarket",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAccountLiquidity",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getAllMarkets",
        outputs: [
          { internalType: "contract CToken[]", name: "", type: "address[]" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAssetsIn",
        outputs: [
          { internalType: "contract CToken[]", name: "", type: "address[]" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getBlockNumber",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getCompAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "address", name: "cTokenModify", type: "address" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "getHypotheticalAccountLiquidity",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "isComptroller",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "lastContributorBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "liquidateBorrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "liquidateBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
        ],
        name: "liquidateCalculateSeizeTokens",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "liquidationIncentiveMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "markets",
        outputs: [
          { internalType: "bool", name: "isListed", type: "bool" },
          {
            internalType: "uint256",
            name: "collateralFactorMantissa",
            type: "uint256",
          },
          { internalType: "bool", name: "isComped", type: "bool" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "maxAssets",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "minter", type: "address" },
          { internalType: "uint256", name: "mintAmount", type: "uint256" },
        ],
        name: "mintAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "mintGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "minter", type: "address" },
          { internalType: "uint256", name: "actualMintAmount", type: "uint256" },
          { internalType: "uint256", name: "mintTokens", type: "uint256" },
        ],
        name: "mintVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "oracle",
        outputs: [
          { internalType: "contract PriceOracle", name: "", type: "address" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pauseGuardian",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingComptrollerImplementation",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "redeemer", type: "address" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeemAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "redeemer", type: "address" },
          { internalType: "uint256", name: "redeemAmount", type: "uint256" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeemVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "refreshCompSpeeds",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "payer", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "repayBorrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "payer", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
          { internalType: "uint256", name: "borrowerIndex", type: "uint256" },
        ],
        name: "repayBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seizeAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "seizeGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seizeVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "transferTokens", type: "uint256" },
        ],
        name: "transferAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "transferGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "transferTokens", type: "uint256" },
        ],
        name: "transferVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "contributor", type: "address" },
        ],
        name: "updateContributorRewards",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    Erc20: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function",
      },
      { inputs: [], payable: false, type: "constructor" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_from", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: true, name: "_spender", type: "address" },
          { indexed: false, name: "_value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
      },
    ],
    cErc20: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x06fdde03",
      },
      {
        constant: false,
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x095ea7b3",
      },
      {
        constant: false,
        inputs: [{ name: "repayAmount", type: "uint256" }],
        name: "repayBorrow",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x0e752702",
      },
      {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x173b9904",
      },
      {
        constant: false,
        inputs: [{ name: "account", type: "address" }],
        name: "borrowBalanceCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x17bfdfbc",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x18160ddd",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x182df0f5",
      },
      {
        constant: false,
        inputs: [
          { name: "src", type: "address" },
          { name: "dst", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x23b872dd",
      },
      {
        constant: false,
        inputs: [
          { name: "borrower", type: "address" },
          { name: "repayAmount", type: "uint256" },
        ],
        name: "repayBorrowBehalf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x2608f818",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x26782247",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x313ce567",
      },
      {
        constant: false,
        inputs: [{ name: "owner", type: "address" }],
        name: "balanceOfUnderlying",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x3af9e669",
      },
      {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x3b1d21a2",
      },
      {
        constant: false,
        inputs: [{ name: "newComptroller", type: "address" }],
        name: "_setComptroller",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x4576b5db",
      },
      {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x47bd3718",
      },
      {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x5fe3b567",
      },
      {
        constant: false,
        inputs: [{ name: "reduceAmount", type: "uint256" }],
        name: "_reduceReserves",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x601a0bf1",
      },
      {
        constant: true,
        inputs: [],
        name: "initialExchangeRateMantissa",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x675d972c",
      },
      {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6c540baf",
      },
      {
        constant: true,
        inputs: [],
        name: "underlying",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6f307dc3",
      },
      {
        constant: true,
        inputs: [{ name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x70a08231",
      },
      {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x73acee98",
      },
      {
        constant: false,
        inputs: [{ name: "redeemAmount", type: "uint256" }],
        name: "redeemUnderlying",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x852a12e3",
      },
      {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x8f840ddd",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95d89b41",
      },
      {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "borrowBalanceStored",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95dd9193",
      },
      {
        constant: false,
        inputs: [{ name: "mintAmount", type: "uint256" }],
        name: "mint",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa0712d68",
      },
      {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa6afed95",
      },
      {
        constant: false,
        inputs: [
          { name: "dst", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa9059cbb",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xaa5af0fd",
      },
      {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xae9d70b0",
      },
      {
        constant: false,
        inputs: [
          { name: "liquidator", type: "address" },
          { name: "borrower", type: "address" },
          { name: "seizeTokens", type: "uint256" },
        ],
        name: "seize",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb2a02ff1",
      },
      {
        constant: false,
        inputs: [{ name: "newPendingAdmin", type: "address" }],
        name: "_setPendingAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb71d1a0c",
      },
      {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xbd6d894d",
      },
      {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "getAccountSnapshot",
        outputs: [
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xc37f68e2",
      },
      {
        constant: false,
        inputs: [{ name: "borrowAmount", type: "uint256" }],
        name: "borrow",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xc5ebeaec",
      },
      {
        constant: false,
        inputs: [{ name: "redeemTokens", type: "uint256" }],
        name: "redeem",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xdb006a75",
      },
      {
        constant: true,
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdd62ed3e",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe9c714f2",
      },
      {
        constant: false,
        inputs: [{ name: "newInterestRateModel", type: "address" }],
        name: "_setInterestRateModel",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xf2b3abbd",
      },
      {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf3fdb15a",
      },
      {
        constant: false,
        inputs: [
          { name: "borrower", type: "address" },
          { name: "repayAmount", type: "uint256" },
          { name: "cTokenCollateral", type: "address" },
        ],
        name: "liquidateBorrow",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xf5e3c462",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf851a440",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf8f9da28",
      },
      {
        constant: false,
        inputs: [{ name: "newReserveFactorMantissa", type: "uint256" }],
        name: "_setReserveFactor",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xfca7820b",
      },
      {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xfe9c44ae",
      },
      {
        inputs: [
          { name: "underlying_", type: "address" },
          { name: "comptroller_", type: "address" },
          { name: "interestRateModel_", type: "address" },
          { name: "initialExchangeRateMantissa_", type: "uint256" },
          { name: "name_", type: "string" },
          { name: "symbol_", type: "string" },
          { name: "decimals_", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "interestAccumulated", type: "uint256" },
          { indexed: false, name: "borrowIndex", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "AccrueInterest",
        type: "event",
        signature:
          "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "minter", type: "address" },
          { indexed: false, name: "mintAmount", type: "uint256" },
          { indexed: false, name: "mintTokens", type: "uint256" },
        ],
        name: "Mint",
        type: "event",
        signature:
          "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "redeemer", type: "address" },
          { indexed: false, name: "redeemAmount", type: "uint256" },
          { indexed: false, name: "redeemTokens", type: "uint256" },
        ],
        name: "Redeem",
        type: "event",
        signature:
          "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "borrowAmount", type: "uint256" },
          { indexed: false, name: "accountBorrows", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "Borrow",
        type: "event",
        signature:
          "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "payer", type: "address" },
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "repayAmount", type: "uint256" },
          { indexed: false, name: "accountBorrows", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "RepayBorrow",
        type: "event",
        signature:
          "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "liquidator", type: "address" },
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "repayAmount", type: "uint256" },
          { indexed: false, name: "cTokenCollateral", type: "address" },
          { indexed: false, name: "seizeTokens", type: "uint256" },
        ],
        name: "LiquidateBorrow",
        type: "event",
        signature:
          "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldPendingAdmin", type: "address" },
          { indexed: false, name: "newPendingAdmin", type: "address" },
        ],
        name: "NewPendingAdmin",
        type: "event",
        signature:
          "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldAdmin", type: "address" },
          { indexed: false, name: "newAdmin", type: "address" },
        ],
        name: "NewAdmin",
        type: "event",
        signature:
          "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldComptroller", type: "address" },
          { indexed: false, name: "newComptroller", type: "address" },
        ],
        name: "NewComptroller",
        type: "event",
        signature:
          "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldInterestRateModel", type: "address" },
          { indexed: false, name: "newInterestRateModel", type: "address" },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
        signature:
          "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldReserveFactorMantissa", type: "uint256" },
          { indexed: false, name: "newReserveFactorMantissa", type: "uint256" },
        ],
        name: "NewReserveFactor",
        type: "event",
        signature:
          "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "admin", type: "address" },
          { indexed: false, name: "reduceAmount", type: "uint256" },
          { indexed: false, name: "newTotalReserves", type: "uint256" },
        ],
        name: "ReservesReduced",
        type: "event",
        signature:
          "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "error", type: "uint256" },
          { indexed: false, name: "info", type: "uint256" },
          { indexed: false, name: "detail", type: "uint256" },
        ],
        name: "Failure",
        type: "event",
        signature:
          "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "amount", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
        signature:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "owner", type: "address" },
          { indexed: true, name: "spender", type: "address" },
          { indexed: false, name: "amount", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
        signature:
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      },
    ],
    cEther: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x06fdde03",
      },
      {
        constant: false,
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x095ea7b3",
      },
      {
        constant: false,
        inputs: [],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
        signature: "0x1249c58b",
      },
      {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x173b9904",
      },
      {
        constant: false,
        inputs: [{ name: "account", type: "address" }],
        name: "borrowBalanceCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x17bfdfbc",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x18160ddd",
      },
      {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x182df0f5",
      },
      {
        constant: false,
        inputs: [
          { name: "src", type: "address" },
          { name: "dst", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x23b872dd",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x26782247",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x313ce567",
      },
      {
        constant: false,
        inputs: [{ name: "owner", type: "address" }],
        name: "balanceOfUnderlying",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x3af9e669",
      },
      {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x3b1d21a2",
      },
      {
        constant: false,
        inputs: [{ name: "newComptroller", type: "address" }],
        name: "_setComptroller",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x4576b5db",
      },
      {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x47bd3718",
      },
      {
        constant: false,
        inputs: [],
        name: "repayBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
        signature: "0x4e4d9fea",
      },
      {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x5fe3b567",
      },
      {
        constant: false,
        inputs: [{ name: "reduceAmount", type: "uint256" }],
        name: "_reduceReserves",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x601a0bf1",
      },
      {
        constant: true,
        inputs: [],
        name: "initialExchangeRateMantissa",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x675d972c",
      },
      {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6c540baf",
      },
      {
        constant: true,
        inputs: [{ name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x70a08231",
      },
      {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x73acee98",
      },
      {
        constant: false,
        inputs: [{ name: "redeemAmount", type: "uint256" }],
        name: "redeemUnderlying",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x852a12e3",
      },
      {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x8f840ddd",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95d89b41",
      },
      {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "borrowBalanceStored",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95dd9193",
      },
      {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa6afed95",
      },
      {
        constant: false,
        inputs: [
          { name: "dst", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa9059cbb",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xaa5af0fd",
      },
      {
        constant: false,
        inputs: [
          { name: "borrower", type: "address" },
          { name: "cTokenCollateral", type: "address" },
        ],
        name: "liquidateBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
        signature: "0xaae40a2a",
      },
      {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xae9d70b0",
      },
      {
        constant: false,
        inputs: [
          { name: "liquidator", type: "address" },
          { name: "borrower", type: "address" },
          { name: "seizeTokens", type: "uint256" },
        ],
        name: "seize",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb2a02ff1",
      },
      {
        constant: false,
        inputs: [{ name: "newPendingAdmin", type: "address" }],
        name: "_setPendingAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb71d1a0c",
      },
      {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xbd6d894d",
      },
      {
        constant: true,
        inputs: [{ name: "account", type: "address" }],
        name: "getAccountSnapshot",
        outputs: [
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
          { name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xc37f68e2",
      },
      {
        constant: false,
        inputs: [{ name: "borrowAmount", type: "uint256" }],
        name: "borrow",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xc5ebeaec",
      },
      {
        constant: false,
        inputs: [{ name: "redeemTokens", type: "uint256" }],
        name: "redeem",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xdb006a75",
      },
      {
        constant: true,
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdd62ed3e",
      },
      {
        constant: false,
        inputs: [{ name: "borrower", type: "address" }],
        name: "repayBorrowBehalf",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
        signature: "0xe5974619",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe9c714f2",
      },
      {
        constant: false,
        inputs: [{ name: "newInterestRateModel", type: "address" }],
        name: "_setInterestRateModel",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xf2b3abbd",
      },
      {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf3fdb15a",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf851a440",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf8f9da28",
      },
      {
        constant: false,
        inputs: [{ name: "newReserveFactorMantissa", type: "uint256" }],
        name: "_setReserveFactor",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xfca7820b",
      },
      {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xfe9c44ae",
      },
      {
        inputs: [
          { name: "comptroller_", type: "address" },
          { name: "interestRateModel_", type: "address" },
          { name: "initialExchangeRateMantissa_", type: "uint256" },
          { name: "name_", type: "string" },
          { name: "symbol_", type: "string" },
          { name: "decimals_", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      { payable: true, stateMutability: "payable", type: "fallback" },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "interestAccumulated", type: "uint256" },
          { indexed: false, name: "borrowIndex", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "AccrueInterest",
        type: "event",
        signature:
          "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "minter", type: "address" },
          { indexed: false, name: "mintAmount", type: "uint256" },
          { indexed: false, name: "mintTokens", type: "uint256" },
        ],
        name: "Mint",
        type: "event",
        signature:
          "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "redeemer", type: "address" },
          { indexed: false, name: "redeemAmount", type: "uint256" },
          { indexed: false, name: "redeemTokens", type: "uint256" },
        ],
        name: "Redeem",
        type: "event",
        signature:
          "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "borrowAmount", type: "uint256" },
          { indexed: false, name: "accountBorrows", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "Borrow",
        type: "event",
        signature:
          "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "payer", type: "address" },
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "repayAmount", type: "uint256" },
          { indexed: false, name: "accountBorrows", type: "uint256" },
          { indexed: false, name: "totalBorrows", type: "uint256" },
        ],
        name: "RepayBorrow",
        type: "event",
        signature:
          "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "liquidator", type: "address" },
          { indexed: false, name: "borrower", type: "address" },
          { indexed: false, name: "repayAmount", type: "uint256" },
          { indexed: false, name: "cTokenCollateral", type: "address" },
          { indexed: false, name: "seizeTokens", type: "uint256" },
        ],
        name: "LiquidateBorrow",
        type: "event",
        signature:
          "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldPendingAdmin", type: "address" },
          { indexed: false, name: "newPendingAdmin", type: "address" },
        ],
        name: "NewPendingAdmin",
        type: "event",
        signature:
          "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldAdmin", type: "address" },
          { indexed: false, name: "newAdmin", type: "address" },
        ],
        name: "NewAdmin",
        type: "event",
        signature:
          "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldComptroller", type: "address" },
          { indexed: false, name: "newComptroller", type: "address" },
        ],
        name: "NewComptroller",
        type: "event",
        signature:
          "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldInterestRateModel", type: "address" },
          { indexed: false, name: "newInterestRateModel", type: "address" },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
        signature:
          "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldReserveFactorMantissa", type: "uint256" },
          { indexed: false, name: "newReserveFactorMantissa", type: "uint256" },
        ],
        name: "NewReserveFactor",
        type: "event",
        signature:
          "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "admin", type: "address" },
          { indexed: false, name: "reduceAmount", type: "uint256" },
          { indexed: false, name: "newTotalReserves", type: "uint256" },
        ],
        name: "ReservesReduced",
        type: "event",
        signature:
          "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "error", type: "uint256" },
          { indexed: false, name: "info", type: "uint256" },
          { indexed: false, name: "detail", type: "uint256" },
        ],
        name: "Failure",
        type: "event",
        signature:
          "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "amount", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
        signature:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "owner", type: "address" },
          { indexed: true, name: "spender", type: "address" },
          { indexed: false, name: "amount", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
        signature:
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      },
    ],
    COMP: [
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
        signature:
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "delegator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "fromDelegate",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "toDelegate",
            type: "address",
          },
        ],
        name: "DelegateChanged",
        type: "event",
        signature:
          "0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "previousBalance",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newBalance",
            type: "uint256",
          },
        ],
        name: "DelegateVotesChanged",
        type: "event",
        signature:
          "0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          { indexed: true, internalType: "address", name: "to", type: "address" },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
        signature:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      },
      {
        constant: true,
        inputs: [],
        name: "DELEGATION_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xe7a324dc",
      },
      {
        constant: true,
        inputs: [],
        name: "DOMAIN_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x20606b70",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdd62ed3e",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "rawAmount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x095ea7b3",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x70a08231",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "uint32", name: "", type: "uint32" },
        ],
        name: "checkpoints",
        outputs: [
          { internalType: "uint32", name: "fromBlock", type: "uint32" },
          { internalType: "uint96", name: "votes", type: "uint96" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf1127ed8",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x313ce567",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
        name: "delegate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x5c19a95c",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "delegatee", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "delegateBySig",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xc3cda520",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "delegates",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x587cde1e",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getCurrentVotes",
        outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xb4b5ea57",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "blockNumber", type: "uint256" },
        ],
        name: "getPriorVotes",
        outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x782d6fe1",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x06fdde03",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "nonces",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x7ecebe00",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "numCheckpoints",
        outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6fcfff45",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x95d89b41",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x18160ddd",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "rawAmount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa9059cbb",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "rawAmount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x23b872dd",
      },
    ],
    // GovernorAlpha: [{"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"comp_","type":"address"},{"internalType":"address","name":"guardian_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event","signature":"0x789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event","signature":"0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event","signature":"0x712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event","signature":"0x9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"support","type":"bool"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"}],"name":"VoteCast","type":"event","signature":"0x877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c46"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdeaaa7cc"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x20606b70"},{"constant":false,"inputs":[],"name":"__abdicate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x760fbc13"},{"constant":false,"inputs":[],"name":"__acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb9a61961"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__executeSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x21f43e42"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__queueSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x91500671"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40e58ee5"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x15373e3d"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4634c61f"},{"constant":true,"inputs":[],"name":"comp","outputs":[{"internalType":"contract CompInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x109d0af8"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xfe0d94c1"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x328dd982"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorAlpha.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe23a9a52"},{"constant":true,"inputs":[],"name":"guardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x452a9320"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x17977c61"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda35c664"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x7bdbe4d0"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0xb58131b0"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x013cf08b"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xda95691a"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xddf0b009"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x24bc1a64"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorAlpha.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3e4f49e6"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd33219b4"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x3932abb1"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x02a251a3"}],
    GovernorBravo: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newAdmin",
            type: "address",
          },
        ],
        name: "NewAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldImplementation",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newImplementation",
            type: "address",
          },
        ],
        name: "NewImplementation",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldPendingAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newPendingAdmin",
            type: "address",
          },
        ],
        name: "NewPendingAdmin",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "ProposalCanceled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address[]",
            name: "targets",
            type: "address[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "string[]",
            name: "signatures",
            type: "string[]",
          },
          {
            indexed: false,
            internalType: "bytes[]",
            name: "calldatas",
            type: "bytes[]",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        name: "ProposalCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "ProposalExecuted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "eta",
            type: "uint256",
          },
        ],
        name: "ProposalQueued",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldProposalThreshold",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newProposalThreshold",
            type: "uint256",
          },
        ],
        name: "ProposalThresholdSet",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "voter",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint8",
            name: "support",
            type: "uint8",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "reason",
            type: "string",
          },
        ],
        name: "VoteCast",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldVotingDelay",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newVotingDelay",
            type: "uint256",
          },
        ],
        name: "VotingDelaySet",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldVotingPeriod",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newVotingPeriod",
            type: "uint256",
          },
        ],
        name: "VotingPeriodSet",
        type: "event",
      },
      {
        constant: true,
        inputs: [],
        name: "BALLOT_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "DOMAIN_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MAX_PROPOSAL_THRESHOLD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MAX_VOTING_DELAY",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MAX_VOTING_PERIOD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MIN_PROPOSAL_THRESHOLD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MIN_VOTING_DELAY",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MIN_VOTING_PERIOD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "governorAlpha", type: "address" },
        ],
        name: "_initiate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "newPendingAdmin", type: "address" },
        ],
        name: "_setPendingAdmin",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newProposalThreshold",
            type: "uint256",
          },
        ],
        name: "_setProposalThreshold",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "newVotingDelay", type: "uint256" },
        ],
        name: "_setVotingDelay",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "newVotingPeriod", type: "uint256" },
        ],
        name: "_setVotingPeriod",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "cancel",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
          { internalType: "uint8", name: "support", type: "uint8" },
        ],
        name: "castVote",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
          { internalType: "uint8", name: "support", type: "uint8" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "castVoteBySig",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
          { internalType: "uint8", name: "support", type: "uint8" },
          { internalType: "string", name: "reason", type: "string" },
        ],
        name: "castVoteWithReason",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "comp",
        outputs: [
          { internalType: "contract CompInterface", name: "", type: "address" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "execute",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "getActions",
        outputs: [
          { internalType: "address[]", name: "targets", type: "address[]" },
          { internalType: "uint256[]", name: "values", type: "uint256[]" },
          { internalType: "string[]", name: "signatures", type: "string[]" },
          { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
          { internalType: "address", name: "voter", type: "address" },
        ],
        name: "getReceipt",
        outputs: [
          {
            components: [
              { internalType: "bool", name: "hasVoted", type: "bool" },
              { internalType: "uint8", name: "support", type: "uint8" },
              { internalType: "uint96", name: "votes", type: "uint96" },
            ],
            internalType: "struct GovernorBravoDelegateStorageV1.Receipt",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "implementation",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "initialProposalId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "timelock_", type: "address" },
          { internalType: "address", name: "comp_", type: "address" },
          { internalType: "uint256", name: "votingPeriod_", type: "uint256" },
          { internalType: "uint256", name: "votingDelay_", type: "uint256" },
          {
            internalType: "uint256",
            name: "proposalThreshold_",
            type: "uint256",
          },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "latestProposalIds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "proposalCount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "proposalMaxOperations",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "proposalThreshold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "proposals",
        outputs: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "proposer", type: "address" },
          { internalType: "uint256", name: "eta", type: "uint256" },
          { internalType: "uint256", name: "startBlock", type: "uint256" },
          { internalType: "uint256", name: "endBlock", type: "uint256" },
          { internalType: "uint256", name: "forVotes", type: "uint256" },
          { internalType: "uint256", name: "againstVotes", type: "uint256" },
          { internalType: "uint256", name: "abstainVotes", type: "uint256" },
          { internalType: "bool", name: "canceled", type: "bool" },
          { internalType: "bool", name: "executed", type: "bool" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "targets", type: "address[]" },
          { internalType: "uint256[]", name: "values", type: "uint256[]" },
          { internalType: "string[]", name: "signatures", type: "string[]" },
          { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
          { internalType: "string", name: "description", type: "string" },
        ],
        name: "propose",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "queue",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "quorumVotes",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "state",
        outputs: [
          {
            internalType: "enum GovernorBravoDelegateStorageV1.ProposalState",
            name: "",
            type: "uint8",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "timelock",
        outputs: [
          {
            internalType: "contract TimelockInterface",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "votingDelay",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "votingPeriod",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    Comptroller: [
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x26782247",
      },
      {
        constant: false,
        inputs: [{ name: "newPendingAdmin", type: "address" }],
        name: "_setPendingAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb71d1a0c",
      },
      {
        constant: true,
        inputs: [],
        name: "comptrollerImplementation",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xbb82aa5e",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptImplementation",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xc1e80334",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingComptrollerImplementation",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdcfbc0c7",
      },
      {
        constant: false,
        inputs: [{ name: "newPendingImplementation", type: "address" }],
        name: "_setPendingImplementation",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe992a041",
      },
      {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe9c714f2",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf851a440",
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      { payable: true, stateMutability: "payable", type: "fallback" },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldPendingImplementation", type: "address" },
          { indexed: false, name: "newPendingImplementation", type: "address" },
        ],
        name: "NewPendingImplementation",
        type: "event",
        signature:
          "0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldImplementation", type: "address" },
          { indexed: false, name: "newImplementation", type: "address" },
        ],
        name: "NewImplementation",
        type: "event",
        signature:
          "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldPendingAdmin", type: "address" },
          { indexed: false, name: "newPendingAdmin", type: "address" },
        ],
        name: "NewPendingAdmin",
        type: "event",
        signature:
          "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "oldAdmin", type: "address" },
          { indexed: false, name: "newAdmin", type: "address" },
        ],
        name: "NewAdmin",
        type: "event",
        signature:
          "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "error", type: "uint256" },
          { indexed: false, name: "info", type: "uint256" },
          { indexed: false, name: "detail", type: "uint256" },
        ],
        name: "Failure",
        type: "event",
        signature:
          "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "contributor", type: "address" },
        ],
        name: "updateContributorRewards",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x741b2525",
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "action",
            type: "string",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "pauseState",
            type: "bool",
          },
        ],
        name: "ActionPaused",
        type: "event",
        signature:
          "0xef159d9a32b2472e32b098f954f3ce62d232939f1c207070b584df1814de2de0",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "string",
            name: "action",
            type: "string",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "pauseState",
            type: "bool",
          },
        ],
        name: "ActionPaused",
        type: "event",
        signature:
          "0x71aec636243f9709bb0007ae15e9afb8150ab01716d75fd7573be5cc096e03b0",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCompAccrued",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCompAccrued",
            type: "uint256",
          },
        ],
        name: "CompAccruedAdjusted",
        type: "event",
        signature:
          "0x4a5c134e28b537a76546993ea37f3b60d9190476df7356d3842aa40902e20f04",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newSpeed",
            type: "uint256",
          },
        ],
        name: "CompBorrowSpeedUpdated",
        type: "event",
        signature:
          "0x20af8e791cc98f74b2d7a391c80980ca8e5aebf3d4060bf581997b6acae2e537",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "CompGranted",
        type: "event",
        signature:
          "0x98b2f82a3a07f223a0be64b3d0f47711c64dccd1feafb94aa28156b38cd9695c",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCompReceivable",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCompReceivable",
            type: "uint256",
          },
        ],
        name: "CompReceivableUpdated",
        type: "event",
        signature:
          "0x17fea09d9a7ca41b2f9f9118f18f44848a62e9c70d55dd4385131eb2cf1b7e47",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newSpeed",
            type: "uint256",
          },
        ],
        name: "CompSupplySpeedUpdated",
        type: "event",
        signature:
          "0xdeafccd0c0b768b2529f7dcbbe58e155d6023059150b7490ed4535cc3744b92d",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newSpeed",
            type: "uint256",
          },
        ],
        name: "ContributorCompSpeedUpdated",
        type: "event",
        signature:
          "0x386537fa92edc3319af95f1f904dcf1900021e4f3f4e08169a577a09076e66b3",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compDelta",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compBorrowIndex",
            type: "uint256",
          },
        ],
        name: "DistributedBorrowerComp",
        type: "event",
        signature:
          "0x1fc3ecc087d8d2d15e23d0032af5a47059c3892d003d8e139fdcb6bb327c99a6",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "supplier",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compDelta",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "compSupplyIndex",
            type: "uint256",
          },
        ],
        name: "DistributedSupplierComp",
        type: "event",
        signature:
          "0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "error",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "info",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "detail",
            type: "uint256",
          },
        ],
        name: "Failure",
        type: "event",
        signature:
          "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "MarketEntered",
        type: "event",
        signature:
          "0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "MarketExited",
        type: "event",
        signature:
          "0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
        ],
        name: "MarketListed",
        type: "event",
        signature:
          "0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newBorrowCap",
            type: "uint256",
          },
        ],
        name: "NewBorrowCap",
        type: "event",
        signature:
          "0x6f1951b2aad10f3fc81b86d91105b413a5b3f847a34bbc5ce1904201b14438f6",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldBorrowCapGuardian",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newBorrowCapGuardian",
            type: "address",
          },
        ],
        name: "NewBorrowCapGuardian",
        type: "event",
        signature:
          "0xeda98690e518e9a05f8ec6837663e188211b2da8f4906648b323f2c1d4434e29",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCloseFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCloseFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewCloseFactor",
        type: "event",
        signature:
          "0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract CToken",
            name: "cToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldCollateralFactorMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newCollateralFactorMantissa",
            type: "uint256",
          },
        ],
        name: "NewCollateralFactor",
        type: "event",
        signature:
          "0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "oldLiquidationIncentiveMantissa",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newLiquidationIncentiveMantissa",
            type: "uint256",
          },
        ],
        name: "NewLiquidationIncentive",
        type: "event",
        signature:
          "0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "oldPauseGuardian",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newPauseGuardian",
            type: "address",
          },
        ],
        name: "NewPauseGuardian",
        type: "event",
        signature:
          "0x0613b6ee6a04f0d09f390e4d9318894b9f6ac7fd83897cd8d18896ba579c401e",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract PriceOracle",
            name: "oldPriceOracle",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract PriceOracle",
            name: "newPriceOracle",
            type: "address",
          },
        ],
        name: "NewPriceOracle",
        type: "event",
        signature:
          "0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract Unitroller",
            name: "unitroller",
            type: "address",
          },
        ],
        name: "_become",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x1d504dc6",
      },
      {
        constant: true,
        inputs: [],
        name: "_borrowGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xe6653f3d",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "_grantComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x27efe3cb",
      },
      {
        constant: true,
        inputs: [],
        name: "_mintGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x3c94786f",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "newBorrowCapGuardian",
            type: "address",
          },
        ],
        name: "_setBorrowCapGuardian",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x391957d7",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          { internalType: "bool", name: "state", type: "bool" },
        ],
        name: "_setBorrowPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x18c882a5",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newCloseFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setCloseFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x317b0b77",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          {
            internalType: "uint256",
            name: "newCollateralFactorMantissa",
            type: "uint256",
          },
        ],
        name: "_setCollateralFactor",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe4028eee",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "supplySpeeds", type: "uint256[]" },
          { internalType: "uint256[]", name: "borrowSpeeds", type: "uint256[]" },
        ],
        name: "_setCompSpeeds",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa8b43948",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "contributor", type: "address" },
          { internalType: "uint256", name: "compSpeed", type: "uint256" },
        ],
        name: "_setContributorCompSpeed",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x598ee1cb",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "newLiquidationIncentiveMantissa",
            type: "uint256",
          },
        ],
        name: "_setLiquidationIncentive",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x4fd42e17",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "newBorrowCaps", type: "uint256[]" },
        ],
        name: "_setMarketBorrowCaps",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x607ef6c1",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          { internalType: "bool", name: "state", type: "bool" },
        ],
        name: "_setMintPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x3bcf7ec1",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "newPauseGuardian", type: "address" },
        ],
        name: "_setPauseGuardian",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x5f5af1aa",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract PriceOracle",
            name: "newOracle",
            type: "address",
          },
        ],
        name: "_setPriceOracle",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x55ee1fe1",
      },
      {
        constant: false,
        inputs: [{ internalType: "bool", name: "state", type: "bool" }],
        name: "_setSeizePaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x2d70db78",
      },
      {
        constant: false,
        inputs: [{ internalType: "bool", name: "state", type: "bool" }],
        name: "_setTransferPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x8ebf6364",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "_supportMarket",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa76b3fda",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "accountAssets",
        outputs: [{ internalType: "contract CToken", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdce15449",
      },
      {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf851a440",
      },
      {
        constant: true,
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "allMarkets",
        outputs: [{ internalType: "contract CToken", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x52d84d1e",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xda3d454c",
      },
      {
        constant: true,
        inputs: [],
        name: "borrowCapGuardian",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x21af4569",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "borrowCaps",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x4a584432",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "borrowGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6d154ea5",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "borrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x5c778605",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "checkMembership",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x929fe9a1",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "holder", type: "address" },
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
        ],
        name: "claimComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x1c3db2e0",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "holders", type: "address[]" },
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
          { internalType: "bool", name: "borrowers", type: "bool" },
          { internalType: "bool", name: "suppliers", type: "bool" },
        ],
        name: "claimComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x6810dfa6",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "holder", type: "address" }],
        name: "claimComp",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xe9af0292",
      },
      {
        constant: true,
        inputs: [],
        name: "closeFactorMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xe8755446",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compAccrued",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xcc7ebdc4",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compBorrowSpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf4a433c0",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compBorrowState",
        outputs: [
          { internalType: "uint224", name: "index", type: "uint224" },
          { internalType: "uint32", name: "block", type: "uint32" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x8c57804e",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "compBorrowerIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xca0af043",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compContributorSpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x986ab838",
      },
      {
        constant: true,
        inputs: [],
        name: "compInitialIndex",
        outputs: [{ internalType: "uint224", name: "", type: "uint224" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xa7f0e231",
      },
      {
        constant: true,
        inputs: [],
        name: "compRate",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xaa900754",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compReceivable",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x85b7beb8",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compSpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x1d7b33d7",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "compSupplierIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xb21be7fd",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compSupplySpeeds",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6aa875b5",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "compSupplyState",
        outputs: [
          { internalType: "uint224", name: "index", type: "uint224" },
          { internalType: "uint32", name: "block", type: "uint32" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x6b79c38d",
      },
      {
        constant: true,
        inputs: [],
        name: "comptrollerImplementation",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xbb82aa5e",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "cTokens", type: "address[]" },
        ],
        name: "enterMarkets",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xc2998238",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenAddress", type: "address" },
        ],
        name: "exitMarket",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xede4edd0",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "affectedUsers", type: "address[]" },
          { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
        ],
        name: "fixBadAccruals",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x16b95e8f",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAccountLiquidity",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x5ec88c79",
      },
      {
        constant: true,
        inputs: [],
        name: "getAllMarkets",
        outputs: [
          { internalType: "contract CToken[]", name: "", type: "address[]" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xb0772d0b",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getAssetsIn",
        outputs: [
          { internalType: "contract CToken[]", name: "", type: "address[]" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xabfceffc",
      },
      {
        constant: true,
        inputs: [],
        name: "getBlockNumber",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x42cbb15c",
      },
      {
        constant: true,
        inputs: [],
        name: "getCompAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x9d1b5a0a",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "address", name: "cTokenModify", type: "address" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
          { internalType: "uint256", name: "borrowAmount", type: "uint256" },
        ],
        name: "getHypotheticalAccountLiquidity",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x4e79238f",
      },
      {
        constant: true,
        inputs: [],
        name: "isComptroller",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x007e3dd2",
      },
      {
        constant: true,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "isDeprecated",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x94543c15",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "lastContributorBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xbea6b8b8",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "liquidateBorrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x5fc7e71e",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "liquidateBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x47ef3b3b",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
        ],
        name: "liquidateCalculateSeizeTokens",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xc488847b",
      },
      {
        constant: true,
        inputs: [],
        name: "liquidationIncentiveMantissa",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x4ada90af",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "markets",
        outputs: [
          { internalType: "bool", name: "isListed", type: "bool" },
          {
            internalType: "uint256",
            name: "collateralFactorMantissa",
            type: "uint256",
          },
          { internalType: "bool", name: "isComped", type: "bool" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x8e8f294b",
      },
      {
        constant: true,
        inputs: [],
        name: "maxAssets",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x94b2294b",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "minter", type: "address" },
          { internalType: "uint256", name: "mintAmount", type: "uint256" },
        ],
        name: "mintAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x4ef4c3e1",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "mintGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x731f0c2b",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "minter", type: "address" },
          { internalType: "uint256", name: "actualMintAmount", type: "uint256" },
          { internalType: "uint256", name: "mintTokens", type: "uint256" },
        ],
        name: "mintVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x41c728b9",
      },
      {
        constant: true,
        inputs: [],
        name: "oracle",
        outputs: [
          { internalType: "contract PriceOracle", name: "", type: "address" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x7dc0d1d0",
      },
      {
        constant: true,
        inputs: [],
        name: "pauseGuardian",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x24a3d622",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x26782247",
      },
      {
        constant: true,
        inputs: [],
        name: "pendingComptrollerImplementation",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xdcfbc0c7",
      },
      {
        constant: true,
        inputs: [],
        name: "proposal65FixExecuted",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xf00a7a92",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "redeemer", type: "address" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeemAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xeabe7d91",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "redeemer", type: "address" },
          { internalType: "uint256", name: "redeemAmount", type: "uint256" },
          { internalType: "uint256", name: "redeemTokens", type: "uint256" },
        ],
        name: "redeemVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x51dff989",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "payer", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "repayAmount", type: "uint256" },
        ],
        name: "repayBorrowAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x24008a62",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "payer", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "actualRepayAmount", type: "uint256" },
          { internalType: "uint256", name: "borrowerIndex", type: "uint256" },
        ],
        name: "repayBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x1ededc91",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seizeAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xd02f7351",
      },
      {
        constant: true,
        inputs: [],
        name: "seizeGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0xac0b0bb7",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cTokenCollateral", type: "address" },
          { internalType: "address", name: "cTokenBorrowed", type: "address" },
          { internalType: "address", name: "liquidator", type: "address" },
          { internalType: "address", name: "borrower", type: "address" },
          { internalType: "uint256", name: "seizeTokens", type: "uint256" },
        ],
        name: "seizeVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x6d35bf91",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "transferTokens", type: "uint256" },
        ],
        name: "transferAllowed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xbdcdc258",
      },
      {
        constant: true,
        inputs: [],
        name: "transferGuardianPaused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
        signature: "0x87f76303",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "cToken", type: "address" },
          { internalType: "address", name: "src", type: "address" },
          { internalType: "address", name: "dst", type: "address" },
          { internalType: "uint256", name: "transferTokens", type: "uint256" },
        ],
        name: "transferVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x6a56947e",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "contributor", type: "address" },
        ],
        name: "updateContributorRewards",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x741b2525",
      },
    ],
    PriceFeed: ["function price(string symbol) returns (uint256)"],
    CompoundLens: [
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
          { internalType: "address payable", name: "account", type: "address" },
        ],
        name: "cTokenBalances",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "uint256", name: "balanceOf", type: "uint256" },
              {
                internalType: "uint256",
                name: "borrowBalanceCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balanceOfUnderlying",
                type: "uint256",
              },
              { internalType: "uint256", name: "tokenBalance", type: "uint256" },
              {
                internalType: "uint256",
                name: "tokenAllowance",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenBalances",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
          { internalType: "address payable", name: "account", type: "address" },
        ],
        name: "cTokenBalancesAll",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              { internalType: "uint256", name: "balanceOf", type: "uint256" },
              {
                internalType: "uint256",
                name: "borrowBalanceCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balanceOfUnderlying",
                type: "uint256",
              },
              { internalType: "uint256", name: "tokenBalance", type: "uint256" },
              {
                internalType: "uint256",
                name: "tokenAllowance",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenBalances[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "cTokenMetadata",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              {
                internalType: "uint256",
                name: "exchangeRateCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "supplyRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "reserveFactorMantissa",
                type: "uint256",
              },
              { internalType: "uint256", name: "totalBorrows", type: "uint256" },
              { internalType: "uint256", name: "totalReserves", type: "uint256" },
              { internalType: "uint256", name: "totalSupply", type: "uint256" },
              { internalType: "uint256", name: "totalCash", type: "uint256" },
              { internalType: "bool", name: "isListed", type: "bool" },
              {
                internalType: "uint256",
                name: "collateralFactorMantissa",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "underlyingAssetAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "cTokenDecimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "underlyingDecimals",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenMetadata",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
        ],
        name: "cTokenMetadataAll",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              {
                internalType: "uint256",
                name: "exchangeRateCurrent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "supplyRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowRatePerBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "reserveFactorMantissa",
                type: "uint256",
              },
              { internalType: "uint256", name: "totalBorrows", type: "uint256" },
              { internalType: "uint256", name: "totalReserves", type: "uint256" },
              { internalType: "uint256", name: "totalSupply", type: "uint256" },
              { internalType: "uint256", name: "totalCash", type: "uint256" },
              { internalType: "bool", name: "isListed", type: "bool" },
              {
                internalType: "uint256",
                name: "collateralFactorMantissa",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "underlyingAssetAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "cTokenDecimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "underlyingDecimals",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenMetadata[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract CToken", name: "cToken", type: "address" },
        ],
        name: "cTokenUnderlyingPrice",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              {
                internalType: "uint256",
                name: "underlyingPrice",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenUnderlyingPrice",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract CToken[]",
            name: "cTokens",
            type: "address[]",
          },
        ],
        name: "cTokenUnderlyingPriceAll",
        outputs: [
          {
            components: [
              { internalType: "address", name: "cToken", type: "address" },
              {
                internalType: "uint256",
                name: "underlyingPrice",
                type: "uint256",
              },
            ],
            internalType: "struct CompoundLens.CTokenUnderlyingPrice[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "contract ComptrollerLensInterface",
            name: "comptroller",
            type: "address",
          },
          { internalType: "address", name: "account", type: "address" },
        ],
        name: "getAccountLimits",
        outputs: [
          {
            components: [
              {
                internalType: "contract CToken[]",
                name: "markets",
                type: "address[]",
              },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              { internalType: "uint256", name: "shortfall", type: "uint256" },
            ],
            internalType: "struct CompoundLens.AccountLimits",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "contract Comp", name: "comp", type: "address" },
          { internalType: "address", name: "account", type: "address" },
        ],
        name: "getCompBalanceMetadata",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "votes", type: "uint256" },
              { internalType: "address", name: "delegate", type: "address" },
            ],
            internalType: "struct CompoundLens.CompBalanceMetadata",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "contract Comp", name: "comp", type: "address" },
          {
            internalType: "contract ComptrollerLensInterface",
            name: "comptroller",
            type: "address",
          },
          { internalType: "address", name: "account", type: "address" },
        ],
        name: "getCompBalanceMetadataExt",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "votes", type: "uint256" },
              { internalType: "address", name: "delegate", type: "address" },
              { internalType: "uint256", name: "allocated", type: "uint256" },
            ],
            internalType: "struct CompoundLens.CompBalanceMetadataExt",
            name: "",
            type: "tuple",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "contract Comp", name: "comp", type: "address" },
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint32[]", name: "blockNumbers", type: "uint32[]" },
        ],
        name: "getCompVotes",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "blockNumber", type: "uint256" },
              { internalType: "uint256", name: "votes", type: "uint256" },
            ],
            internalType: "struct CompoundLens.CompVotes[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract GovernorBravoInterface",
            name: "governor",
            type: "address",
          },
          { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
        ],
        name: "getGovBravoProposals",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "proposalId", type: "uint256" },
              { internalType: "address", name: "proposer", type: "address" },
              { internalType: "uint256", name: "eta", type: "uint256" },
              { internalType: "address[]", name: "targets", type: "address[]" },
              { internalType: "uint256[]", name: "values", type: "uint256[]" },
              { internalType: "string[]", name: "signatures", type: "string[]" },
              { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
              { internalType: "uint256", name: "startBlock", type: "uint256" },
              { internalType: "uint256", name: "endBlock", type: "uint256" },
              { internalType: "uint256", name: "forVotes", type: "uint256" },
              { internalType: "uint256", name: "againstVotes", type: "uint256" },
              { internalType: "uint256", name: "abstainVotes", type: "uint256" },
              { internalType: "bool", name: "canceled", type: "bool" },
              { internalType: "bool", name: "executed", type: "bool" },
            ],
            internalType: "struct CompoundLens.GovBravoProposal[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract GovernorBravoInterface",
            name: "governor",
            type: "address",
          },
          { internalType: "address", name: "voter", type: "address" },
          { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
        ],
        name: "getGovBravoReceipts",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "proposalId", type: "uint256" },
              { internalType: "bool", name: "hasVoted", type: "bool" },
              { internalType: "uint8", name: "support", type: "uint8" },
              { internalType: "uint96", name: "votes", type: "uint96" },
            ],
            internalType: "struct CompoundLens.GovBravoReceipt[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract GovernorAlpha",
            name: "governor",
            type: "address",
          },
          { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
        ],
        name: "getGovProposals",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "proposalId", type: "uint256" },
              { internalType: "address", name: "proposer", type: "address" },
              { internalType: "uint256", name: "eta", type: "uint256" },
              { internalType: "address[]", name: "targets", type: "address[]" },
              { internalType: "uint256[]", name: "values", type: "uint256[]" },
              { internalType: "string[]", name: "signatures", type: "string[]" },
              { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
              { internalType: "uint256", name: "startBlock", type: "uint256" },
              { internalType: "uint256", name: "endBlock", type: "uint256" },
              { internalType: "uint256", name: "forVotes", type: "uint256" },
              { internalType: "uint256", name: "againstVotes", type: "uint256" },
              { internalType: "bool", name: "canceled", type: "bool" },
              { internalType: "bool", name: "executed", type: "bool" },
            ],
            internalType: "struct CompoundLens.GovProposal[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "contract GovernorAlpha",
            name: "governor",
            type: "address",
          },
          { internalType: "address", name: "voter", type: "address" },
          { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
        ],
        name: "getGovReceipts",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "proposalId", type: "uint256" },
              { internalType: "bool", name: "hasVoted", type: "bool" },
              { internalType: "bool", name: "support", type: "bool" },
              { internalType: "uint96", name: "votes", type: "uint96" },
            ],
            internalType: "struct CompoundLens.GovReceipt[]",
            name: "",
            type: "tuple[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  };
  