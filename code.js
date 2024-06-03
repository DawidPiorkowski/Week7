function toggleMyClass() {
    let element = document.getElementById("myElement");
    element.classList.toggle("toggleClass");
}

document.getElementById("myElement").addEventListener("click", toggleMyClass);
