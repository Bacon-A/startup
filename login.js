//Unvalidated.
//Unsecured
//Using local storage
function login() {
  const nameLogin = document.querySelector("#username");
  localStorage.setItem("userName", nameLogin.value);
  window.location.href = "john_posts.html";
  console.log("ogin fuctino called");
}

function register() {
    const nameRegister = document.querySelector("#regname");
    const username = nameRegister.value.trim();
  
    // Perform validation on the username
    // If validation fails, display an error message to the user and prevent further execution of the function.
  
    // Store the username in local storage or send it to a server-side script to store in a database.
    localStorage.setItem("userName", username);
    addUser(username); // add new user to the table
    //window.location.href = "john_posts.html";
    //Probably dont redirect with a register, only a login
  }
