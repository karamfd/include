document.addEventListener("DOMContentLoaded", async () => {
  const includes = [...document.querySelectorAll("include")];
  const cache = new Map();

  await Promise.all(includes.map(async (include) => {
    const src = include.getAttribute("src");

    if (!src) return;

    try {
      const html = await loadFile(src);
      const fragment = document.createRange().createContextualFragment(html);
      include.parentNode.insertBefore(fragment, include.nextSibling);
      include.remove();
    } catch (error) {
      include.replaceWith(document.createComment(`Include failed: ${src}`));
      console.error(`Error fetching or inserting content: ${error}`);
    }
  }));

  async function loadFile(file) {
    if (cache.has(file)) return cache.get(file);
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const text = response.text();
    cache.set(file, text);
    return text;
  }
});
