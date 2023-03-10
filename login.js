//Unvalidated.
//Unsecured
//Using local storage
function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "john_posts.html";
}

function register() {
    const nameEl = document.querySelector("#regname");
    const username = nameEl.value.trim();
  
    // Perform validation on the username
    // If validation fails, display an error message to the user and prevent further execution of the function.
  
    // Store the username in local storage or send it to a server-side script to store in a database.
    localStorage.setItem("userName", username);
    window.location.href = "john_posts.html";
  }
