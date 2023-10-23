if (localStorage.getItem("dark-mode") == "true") {
    darkMode();
}
function darkMode() {
    var element = document.body;
    var button = document.getElementById("dark_mode_button");
    element.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode-icon");
    localStorage.setItem("dark-mode", element.classList.contains("dark-mode")); 
}