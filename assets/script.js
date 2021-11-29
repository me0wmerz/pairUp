
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
              
const inputs = document.querySelectorAll('input')



document.getElementById("btn").addEventListener("click", event =>{
 event.preventDefault()
 const ingredientsEl = document.getElementById("ingredients").value
 
  axios.get(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients=${ingredients}&number=6`)
  .then(res => {  
    console.log(res)
    for (let indexRecipe = 0; indexRecipe < 6; indexRecipe++) {
      let foodInfo = res.data.results[indexRecipe]
      console.log(foodInfo.title)
      console.log(foodInfo.image)
      
      const foodnameElem = document.createElement("div")
      foodnameElem.className = "title-1"
      if (foodInfo.title){

        foodnameElem.innerHTML=`
          <div class="card" >
          <h3>${foodInfo.title}</h3>
          <img src="${foodInfo.image}" alt="${foodInfo.title}">
          </div>
          <div class="food-name" id="title-1"> </div>
        </div>
          <button class="button is-warning is-light" > <a href="./abehenry.html"> Click me </a> </button>

          
        `
        document.getElementById("food-info").append(foodnameElem)
        // document.getElementById("image-1").append(foodnameElem)
       
      }

    }
  })
    .catch(err =>
      console.log(err))
   
})