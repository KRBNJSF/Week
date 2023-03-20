window.addEventListener("load", async () => {
    await sleep(1500);
    document.getElementById("loader").style.opacity = "0";
    await sleep(500);
    document.getElementById("loader").style.display = "none";
    document.getElementById("box").style.display = "flex";
    if (weekOfTheYear % 2 == 0) {
        document.getElementById("trashBox").style.display = "block";
    }
    await sleep(200);
    document.getElementById("box").style.opacity = "10";
    if (weekOfTheYear % 2 == 0) {
        document.getElementById("trashBox").style.opacity = "10";
    }

})

const sleep = (ms) => new Promise(r => {
    setTimeout(r, ms)
});

let currentDate = new Date();
let startDate = new Date(currentDate.getFullYear(), 0, 1);
let differenceBetweenDates = (currentDate - startDate) + (startDate.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60; // *60 to get offset in hours
let millisecondsInDay = 1000 * 60 * 60 * 24;

const dayOfTheYear = Math.floor((differenceBetweenDates) / (millisecondsInDay));

const weekOfTheYear = Math.ceil(dayOfTheYear / 7);

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
    ["Ne", 0]
];

let result = '';

if (weekOfTheYear % 2 == 0) {
    const trashBox = document.createElement("div");
    trashBox.id = "trashBox";
    trashBox.classList.add("trashBox");
    trashBox.innerHTML = today === objDay[2][1] ? "<span style='border-radius: 12px;' class='basic-box trash selected'>Popelnice</span>" : "<span style='border-radius: 12px;' class='basic-box trash'>Popelnice</span>";
    document.body.appendChild(trashBox);
}

for (let i = 0; i < objDay.length; i++) {
    let helper = 0;
    weekOfTheYear % 2 === 0 ? helper = 0 : helper = 1
    if (i % 2 !== helper) {
        if (today === objDay[i][1]) {
            result = result + "<span class='basic-box day-box selected'>" + objDay[i][0] + "</span>"
        } else {
            result = result + "<span class='basic-box day-box'>" + objDay[i][0] + "</span>"
        }
    }
}

//https://neumorphism.io/#e0e0e0
//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
// box.innerText = weekOfTheYear % 2 == 0 ? "Po, St, Pá, Ne" : "Út, Čt, So";
box.innerHTML = result;

console.log("Week number of " + currentDate +
    " is : " + weekOfTheYear);

