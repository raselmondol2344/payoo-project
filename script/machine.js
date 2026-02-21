// machine => input value
function getElementByInput (id)
{
    const input = document.getElementById(id)
    const value = input.value;
    console.log(value);
    return value;

}

// machine => blance

function getBlance (){
    const getBlanceElement = document.getElementById("blance");
    const blance = getBlanceElement.innerText;
    console.log(Number(blance));
    return Number(blance);

}

// machine value => set blance 

function setBlance (value)
{
    const getBlanceElement = document.getElementById("blance");
    getBlanceElement.innerText = value;

}