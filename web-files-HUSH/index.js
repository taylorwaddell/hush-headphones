function toggleDark(){
    const body = document.getElementsByTagName("BODY")[0];
    if (body.classList.contains("dark")){
        body.classList.remove('dark');
        document.getElementById("sunToggle").classList.add("d-none");
        document.getElementById("darkLogo").classList.add("d-none");
        document.getElementById("moonToggle").classList.remove("d-none");
        document.getElementById("lightLogo").classList.remove("d-none");
    } else {
        body.classList.add('dark');
        document.getElementById("sunToggle").classList.remove("d-none");
        document.getElementById("darkLogo").classList.remove("d-none");
        document.getElementById("moonToggle").classList.add("d-none");
        document.getElementById("lightLogo").classList.add("d-none");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".themeToggle").forEach(button => {
        button.addEventListener('click', toggleDark)
    });
});
