//BELOW IS FOR FOOD SECTION
let foodIndex = 0
let ingredientsEl = "egg"
// make search button for searching food
// make search button for searching food

const apiKey = "721aa72fafd34a0788bd54bc3d53543c"
// const apiKey = "3f5180d6774b495eb794eb02a08d8db6"
const inputs = document.querySelectorAll('input')
//function for loading data
function loadUserFood(foodIndex, ingredientsEl){
  axios.get(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients=${ingredientsEl}&number=10`)
    .then(res => {
      //for basic recipe info
      let foodInfo = res.data.results[foodIndex]
      console.log(foodInfo)

      document.getElementById('foodName').innerHTML = `
              <h2 id="foodTitle">${foodInfo.title}</h2>
              <button id="foodSave" class="button is-primary is-rounded " data-title="${foodInfo.title}" data-source="${foodInfo.spoonacularSourceUrl}"> Save </button>
              <br>
              `

      document.getElementById('foodPic').innerHTML = `
              <img src=${foodInfo.image} alt=${foodInfo.title} picture" width="350">
              <br>
            `
      document.getElementById('totalTime').innerHTML = `
              Ready In: ${foodInfo.readyInMinutes} minutes
              `
      document.getElementById('servings').innerHTML = `
              Serving Size: ${foodInfo.servings} 
              `
      ///ADD STYLING (WRAP AROUND PIC, OR SCROLL-DOWN ON BULMA)
      document.getElementById('summary').innerHTML = `
              ${foodInfo.summary} 
              `

      let ingredientInfo = foodInfo.nutrition.ingredients

      ingredientInfo.forEach((ingredientDetails) => {
        let ingredientList = document.getElementById("ingredients")

        let newIngredients = document.createElement("p")

        newIngredients.innerHTML = `
          ${ingredientDetails.amount} ${ingredientDetails.unit} ${ingredientDetails.name}
          `
        ingredientList.append(newIngredients)
      })
      // }

      let totalStepInstructions = ""
      let instructions = foodInfo.analyzedInstructions[0].steps
      instructions.forEach((instructionSteps) => {
        totalStepInstructions += instructionSteps.step
      })
      console.log(totalStepInstructions)

      document.getElementById("foodInstructions").innerHTML = `
          <p>${totalStepInstructions}</p>
          `

      let nutritionInfo = foodInfo.nutrition.nutrients

      document.getElementById("calories").innerHTML = `
          ${nutritionInfo[0].name}: ${nutritionInfo[0].amount} ${nutritionInfo[0].unit}
          `
      document.getElementById("fat").innerHTML = `
          ${nutritionInfo[1].name}: ${nutritionInfo[1].amount} ${nutritionInfo[1].unit}
          `
      document.getElementById("carbs").innerHTML = `
          ${nutritionInfo[3].name}: ${nutritionInfo[3].amount} ${nutritionInfo[3].unit}
          `
      document.getElementById("protein").innerHTML = `
          ${nutritionInfo[8].name}: ${nutritionInfo[8].amount} ${nutritionInfo[8].unit}
          `
      document.getElementById("sodium").innerHTML = `
          ${nutritionInfo[7].name}: ${nutritionInfo[7].amount} ${nutritionInfo[7].unit}
          `
      document.getElementById("sugar").innerHTML = `
          ${nutritionInfo[5].name}: ${nutritionInfo[5].amount} ${nutritionInfo[5].unit}
          `
      document.getElementById("cholesterol").innerHTML = `
          ${nutritionInfo[6].name}: ${nutritionInfo[6].amount} ${nutritionInfo[6].unit}
          `
      document.getElementById("fiber").innerHTML = `
          ${nutritionInfo[13].name}: ${nutritionInfo[13].amount} ${nutritionInfo[13].unit}
          `
    })
    .catch(err => {
      console.log(err)
    })
}

document.getElementById("search").addEventListener("click", event => {
  event.preventDefault()
  ingredientsEl = document.getElementById("userInput").value
  loadUserFood(foodIndex, ingredientsEl)
  loadSideBar(ingredientsEl)

})

document.addEventListener('click', event => {
  if (event.target.id === 'foodSave') {
    console.log(event.target.dataset)
    let food = JSON.parse(localStorage.getItem("food")) || []
    food.push({
      title: event.target.dataset.title,
      source: event.target.dataset.source
    })
    localStorage.setItem("food", JSON.stringify(food))
    food.forEach(food => {
      let foodElem = document.createElement('li')
      foodElem.innerHTML = `
      <a href="${food.source}">${food.title}</a>
      `
    })
    
  }
  else if (event.target.classList.contains('moreRecipes')){
    let indexx = event.target.getAttribute('id')
    loadUserFood(indexx, ingredientsEl) /// fix this if not work
  }
  
})

function loadSideBar(ingredientsEl) {
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients=${ingredientsEl}=10`)
    .then(res => {
      let food = res.data
      createList(food)
    })
    .catch(err =>
      console.log(err))
}

function createList(food) {
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