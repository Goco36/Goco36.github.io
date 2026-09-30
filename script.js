// "Copy email" button: copies the address and shows a short confirmation.
const copyButton = document.getElementById("copy-email");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyButton.textContent = "Copied ✓";
  } catch {
    copyButton.textContent = copyButton.dataset.email;
  }
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2500);
});
