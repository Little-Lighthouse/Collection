let name = document.getElementById("name");
let department = document.getElementById("dept");
let term = document.getElementById("term");
let status = document.getElementById("status");

function loadInfo(){
    name.innerHTML = "Thomas James Alexander";
    department.innerHTML = "Content writing";
    term.innerHTML = "5 months";
    status.innerHTML = "Resign";
}
loadInfo();

function signOut(){
    window.location = "../index.html";
}