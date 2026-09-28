// Mark that JavaScript is running, so the CSS can hide sections
// before revealing them. Without JS, everything stays visible.
document.documentElement.classList.add("js");

// Keep the footer year up to date.
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal: show each .reveal element the first time it enters the screen.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  // Very old browsers: just show everything.
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// "Copy email" button: copies the address and shows a short confirmation.
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied ✓";
    copyStatus.textContent = "Email copied to clipboard.";
  } catch {
    // Clipboard access can be blocked (old browsers, insecure context).
    copyStatus.textContent = "Couldn't copy automatically: " + email;
  }

  setTimeout(() => {
    copyButton.textContent = "Copy email";
    copyStatus.textContent = "";
  }, 2500);
});
