function toggleMenu() {
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");
  var navigation = document.getElementById("navigation");

  if (navigation.style.right === "-300px") {
    navigation.style.right = "0";
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    navigation.style.right = "-300px";
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}
