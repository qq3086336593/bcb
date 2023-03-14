// const BCB_PRESALE_ADDRESS =  "0xfe75331ff17F1950FbB26f28Fab6Fdbd6F6D4923" // TODO ceshi
// const usdtAddr = '0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684'; // TODO ceshi

const BCB_PRESALE_ADDRESS = "0xCc79BFeA2c0F312094A718C3297B6AC70260348B";
const usdtAddr = '0x55d398326f99059fF775485246999027B3197955';

const BCB_PRESALE_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_tokenAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_usdtAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"joined","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referLevel1ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referLevel2ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"salePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"uncliamed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTotalPaided","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAllETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

const TOKEN_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
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
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
 let selectedAccount;

let web3;

let minersContract;
let usdtContract;

/**
 * Setup the orchestra
 */
async function init() {

    console.log("Initializing example");
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        web3 = window.web3;
        try {
            await ethereum.enable() // Request access
            let accounts = await web3.eth.getAccounts()
            selectedAccount = accounts[0]
        } catch (error) {
            // User denied account access...
            console.error(error)
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        let accounts = await web3.eth.getAccounts()
        selectedAccount = accounts[0]
    }
    minersContract = await new web3.eth.Contract(BCB_PRESALE_ABI, BCB_PRESALE_ADDRESS)
    usdtContract = await new web3.eth.Contract(TOKEN_ABI, usdtAddr)
    console.log(selectedAccount)
    var div1=document.getElementById("clip-link");
    div1.setAttribute("value",window.location.origin+"/index.html?ref="+selectedAccount)

    progressChange()

    updateUncliamed();
    updateInviteCount();
    updateTotalPaidedAmount();
    updateApproveStatus();
    setInterval(function(){
        updateUncliamed();
        updateInviteCount();
        updateTotalPaidedAmount();
        updateApproveStatus();
        progressChange();
    },3000);
}


function disabledApprove(){
    var approveButton=document.getElementById("approve");
    approveButton.setAttribute('style', 'pointer-events: none');
    approveButton.setAttribute('style', 'opacity: 0.2');
}

function enableBuy(){
    var buyButton=document.getElementById("buytoken");
    buyButton.removeAttribute("style");
}



 async function approve() {
    
    if (selectedAccount == null || selectedAccount == "") {
        await init();
        // alert("请链接钱包");
        // return null;
    }

    let _allowance = await allowance("USDT");
    if (_allowance >= "100000000000000000000") {
        disabledApprove();
        enableBuy()
        return;
    }

    usdtContract.methods.approve(BCB_PRESALE_ADDRESS, "101000000000000000000").send({ from: selectedAccount,gasPrice:"7500000000" }).then(result => {
        disabledApprove();
        enableBuy()
    }).catch((err) => {
        console.log(err)
    });

}



 async function allowance(token) {
    
    if (selectedAccount == null || selectedAccount == "") {
        await init();
        // alert("请链接钱包");
        //return null;
    }

    let contract;
    if (token == "USDT") {
        contract = usdtContract
    }
    return await contract.methods.allowance(selectedAccount, BCB_PRESALE_ADDRESS).call();
}

async function updateApproveStatus(){
    let _allowance = await allowance("USDT");
    console.log("updateApproveStatus allowance:",_allowance)
    if (_allowance >= "100000000000000000000") {
        disabledApprove();
        enableBuy()
        return;
    }
}


async function updateTotalPaidedAmount(){
    var totoalAmount = await minersContract.methods.usdtTotalPaided().call();    
    console.log("getTotalPaided:",totoalAmount/1e18);
    document.getElementById("totalPaidedAmount").innerText= (totoalAmount/1e18).toFixed(0)+"bnb";
    document.getElementById("totalPaidedAmount2").innerText= (totoalAmount/1e18).toFixed(0)+"bnb";
    if(document.getElementById("totalPaidedAmount3")!=null){
        document.getElementById("totalPaidedAmount3").innerText = (totoalAmount/1e18).toFixed(0)+"bnb";
    }
}

async function updateInviteCount(){
    var referCount = await minersContract.methods.referCounter(selectedAccount).call();    
    console.log("updateInviteCount:",referCount);
    document.getElementById("inviter").innerText= referCount;
}

async function updateUncliamed(){
    var uncliamedAmount = await minersContract.methods.uncliamed(selectedAccount).call();    
    console.log("updateUncliamed:",uncliamedAmount);
    document.getElementById("unclaimAmount").innerText= (uncliamedAmount/1e9).toFixed(0)+"WC";
}



 async function buyWithETH() {
    console.log("[buyWithETH] selectedAccount:",selectedAccount);
    if (selectedAccount == null || selectedAccount == "") {
        await init();
        // alert("请链接钱包");
        // return;
    }

    var joined = await minersContract.methods.joined(selectedAccount).call();
    console.log("buyWithETH",selectedAccount," is joined",joined);
    if(joined){
        alert("purchased successfully")
        return
    }

    minersContract.methods.buy(getRef()).send({ from: selectedAccount }).then(result => {
        alert("buy successfully")
    }).catch((err) => {
        //alert("取消购买")
        console.log("buy error:",err);
    });
}

function getRef() {
    var ref;
    var query = window.location.href.substr(window.location.href.indexOf("?")+1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == 'ref') {
            ref = pair[1];
        }
    }
    if (!web3.utils.isAddress(ref)) {
        ref = selectedAccount;
    }
    console.log("ref:"+ref);
    return ref;
}
async function copyLink(){
    if (selectedAccount == null) {
        // alert('请链接钱包');
        // return;
        await init();
    }

    var url =
        window.location.origin +
        '/index.html?ref=' +
        selectedAccount;

    copyToClipboard(url);

    alert('复制成功');
}

function copyToClipboard(text){
    var temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.setAttribute("value", text);
    temp.select();

    document.execCommand("copy");
    document.body.removeChild(temp);
}

async function progressChange() {
    var totoaAmount = await minersContract.methods.usdtTotalPaided().call();  
    totoaAmount=(totoaAmount/1e18).toFixed(0);

    let precent = totoaAmount * 100 / 500000;
    let strPrecent = precent+"%"
    console.log('strPrecent:',strPrecent);

    var progressdata1 = document.getElementById("progressdata1");
    var progressdata2 = document.getElementById("progressdata2");
    var progressdata3 = document.getElementById("progressdata3");

    var progress1 = document.getElementById("progress1");
    var progress2 = document.getElementById("progress2");
    var progress3 = document.getElementById("progress3");

    progress1.innerText = strPrecent;
    progress2.innerText = strPrecent;
    progress3.innerText = strPrecent;
    progressdata1.setAttribute('data-amount', precent)
    progressdata2.setAttribute('data-amount', precent)
    progressdata3.setAttribute('data-amount', precent)
    progressdata1.style.width = strPrecent
    progressdata2.style.width = strPrecent
    progressdata3.style.width = strPrecent
    console.log('progressdata1', progressdata1);
    console.log('progressdata2', progressdata2);
    console.log('progressdata3', progressdata3);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    console.log('selectedAccount', selectedAccount)
}

async function refreshAccountData() {
    await fetchAccountData(provider);
}


/**
 * Connect wallet button pressed.
 */
 async function onConnect() {
    init();
    await refreshAccountData();
    return true
}

/**
 * Disconnect wallet button pressed.
 */
 async function onDisconnect() {
    selectedAccount = null;
}


 function getAccount() {
    return selectedAccount
}

function formatTime(timestamp) {
    var date = new Date(timestamp * 1000); // 增加8小时
    return date.toLocaleDateString();
}

/**
 * Main entry point.
 */


onConnect();