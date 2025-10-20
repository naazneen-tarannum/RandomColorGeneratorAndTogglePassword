const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16)
    console.log(randomNumber, randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementsByClassName('color-code')[0].innerText = randomCode

    // to automatically copy on clipboard
    navigator.clipboard.writeText(randomCode);
}


// event call
document.getElementById('btn').addEventListener('click', getColor)


// initial call
getColor()