document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("include");

  for (const include of includes) {
    load_file(include.getAttribute("src"), (url) => {
      include.insertAdjacentHTML("afterend", url);
      include.remove();
    });
  }

  function load_file(filename, callback) {
    fetch(filename)
      .then((response) => response.text())
      .then((url) => callback(url));
  }
});
