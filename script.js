const time = document.querySelector(".time");
const date = document.querySelector(".date");

function setDate() {
    const now = new Date();
    time.textContent = now.toLocaleTimeString();
    date.textContent = now.toLocaleDateString();
}

setDate();
setInterval(setDate, 1000);