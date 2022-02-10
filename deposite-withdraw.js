document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    depositInput.value = "";

    // update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceAmount = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceAmount;


})

// event handler with withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText);
    const updateBalanceTotal = newBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = updateBalanceTotal;




    withdrawInput.value = '';



})
