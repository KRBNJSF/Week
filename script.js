let currentDate = new Date();
let startDate = new Date(currentDate.getFullYear(), 0, 1);

const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

const weekNumber = Math.ceil(days / 7);

const box = document.createElement("div");
box.id = "box";
box.classList.add("box");
document.body.appendChild(box);

box.innerText = weekNumber % 2 == 0 ? "Po, St, Pá, Ne" : "Út, Čt, So";

console.log("Week number of " + currentDate +
    " is : " + weekNumber);

