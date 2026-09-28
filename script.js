// Keep the footer year up to date.
document.getElementById("year").textContent = new Date().getFullYear();

// "Copy email" button: copies the address to the clipboard and shows a short message.
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied to clipboard.";
  } catch {
    // Clipboard access can be blocked (old browsers, insecure context).
    copyStatus.textContent = "Couldn't copy automatically: " + email;
  }

  setTimeout(() => {
    copyStatus.textContent = "";
  }, 3000);
});
