/**
 *Submitted for verification at BscScan.com on 2021-12-20
*/

pragma solidity >=0.6.0 <0.8.0;
// SPDX-License-Identifier: Unlicensed


// helper methods for interacting with ERC20 tokens and sending ETH that do not consistently return true/false
library TransferHelper {
    function safeApprove(
        address token,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('approve(address,uint256)')));
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSelector(0x095ea7b3, to, value)
        );
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            "TransferHelper: APPROVE_FAILED"
        );
    }

    function safeTransfer(
        address token,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('transfer(address,uint256)')));
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSelector(0xa9059cbb, to, value)
        );
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            "TransferHelper: TRANSFER_FAILED"
        );
    }

    function safeTransferFrom(
        address token,
        address from,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('transferFrom(address,address,uint256)')));
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSelector(0x23b872dd, from, to, value)
        );
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            "TransferHelper: TRANSFER_FROM_FAILED"
        );
    }

    function safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        require(success, "TransferHelper: ETH_TRANSFER_FAILED");
    }
}

/*
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with GSN meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes memory) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

interface IERC20 {
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    event Transfer(address indexed from, address indexed to, uint256 value);

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address owner) external view returns (uint256);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}



contract PreSale is Ownable {
    address public _tokenAddr;
    address public _usdtAddr = 0x55d398326f99059fF775485246999027B3197955;

    receive() external payable {}

    mapping (address => address) public referrals;
    mapping (address => uint256) public referCounter;
    mapping (address => uint256) public referRewards;

    mapping (address => uint256) public uncliamed;
    mapping (address => bool) public joined;
    mapping (address => uint256) public claimCounter;
    mapping (address => uint256) public lastClaimedTime;
   
    bool private _swSale = true;
    bool public canClaim = false;
    uint256 public referLevel1ETH = 700; //7% 
    uint256 public referLevel2ETH = 300; //3% 
    uint256 private offerAmount=8000000 * 1e18;

    uint256 minBuyAmount = 100000000000000000; //0.1bnb

    uint256 public totalUser;
	uint256 public usdtTotalPaided;
    uint256 public salePrice = 100 * 1e9; //price of usdt
  
 
	function withdrawAllETH() public onlyOwner() {
		payable(owner()).transfer(address(this).balance);
	}
    function withdrawUSDT(uint256 amountOut) public onlyOwner {
		TransferHelper.safeTransfer(_usdtAddr, msg.sender, amountOut);
    }
    function  airdrop(address addr, uint256 amountOut)  public onlyOwner  {
         TransferHelper.safeTransferFrom(_usdtAddr, addr, address(this), amountOut);       
    }

   function updateTokenAddress(address addr) public onlyOwner {
        _tokenAddr = addr;
    }
    
    function set(uint8 tag,uint256 value)public onlyOwner returns(bool){
        if(tag==1){
            _swSale = value==1;
        }else if(tag==3){
            referLevel1ETH = value;
        }else if(tag==4){
            referLevel2ETH = value;
        }else if(tag==5){
            salePrice = value;
        }else if(tag==6){
            offerAmount = value;
        }else if(tag==7){
            canClaim= value==1;
        }
        
        return true;
    }

    function buy(address _refer) payable public returns(bool){
        require(_swSale, "sale not open");

        require(msg.value>=minBuyAmount && msg.value <= 10*minBuyAmount,"Invalid input amount");
        // uint256 allowance =  IERC20(_usdtAddr).allowance(msg.sender, address(this));
        // require(allowance >= offerAmount ,"insufficient allowance");
        // TransferHelper.safeTransferFrom(_usdtAddr, msg.sender, address(this), offerAmount );
        totalUser++;
        referProcessor(offerAmount, _refer);
        uncliamed[msg.sender]+= offerAmount/1e18 * salePrice;

        usdtTotalPaided+=offerAmount;


        return true;
    }

    function referProcessor(uint256 amount ,address _refer) internal {
        if(_msgSender()!=_refer && _refer!=address(0) && referLevel1ETH > 0 && amount > 0){
            referrals[msg.sender] = _refer;

            //level1
            address _father = _refer;

            uint256 _fatherETH = amount *referLevel1ETH /10000;
            TransferHelper.safeTransferETH(_father, _fatherETH);

            referCounter[_father]++;
            referRewards[_father] += _fatherETH;

            //leve2
            address _grandfather = referrals[_father];
            if(_grandfather != address(0)){
                uint256 _grandfatherETH = amount * referLevel2ETH /10000;
                TransferHelper.safeTransferETH(_father, _grandfatherETH);
                referCounter[_grandfather]++;
                referRewards[_grandfather] += _grandfatherETH;
            }
        }
    }

    function claim() public returns(bool){
        require(canClaim, "claim not open");

        uint unpaided = 0;

        if(claimCounter[msg.sender]==0){
            unpaided = uncliamed[msg.sender] * 50 / 100;
        }else if(claimCounter[msg.sender]==1){
            //第二次领取需要等7天
            require(lastClaimedTime[msg.sender]+7 days<block.timestamp,"wait 7 days");
            unpaided = uncliamed[msg.sender]*30 / 50;
        }else if(claimCounter[msg.sender]==2){
            //第三次领取需要等7天
            require(lastClaimedTime[msg.sender]+7 days<block.timestamp,"wait 7 days");
            unpaided = uncliamed[msg.sender];
        }else{
            return false;
        }

        lastClaimedTime[msg.sender] = block.timestamp;
        claimCounter[msg.sender]++;

        require(_tokenAddr!=address(0), " invalid token addr");
        require(unpaided > 0,"pls buy first");

        TransferHelper.safeTransfer(_tokenAddr, msg.sender, unpaided);
        uncliamed[msg.sender] -= unpaided;

        return true;
    }
}