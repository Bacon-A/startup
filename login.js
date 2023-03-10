//Unvalidated.
//Unsecured
//Using local storage
function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "john_posts.html";
}
