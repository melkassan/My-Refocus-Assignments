const user = {
    bankAccount: {
      bankAccountId: Math.floor(Math.random() * 9000 + 1000),
      accountNumber: 912833421221,
      credentials: {
        username:'McHammer',
        password:'McHammer06',
        pin:200802
      },
      balance: 50000,
      createdAt: new Date(2023,4,25),
    },
    debitCard: 2008028893,
    firstName: 'Gerald',
    lastName: 'Anderson',
    birthDate: new Date(1991,10,6),
    validID: [
      { tyeofID: 'Passport', numberID: 'PP-21345' },
      { tyeofID: `Driver's License`, numberID: 'GX-13654' },
    ],
    address: 'Manhattan Avenue, New York',
  };
  //console.log(new Date(2022,3,5));
  //react router
  check_userpass = (username,password)=>{
    let isUser = false;
    if((user.bankAccount.credentials.username == username) && (user.bankAccount.credentials.password == password)){
      isUser = true;
    }
    return isUser;
  };
  check_isEnough = (money)=>{
    let canwithdraw = false;
    if(money > user.bankAccount.balance){
      canwithdraw = true;
    }
    return canwithdraw;
  }
  ATM = (username,password)=>{
    getBankAccountDetails=()=>{
      if(check_userpass(username,password)){
        console.log(`
        Bank Account Details
        --------------------------
        Account ID      : ${user.bankAccount.bankAccountId}
        Account Number  : ${user.bankAccount.accountNumber}
        Account Balance : ₱${new Intl.NumberFormat().format((user.bankAccount.balance))}
        Date Created    : ${user.bankAccount.createdAt}
        `);
      }else{
        console.log('Wrong username/password. Cannot view bank details.');
      }
    };
    withdrawMoney=money=>{
      if(check_userpass(username,password)){
      if(!check_isEnough(money)){
          user.bankAccount.balance -= money;
          console.log(`You withdraw ${new Intl.NumberFormat().format(money)} to your bank account.`);
      }else{
        console.log(`Unable to withdraw ${new Intl.NumberFormat().format(money)} from your account. Not enough balance.`);
      }
      }else{
          console.log('Wrong username/password. Cannot withdraw money');
      }
    };
    depositMoney=money=>{
      if(check_userpass(username,password)){
      user.bankAccount.balance +=money;
      console.log(`You have deposited ${new Intl.NumberFormat().format(money)} to your bank account.`);
      }else{
          console.log('Wrong username/password. Cannot deposit money');
      }
    };
    return{
      getBankAccountDetails,
      withdrawMoney,
      depositMoney,
    }
  }
  ATM('McHammer','McHammer');
  ATM('McHammer','McHammer06');//enters username and password
  getBankAccountDetails();//view Bank account details
  withdrawMoney(5000);
  getBankAccountDetails();
  withdrawMoney(50001);
  depositMoney(5000);
  getBankAccountDetails();
  