// import {pay} from "./script.js"

const
    idNumber = document.querySelector("#id-number"),
    generateButtonEl = document.querySelector("#generate"),

    randomIdNumber = (minimum, maximum) => {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);
    };

generateButtonEl.onclick = () => {
    idNumber.textContent = randomIdNumber(999999, 99999999);
};

// document.getElementById("pay").onclick=pay