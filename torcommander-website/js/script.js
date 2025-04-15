function copyToClipboard(button) {
    const codeBlock = button.nextElementSibling;
    const textToCopy = codeBlock.innerText;
  
    navigator.clipboard.writeText(textToCopy).then(() => {
      // ✅ Show light tick after copy
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="clipboard-icon" viewBox="0 0 24 24" fill="none"
          stroke="#adff2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      `;
  
      // 🔁 Revert back to clipboard icon after 2s
      setTimeout(() => {
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="clipboard-icon" viewBox="0 0 24 24" fill="none"
            stroke="#c799ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 4H18a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H8" />
            <rect x="9" y="2" width="6" height="4" rx="1" ry="1" />
          </svg>
        `;
      }, 2000);
    });
  }
  
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });
});
  
const modal = document.getElementById('confirmationModal');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

closeButton.addEventListener('click', toggleModal);

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    toggleModal();
  }
});

// Update form submission handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
    toggleModal();
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
  