let currentDate = new Date();
let startDate = new Date(currentDate.getFullYear(), 0, 1);

const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

const weekNumber = Math.ceil(days / 7);

const box = document.createElement("div");
box.id = "box";
box.classList.add("box");
document.body.appendChild(box);

let today = new Date().getDay();

let objDay = [
    ["Po", 1],
    ["Ut", 2],
    ["St", 3],
    ["Ct", 4],
    ["Pa", 5],
    ["So", 6],
    ["Ne", 7]
];

let result = '';

for (let i = 0; i < objDay.length; i++) {
    if (i % 2 != 0) {
        if (today == objDay[i][1]) {
            result = result + "<span class='colar'>" + objDay[i][0] + "</span> "
        }
        else {
            result = result + " " + objDay[i][0]
        }
    }
}



// box.innerText = weekNumber % 2 == 0 ? "Po, St, Pá, Ne" : "Út, Čt, So";
box.innerHTML = result;

console.log("Week number of " + currentDate +
    " is : " + weekNumber);

