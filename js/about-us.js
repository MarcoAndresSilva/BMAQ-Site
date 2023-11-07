// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const topLinkWsp = document.querySelector(".top-link--wsp");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // setup back to top link
  if (scrollHeight > 500) {
    // console.log("helo");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }

  if (scrollHeight > 500) {
    // console.log("helo");
    topLinkWsp.classList.add("show-link");
  } else {
    topLinkWsp.classList.remove("show-link");
  }
});

// DESCARGAR PDF
document.getElementById("descargarPDF").addEventListener("click", function () {
  var url = "dd/Presentación-BMAQ.pdf"; // Reemplaza 'tu_archivo.pdf' con la ruta correcta a tu archivo PDF.
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";

  xhr.onload = function () {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = "catalogo.pdf"; // Puedes establecer el nombre del archivo aquí.
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  xhr.open("GET", url);
  xhr.send();
});
