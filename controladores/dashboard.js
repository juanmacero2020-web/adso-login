document.addEventListener("DOMContentLoaded", () => {
    const logueado = localStorage.getItem("logueado");

    if (!logueado) {
        window.location.href = "login.html";
        return;
    }
    const nombre = localStorage.getItem("nombre");
    const rol = localStorage.getItem("rol");

    document.getElementById("nombreUsuario").textContent = nombre;
    if (rol === "admin") {
        document.getElementById("tarjetasAdministrador").classList.remove("d-none");
    } else {
        document.getElementById("tarjetasAsociados").classList.remove("d-none");
    }

    document.getElementById("btnCerrarSesion").addEventListener("click", () => {
        localStorage.removeItem("logueado");
        localStorage.removeItem("rol");
        localStorage.removeItem("nombre");
        window.location.href = "login.html";
    });
});
