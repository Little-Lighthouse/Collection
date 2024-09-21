function loadInfo(){
    let Name = document.getElementById("name");
    let Department = document.getElementById("dept");
    let Position = document.getElementById("position");
    let Term = document.getElementById("term");
    let Status = document.getElementById("status");
    
    let NameM = document.getElementById("nameM");
    let DepartmentM = document.getElementById("deptM");

    Name.innerHTML = "Thomas James Alexander";
    Department.innerHTML = "Content writing";
    Position.innerHTML = "Team Leader";
    Term.innerHTML = "5 months";
    Status.innerHTML = "Resign";

    NameM.innerHTML = Name.innerHTML;
    DepartmentM.innerHTML = Department.innerHTML;
}
loadInfo();

function signOut(){
    window.location = "../index.html";
}