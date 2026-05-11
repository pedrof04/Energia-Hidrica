// Popup functions
function abrirPopup(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function fecharPopup(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".popup-overlay.open").forEach((p) => {
      p.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
});
