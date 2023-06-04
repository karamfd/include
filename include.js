document.addEventListener("DOMContentLoaded", async () => {
  const includes = [...document.querySelectorAll("include")];

  for (const include of includes) {
    try {
      const url = await loadFile(include.getAttribute("src"));
      const fragment = document.createRange().createContextualFragment(url);
      include.parentNode.insertBefore(fragment, include.nextSibling);
      include.remove();
    } catch (error) {
      console.error(`Error fetching or inserting content: ${error}`);
    }
  }

  async function loadFile(file) {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  }
});
