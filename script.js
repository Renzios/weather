const time = document.querySelector(".time");

function setDate() {
    const now = new Date();
    time.textContent = now.toLocaleTimeString();
}

setDate();
setInterval(setDate, 1000);