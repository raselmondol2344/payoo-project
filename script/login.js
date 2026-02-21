document.getElementById("login-btn").addEventListener("click", function()
{
    const inputNum = document.getElementById("login-number")
    const Number = inputNum.value;
    console.log(Number);


    const inputPin = document.getElementById("login-pin")
    const pin = inputPin.value;
    console.log(pin);

    if(Number == "01703114263" && pin == "1234")
    {
        alert (" login success")
        window.location.href = "./home.html";
    }

    else {
        alert("login faild")
        return;
    }
}
)
