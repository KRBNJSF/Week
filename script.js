window.addEventListener("load", async () => {
    await sleep(1500);
    document.getElementById("loader").style.opacity = "0";
    await sleep(500);
    document.getElementById("loader").style.display = "none";
    document.getElementById("box").style.display = "flex";
    document.getElementById("trashBox").style.display = "block";
    await sleep(200);
    document.getElementById("box").style.opacity = "10";
    document.getElementById("trashBox").style.opacity = "10";

})

const sleep = (ms) => new Promise(r => {
    setTimeout(r, ms)
});

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
    ["Út", 2],
    ["St", 3],
    ["Čt", 4],
    ["Pá", 5],
    ["So", 6],
    ["Ne", 7]
];

let result = '';

if (weekNumber % 2 == 0) {
    const trashBox = document.createElement("div");
    trashBox.id = "trashBox";
    trashBox.classList.add("trashBox");
    trashBox.innerHTML = "<span>Popelnice</span>";
    document.body.appendChild(trashBox);
}

for (let i = 0; i < objDay.length; i++) {
    let helper = 0;
    weekNumber % 2 === 0 ? helper = 0 : helper = 1
    if (i % 2 !== helper) {
        if (today === objDay[i][1]) {
            result = result + "<span class='dayBox selectedDay'>" + objDay[i][0] + "</span>"
        } else {
            result = result + "<span class='dayBox'>" + objDay[i][0] + "</span>"
        }
    }
}

//https://neumorphism.io/#e0e0e0
//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
// box.innerText = weekNumber % 2 == 0 ? "Po, St, Pá, Ne" : "Út, Čt, So";
box.innerHTML = result;

console.log("Week number of " + currentDate +
    " is : " + weekNumber);

