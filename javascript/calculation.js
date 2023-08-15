document.getElementById('deposit-btn').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-amount');
   const depositAmountString = depositField.value;
   const depositAmount = parseFloat(depositAmountString);
   
   const totalDepositField = document.getElementById('total-deposit');
   const totalDepositString = totalDepositField.innerText;
   const totalDeposit = parseFloat(totalDepositString);
   const totalAmount = totalDeposit + depositAmount;
   let toFixedDepositNumber = totalAmount.toFixed(2) 
   totalDepositField.innerText = toFixedDepositNumber;

   const balanceField = document.getElementById('balance');
   const balanceFieldString = balanceField.innerText;
   const totalBalanceField = parseFloat(balanceFieldString);
   const totalBalance = depositAmount + totalBalanceField;
   let toFixedBalanceNumber = totalBalance.toFixed(2)
   balanceField.innerText = toFixedBalanceNumber ;
   depositField.value = '';
})

document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const WithdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountString = WithdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    if(isNaN(withdrawAmount)){
        return alert('please set amount')
    }

    const totalwithdrawField = document.getElementById('total-withdraw');
    const totalWithdrawString = totalwithdrawField.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);
    

    const balanceField = document.getElementById('balance');
    const balanceFieldString = balanceField.innerText;
    const totalBalance = parseFloat(balanceFieldString);

    WithdrawField.value = ''

    if(totalBalance < withdrawAmount){
        alert('insufficient balance')
    }
    else{
        const totalWithdrawAmount = withdrawAmount + totalWithdraw;
        let toFixedWithdrawAmount = totalWithdrawAmount.toFixed(2)
        totalwithdrawField.innerText = toFixedWithdrawAmount;
        const calculateBalance = totalBalance - withdrawAmount;
        const toFixedBalance = calculateBalance.toFixed(2);
        balanceField.innerText = toFixedBalance;
    }
})