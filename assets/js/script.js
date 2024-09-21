let username = document.getElementById("username");
let password = document.getElementById("password");
localStorage.setItem("Username1", "user");
localStorage.setItem("Password1", "LLHUser");
localStorage.setItem("Username2", "admin");
localStorage.setItem("Password2", "LLHAdmin");

var attempt = 2;

function Login() {
  let InputUserValue = document.getElementById("username").value;
  let InputPasswordValue = document.getElementById("password").value;

  // Check if the input credentials match either set in localStorage
  if (InputUserValue === localStorage.getItem("Username1") && InputPasswordValue === localStorage.getItem("Password1")) {
    window.location.replace("user/index.html");
  } else if (InputUserValue === localStorage.getItem("Username2") && InputPasswordValue === localStorage.getItem("Password2")) {
    window.location.replace("admin/index.html");
  } else {
    attempt--;
    alert("Access Denied!!! You have " + attempt + " attempts left.");
  }

  if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("button").disabled = true;
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    username.style.backgroundColor = "#dddddd";
    password.style.backgroundColor = "#dddddd";
  }
}
  
document.addEventListener("keypress", e => {
  if(e.key === "Enter") {
    Login();
  }
});

$("input").bind("keydown", function(event) {
  if (event.which === 40) {
    event.stopPropagation();
    event.preventDefault();
    $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();
  }
  if (event.which === 38) {
    event.stopPropagation();
    event.preventDefault();
    $(':input:eq(' + ($(':input').index(this) - 1) + ')').focus();
  }
});