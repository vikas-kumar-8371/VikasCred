function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

// Certification Pagination
const certImages = [
    'certifications/Python_Automation.jpg',
    'certifications/GitLab CI-CD.jpg',
    'certifications/Jenkins CI Tool.jpg',
    'certifications/Docker.jpg',
    'certifications/Terraform.jpg',
    'certifications/AI For Everyone.jpg',
    'certifications/Agile with Atlassian Jira.jpg',
    'certifications/DevOps Project.jpg',
    'certifications/Google Cloud Platform (GCP) Fundamentals.jpg',
    'certifications/Data Structures and Algorithm.jpg',
    'certifications/Successful Presentation.jpg',
    'certifications/The Git & Github Bootcamp.jpg',
    'certifications/SQL Server.jpg'
];

const itemsPerPage = 4;
let currentPage = 1;

function displayCertifications() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const certGrid = document.getElementById("certGrid");
  certGrid.innerHTML = '';

  certImages.slice(startIndex, startIndex + itemsPerPage).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openLightbox(src);
    certGrid.appendChild(img);
  });

  const totalPages = Math.ceil(certImages.length / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.toggle("active", i === currentPage);
    btn.onclick = () => {
      currentPage = i;
      displayCertifications();
    };
    pagination.appendChild(btn);
  }
}

window.onload = displayCertifications;

// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox on ESC key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
