let username = document.getElementById("username");
let password = document.getElementById("password");
localStorage.setItem("Username", "LLH2023");
localStorage.setItem("Password", "LLH2023");
var attempt = 2;

function Login() {
  let InputUserValue = document.getElementById("username").value;
  let InputPasswordValue = document.getElementById("password").value;

  console.log('InputUserValue: ', InputUserValue);
  console.log('InputPasswordValue: ', InputPasswordValue);

  // Check if username and password values are in localStorage and are not null
  if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null) {
    if ((InputUserValue === localStorage.getItem("Username")) &&
      (InputPasswordValue === localStorage.getItem("Password"))){
        console.log("Login successful");
        window.location.replace("user/index.html");
      }else {
        attempt --;
        alert("Access Denied!!!"+" You have left "+attempt+" attempt;");
      }
    }
    /*else {
      localStorage.clear(); // clear the local storage before adding new values
      localStorage.setItem("Username", InputUserValue);
      localStorage.setItem("Password", InputPasswordValue);
      alert("Signup successful");
    }*/
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