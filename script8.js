let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerHTML = count;
}

function decrement() {
    count--;
    document.getElementById("count").innerHTML = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}