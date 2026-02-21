// 0 - function create 
document.getElementById("cashout-btn").addEventListener("click", function()
{
    //1- get agent number
    const cashoutNumber = getElementByInput("cashout-number")
    if(cashoutNumber.length !=11)
    {
        alert("Invalid Agent Number");
        return ;
    }
    
    // 2- get cashout amount

    const cashoutAmount = getElementByInput("cashout-amount")

    // 3- get current blance
   const currentBlance = getBlance ();
    // 4- claculate new blance
    const newBlance = currentBlance - Number (cashoutAmount);

    if(newBlance < 0)
    {
        alert("Invalid ammount")
        return;
    }
    console.log(newBlance);
    // 5- get pin and verify
    const cashoutPin = document.getElementById("cashout-pin")
    const pin = cashoutPin.value;
    if(pin == "1234")
    {   // 5.1 : true :: alert > set blance 
        alert("cashout successful")
        setBlance(newBlance);
    }
    else{
        // 5.2 : false :: aleert > return
        alert("invalid pin")
        return;
    }
 


        
})


// // 0 - function create 
// document.getElementById("cashout-btn").addEventListener("click" , function()
// {
// // 1- get agent number
// const cashoutNumberInput = document.getElementById("cashout-number")
// const cashoutNumber = cashoutNumberInput.value ;
// if(cashoutNumber.length !=11)
// {
//     alert("Invalid Agent Number");
//     return ;
// }
// console.log(cashoutNumber);


// // 2- get cashout amount
// const cashoutamountInput = document.getElementById("cashout-amount")
// const cashoutamount = cashoutamountInput.value;
// console.log(cashoutamount);

// // 3- get current blance
//  const blanceElement = document.getElementById("blance")
//  const Blance = blanceElement.innerText;
//  console.log(Blance);
// // 4- claculate new blance
//  const newBlance = Number(Blance) - Number (cashoutamount);

//  if(newBlance < 0)
//  {
//     alert("Invalid ammount")
//     return;
//  }
//  console.log(newBlance);
// // 5- get pin and verify
// const cashoutPin = document.getElementById("cashout-pin")
// const pin = cashoutPin.value;
// if(pin == "1234")
// {   // 5.1 : true :: alert > set blance 
//     alert("cashout successful")
//     blanceElement.innerText = newBlance;
// }
// else{
//     // 5.2 : false :: aleert > return
//     alert("invalid pin")
// }
// console.log(pin);



// })

