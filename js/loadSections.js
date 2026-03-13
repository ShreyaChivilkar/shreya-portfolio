function loadSection(id, file) {
  console.log("Loading:", file);

  fetch(file)
    .then(response => response.text())
    .then(data => {
      console.log("Loaded successfully");
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error:", err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadSection("education-section", "sections/education.html");
});