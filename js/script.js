var search = document.querySelector(".button-search");
var form = document.querySelector(".hotel-searching");

  form.classList.add("hidden");
  
  search.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");
  }
);
