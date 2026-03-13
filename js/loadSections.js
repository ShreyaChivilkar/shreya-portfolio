function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Section load error:", err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadSection("education-section", "sections/education.html");
});