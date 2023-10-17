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

// PRODUCTS GALLERY
function getElement(selection) {
  const element = document.querySelector(selection);
  // console.log(element);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img-carro")];
  // console.log(this.list)
  // target
  this.modal = getElement(".modal");
  this.imageName = getElement(".image-name");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  // self ref
  // let self = this;

  // bind functions
  // this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.shooseImage = this.shooseImage.bind(this);

  // container event
  this.container.addEventListener(
    "click",
    function (e) {
      console.log(this);
      // self.openModal();
      if (e.target.classList.contains("img-carro")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  // console.log(selectedImage, list );
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      // console.log(image);
      return `<img src="${image.src}"title="${image.title}"
    data-id="${
      image.dataset.id
    }" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.modalImages.addEventListener("click", this.shooseImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.shooseImage);
};

Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};
Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

Gallery.prototype.shooseImage = function (e) {
  if (e.target.classList.contains("modal-img")) {
    // console.log(e.target)
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");

    this.setMainImage(e.target);
    e.target.classList.add("selected");
  }
};

const reforzadas = new Gallery(getElement(".carrocerias-reforzadas"));
const standart = new Gallery(getElement(".carrocerias-standart"));
const estanques = new Gallery(getElement(".estanques"));

// DESCARGAR PDF
document.getElementById("descargarPDF").addEventListener("click", function () {
  var url = "dd/CARROCERIAS-LINEA-REFORZADA-1.pdf"; // Reemplaza 'tu_archivo.pdf' con la ruta correcta a tu archivo PDF.
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";

  xhr.onload = function () {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = "archivo.pdf"; // Puedes establecer el nombre del archivo aquí.
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  xhr.open("GET", url);
  xhr.send();
});
