let button = document.querySelectorAll("button");

let text = document.querySelector(".row");

function changeTheme() {
    if (!text.classList.contains("dark")) {
        text.classList.toggle("dark");
        button[1].classList.replace('darkTheme', 'lightTheme');
    } else {
        text.classList.toggle("dark");
        button[1].classList.replace('lightTheme', 'darkTheme');
    }
}

button[1].addEventListener('click', changeTheme);

let input = document.querySelectorAll("input");

function getColor() {
    let C1 = input[0].value;
    let C2 = input[1].value;

    text.style.backgroundColor = C1;
    text.style.color = C2;
}

button[0].addEventListener('click', getColor)