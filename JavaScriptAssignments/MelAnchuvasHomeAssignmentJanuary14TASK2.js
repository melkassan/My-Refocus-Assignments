function createBankAccount(name,money){
  let currentBalance = money;
  console.log("Hello "+name+", welcome to your account.");
  function viewBalance(){
    console.log(ret_displayBalance(currentBalance));
  }
  function depositMoney(dpAmt){
    currentBalance =  ret_deposit(currentBalance,dpAmt);
    console.log("You have deposited \u20B1"+dpAmt+" to your account. Your new balance is \u20B1"+currentBalance+".");
  }
  function withdrawMoney(wdAmt){
    if(ret_canwd(currentBalance,wdAmt)){
      currentBalance = ret_withdraw(currentBalance,wdAmt);
      console.log("You have withdrawn \u20B1"+wdAmt+" to your account. Your new balance is \u20B1"+currentBalance+".");
    }else{
      console.log("Cannot transact amount. Insufficient balance.");
    }
  }
  return {viewBalance,depositMoney,withdrawMoney}  
}
function ret_displayBalance(amt){
  return "Your current balance is : \u20B1"+amt+"";
}
function ret_deposit(prevAmt,nowAmt){
  return prevAmt += nowAmt;
}
function ret_withdraw(prevAmt,nowAmt){
  return prevAmt -= nowAmt;
}
function ret_canwd(current_bal,wdAmt){
  if(wdAmt<=current_bal){
    return true;
  }
  return false;
}

const newAccount = createBankAccount("John",10000);
newAccount.viewBalance();
newAccount.depositMoney(1000);
newAccount.viewBalance();
newAccount.withdrawMoney(5000);
newAccount.viewBalance();
newAccount.withdrawMoney(7000);
