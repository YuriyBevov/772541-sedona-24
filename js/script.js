var search = document.querySelector(".button-search");
var form = document.querySelector(".hotel-searching");

  search.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("visually-hidden");
  }
);
