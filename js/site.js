(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var links = window.SITE_LINKS || {};

  function activate(el, url) {
    var a = document.createElement("a");
    a.href = url;
    a.textContent = el.textContent;
    a.className = el.className.replace("pending-link", "").trim();
    if (/^https?:/i.test(url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    el.replaceWith(a);
  }

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = links[el.getAttribute("data-link")];
    if (!url) return;
    if (/^https?:/i.test(url) || url.indexOf("mailto:") === 0) {
      activate(el, url);
    } else {
      // Local file (e.g. the CV PDF): only switch on once it has actually been uploaded.
      fetch(url, { method: "HEAD" })
        .then(function (r) { if (r.ok) activate(el, url); })
        .catch(function () {});
    }
  });
})();
