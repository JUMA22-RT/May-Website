
  // Main tab switching
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    target.classList.add('active');
  });
});

// Generic sub-tab switching
function showSubTab(section, event, sectionClass, tabClass) {
  // hide all sections
  document.querySelectorAll(sectionClass).forEach(sec => sec.classList.remove('active'));
  // show selected section
  document.getElementById(section).classList.add('active');

  // reset all buttons
  document.querySelectorAll(tabClass + ' button').forEach(btn => btn.classList.remove('active'));
  // set active button
  event.target.classList.add('active');
}

// Projects
function showProject(section, event) {
  showSubTab(section, event, '.project-section', '.project-tabs');
}

// Resume
function showResume(section, event) {
  showSubTab(section, event, '.resume-section', '.resume-tabs');
}
fetch("https://raw.githubusercontent.com/JUMA22-RT/DATA-SCIENCE/main/Mental%20Health%20Risk.R")
    .then(response => response.text())
    .then(data => {
      const codeBlock = document.getElementById("rcode");
      codeBlock.textContent = data;
      Prism.highlightElement(codeBlock); // apply syntax highlighting
    })
    .catch(err => console.error("Error loading R file:", err));





