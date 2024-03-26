const heroBtnRef = document.querySelector("#zero-butt");
heroBtnRef.addEventListener("click", () => {
  console.log(12);
});

function showSectionOnClick(buttonId, sectionId) {
  console.log(document.getElementById(buttonId));
  document.getElementById(buttonId).addEventListener("click", function () {
    document.getElementById(sectionId).classList.remove("visually-hidden");
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });

    // var htmlCode = "<button>1331</button>";

    // // Створити нову вкладку
    // var newTab = window.open();

    // // Записати HTML-код у нову вкладку
    // newTab.document.write(htmlCode);
  });
}

showSectionOnClick("zero-butt", "first-section");
showSectionOnClick("first-butt", "second-section");

document.getElementById("module-butt").addEventListener("click", function () {
  document.getElementById("section-0").classList.add("visually-hidden");
  document.getElementById("section-1").classList.add("visually-hidden");
  document.getElementById("section-2").classList.add("visually-hidden");
  document.getElementById("section-3").classList.remove("visually-hidden");
  window.scrollBy({
    top: -1500,
    behavior: "smooth",
  });
});
