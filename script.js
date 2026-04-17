// Toggle menu for mobile
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

// Main tab switching
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    target.classList.add('active');
    document.getElementById("navbar").classList.remove("active"); // close nav on mobile
  });
});

// Ensure Home is active by default
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
    document.querySelector('.tab-link[href="#home"]').classList.add('active');
  });

 //Show section by id and group class
  function showSection(sectionId, groupClass, event) {
    event.preventDefault();

    // Hide all in the group
    document.querySelectorAll('.' + groupClass).forEach(sec => sec.classList.remove('active'));
    // Show selected
    document.getElementById(sectionId).classList.add('active');

    // Collapse any open dropdown after click
    const dropdownContent = event.target.closest('.dropdown-content');
    if (dropdownContent) {
      dropdownContent.style.display = 'none';
    }

    // If it's a main tab (tab-content), update active link
    if (groupClass === 'tab-content') {
      document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    }
  }

  // Handle parent dropdown clicks → show default tab
  document.addEventListener('DOMContentLoaded', () => {
    // Default Home active
    document.getElementById('home').classList.add('active');
    document.querySelector('.tab-link[href="#home"]').classList.add('active');

    // Attach listeners to parent dropdown anchors
    document.querySelectorAll('.dropdown > .tab-link').forEach(parentLink => {
      parentLink.addEventListener('click', e => {
        e.preventDefault();

        // Decide default section per dropdown
        const id = parentLink.getAttribute('href').replace('#','');
        let defaultSection = null;
        let groupClass = null;

        if (id === 'projects') {
          defaultSection = 'web-projects';   // your chosen default
          groupClass = 'project-section';
        } else if (id === 'resume') {
          defaultSection = 'education';      // default for resume
          groupClass = 'resume-section';
        } else if (id === 'code-samples') {
          defaultSection = 'MentalHealth';   // default for code samples
          groupClass = 'code-section';
        }

        if (defaultSection && groupClass) {
          showSection(defaultSection, groupClass, e);
        }
      });
    });
  });
// Load R code dynamically
fetch("https://raw.githubusercontent.com/JUMA22-RT/DATA-SCIENCE/main/Mental%20Health%20Risk.R")
    .then(response => response.text())
    .then(data => {
      const codeBlock = document.getElementById("rcode");
      codeBlock.textContent = data;
      Prism.highlightElement(codeBlock);
    })
    .catch(err => console.error("Error loading R file:", err));

// Enable dropdown toggle on mobile
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation
      this.parentElement.classList.toggle("active");
    }
  });
});

// Generic tab switcher
function showSection(sectionId, groupClass, event) {
  if (event) event.preventDefault();

  // Hide all sections in the group
  document.querySelectorAll("." + groupClass).forEach(el => {
    el.classList.remove("active");
    el.style.display = "none";
  });

  // Show the clicked section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }

  // Remove highlight from all dropdown links
  document.querySelectorAll(".dropdown-content a").forEach(link => {
    link.classList.remove("active");
  });

  // Highlight the clicked child link
  if (event && event.target) {
    event.target.classList.add("active");
  }
}

