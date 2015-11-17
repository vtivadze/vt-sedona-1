var searchFromControlButton = document.querySelector(".search-control .btn");
var searchForm = document.querySelector(".search-form");

searchFromControlButton.addEventListener("click", function(event) {
	event.preventDefault();
	searchForm.classList.toggle("visible");
});