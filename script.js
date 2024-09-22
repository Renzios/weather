const time = document.querySelector(".time");

function setDate() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
}

setDate();
setInterval(setDate, 1000);