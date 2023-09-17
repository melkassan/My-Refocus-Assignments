function createBankAccount(name){
  let myBalance = 10000;
  console.log("Hello "+name+", welcome to your account.");
  function viewBalance(){
    console.log("Your current balance is : \u20B1"+myBalance);
  }
  function withdrawMoney(wdAmt){
    if(wdAmt<=myBalance){
      myBalance -= wdAmt;
      console.log("You have withdrawn \u20B1"+wdAmt+" to your account. Your new balance is \u20B1"+myBalance+".");
    }else{
      console.log("Cannot transact amount. Insufficient balance.");
    }
  }
  function depositMoney(depAmt){
    myBalance += depAmt;
    console.log("You have deposited \u20B1"+depAmt+" to your account. Your new balance is \u20B1"+myBalance+".");
  }
  return{
    viewBalance,withdrawMoney,depositMoney
  }
}
const newAccount = createBankAccount("John");//Hello John, welcome to your account.
newAccount.viewBalance();//Your current balance is : ₱10000
newAccount.depositMoney(500);//You have deposited ₱500 to your account. Your new balance is ₱10500.
newAccount.depositMoney(3000);//You have deposited ₱3000 to your account. Your new balance is ₱13500.
newAccount.viewBalance();//Your current balance is : ₱13500.
newAccount.withdrawMoney(1000);//You have withdrawn ₱1000 to your account. Your new balance is ₱12500.
newAccount.withdrawMoney(13000);//Cannot transact amount. Insufficient balance.
newAccount.withdrawMoney(12500);//You have withdrawn ₱12500 to your account. Your new balance is ₱0.
newAccount.withdrawMoney(1);//Cannot transact amount. Insufficient balance.
newAccount.viewBalance();//Your current balance is : ₱0

