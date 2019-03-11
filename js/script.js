var search = document.querySelector(".button-search");
var form = document.querySelector(".hotel-searching");
var checkIn = form.querySelector("[name=check-in]");
var checkOut = form.querySelector("[name=check-out]");
var adults = form.querySelector("[name=adults]");

form.classList.add("hidden");

search.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");
    form.classList.remove("form-error");
});

form.addEventListener("submit",function(evt){
    if(!checkIn.value || !checkOut.value) {
        evt.preventDefault();
        form.classList.add("form-error");
  }
});
