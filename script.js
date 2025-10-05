document.addEventListener("DOMContentLoaded", function() {
  // ====== Navbar Toggle ======
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  // ====== Resume Buttons (Navbar & Hero) ======
  const resumeButtons = [document.getElementById("resumeBtnHero"), document.getElementById("resumeBtnNav")];
  
  resumeButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", function() {
        // Relative path for GitHub Pages
        const resumePath = "hknew (1).pdf"; // Place PDF in the same folder as index.html
        
        // Open in new tab
        window.open(resumePath, "_blank");

        // Trigger download
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Harish_Kadhir_SJ_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  });

  // ====== Contact Form (Formspree Integration) ======
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.style.display = 'block';
      status.style.color = '#00ffcc';
      status.textContent = '⏳ Sending...';

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.textContent = '✅ Thank you! Your message has been sent successfully.';
          form.reset();
        } else {
          status.textContent = '❌ Oops! Something went wrong. Please try again.';
          status.style.color = '#ff5555';
        }
      } catch (error) {
        status.textContent = '⚠️ Network error. Please check your connection.';
        status.style.color = '#ff5555';
      }
    });
  }
});
