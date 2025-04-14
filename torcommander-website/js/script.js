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
  