//const app = angular.module("angelsApp", []);
window.onload = () => {
  // ask for the person's name
  if (!localStorage.getItem("username")) {
    // prompt for one from user if not
    window.username = window.prompt("What's your name?");
    localStorage.setItem("username", username);
  } else {
    window.username = localStorage.getItem("username");
    userName = localStorage.getItem("username");
  }
  document
    .getElementById("usernameDisplay")
    .append(
      `⚾Who do we have here? It's ride or die Angels fan, ${window.username}!⚾`
    );
};
