let index = 0// API for recipes
function indexLog(){
  console.log(index)
}
indexLog()
let userIngredients = "banana"

document.getElementById("search").addEventListener("click", event => {
  event.preventDefault()
  console.log(userIngredients)
  userIngredients = document.getElementById("userInput").value
  console.log(userIngredients)
  loadData(userIngredients)




  // FOR USE LATER -- // document.getElementById('recipe').innerHTML = "No recipe found - please try other ingredients"   
})

function loadData(userIngredients) {
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3f5180d6774b495eb794eb02a08d8db6&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients=${userIngredients}=10`)
    .then(res => {
      console.log("Hellooooooo")
      let food = res.data
      console.log(food)
      loadSideBar(food)
      loadFood(food, index)

    })
    .catch(err =>
      console.log(err))
}

function loadSideBar(food) {
  document.getElementById("itemList").innerHTML = ""
  for (let i = 0; i < 10; i++) {

    let foodItem = food.results[i].title
    const itemElem = document.createElement('tr')
    itemElem.innerHTML = `<td>
                      <button class="button is-white moreRecipes" id="${i}">
                        ${foodItem}
                      </button>
                    </td>`
    document.getElementById('itemList').append(itemElem)
  }
}

function loadFood(food, index){
  document.getElementById('recipeImg').innerHTML = `<img
                      src="${food.results[index].image}"
                      alt="RecipieImg" >`
  
  var buttons = document.getElementsByClassName('moreRecipes');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let i = this.getAttribute('id')
      console.log(i)
      index = i
      document.getElementById('recipeImg').innerHTML = `<img
                      src="${food.results[index].image}"
                      alt="RecipieImg" >`
    });
  }
}

indexLog()