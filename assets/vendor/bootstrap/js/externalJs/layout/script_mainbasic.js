document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("tempat-kandungan");
  const sidebarLinks = document.querySelectorAll(".sidebar-menu .sidebar-item");

  if (contentArea) {
    loadContent("../../module/chassis/chassis.html");
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      sidebarLinks.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const targetPage = this.getAttribute("href");

      loadContent(targetPage);
    });
  });

  function loadContent(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal cari fail");
        return response.text();
      })
      .then((data) => {
        contentArea.innerHTML = data;
      })
      .catch((error) => {
        contentArea.innerHTML =
          "<h2>Harap maaf, kandungan tidak dijumpai.</h2>";
        console.error("Ralat:", error);
      });
  }
});
