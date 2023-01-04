document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("include");

  for (const include of includes) {
    loadFile(include.getAttribute("src"), (url) => {
      include.insertAdjacentHTML("afterend", url);
      include.remove();
    });
  }

  function loadFile(filename, callback) {
    fetch(filename)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`HTTP error: ${response.status}`);
        }
      })
      .then((url) => callback(url));
  }
});
