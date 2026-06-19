let fontSize = 16;
let isVisible = true;

function changeHeading() {
    let input = document.getElementById("inputText").value;
    if (input !== "") {
        document.getElementById("heading").innerText = input;
    }
}

function changeBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
            ? "#f0f0f0"
            : "lightblue";
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
    isVisible = !isVisible;
}

function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("inputText").value = "";
    document.body.style.backgroundColor = "#f0f0f0";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";

    fontSize = 16;
    isVisible = true;
}