document.addEventListener('DOMContentLoaded', () => {

 // Get all "navbar-burger" elements
 const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

 // Check if there are any navbar burgers
 if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
   el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

   });
  });
 }
});
// make search button for searching food 

const apiKey ="721aa72fafd34a0788bd54bc3d53543c"

document.getElementById("search_btn").addEventListener("click", event =>{
 event.preventDefault()
 const ingreDients = document.getElementsByClassName("ingredients").value
 axios.get(`https://api.spoonacular.com/food/ingredients/search&applid=${apiKey}`)
  .then(res => {

})