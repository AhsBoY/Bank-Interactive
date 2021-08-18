// handle deposit button event
document.getElementById("deposit-button").addEventListener("click", function(){
    // get the amount deposited
    const depositInput = document.getElementById("deposit-input")
    const newdepositeAmount = depositInput.value
    // console.log(depositeAmount);
    
    // Update deposite total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTotalText)
    const newDepositTotal = previousDepositAmount + parseFloat(newdepositeAmount);
    depositTotal.innerText = newDepositTotal;

    // Update Balance
    const balanceTotal = document.getElementById("balance-total")
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotal + parseFloat(newdepositeAmount)
    balanceTotal.innerText = newBalanceTotal
    // clear the deposit input field
    depositInput.value = ""
})


// Handle Withdraw Event Handler
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;  


    // Update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    // Clear Withdraw Input
    withdrawInput.value = "";
})