// API for recipes
document.getElementById("search-btn").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById("search").value = ""
  let userIngredients


  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=721aa72fafd34a0788bd54bc3d53543c&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&includeIngredients=${userIngredients}=10`)
    .then(res => {
      console.log(res)
      for (let indexRecipe = 0; indexRecipe < 9; indexRecipe++) {
        let foodInfo = res.data.results[indexRecipe]
        console.log(foodInfo.title)
        console.log(foodInfo.image)
        console.log(foodInfo.summary)
        console.log(foodInfo.readyInMinutes)
        console.log(foodInfo.servings)
        //displays all cuisine types in array (below)
        let cuisineTypes = foodInfo.cuisines.join(", ")
        document.getElementById('mainFoodName').innerHTML = `
            ${foodInfo.title}`

        document.getElementById('foodPic').innerHTML = `
        <img src="${foodInfo.image}" alt="${foodInfo.title} picture">
        `
        //displays all steps in cooking instructions (below)
        let totalStepInstructions = ""
        let instructions = foodInfo.analyzedInstructions[0].steps
        instructions.forEach((instructionSteps) => {
          totalStepInstructions += instructionSteps.step
        })
        console.log(totalStepInstructions)

        //for loop to retrieve all ingredients
        let ingredientInfo = foodInfo.nutrition.ingredients

        let ingredientList = []
        ingredientInfo.forEach((ingredientDetails) => {
          ingredientList.push(" " + ingredientDetails.amount + " " + ingredientDetails.name)

        })
        console.log(ingredientList)
        //setting inner HTML for ingredients
        document.getElementById("foodIngredient").innerHTML = `
          <h4>${ingredientList}</h4>
          `
        document.getElementById('foodIngredient').value = ''

        //setting inner HTML for instructions
        document.getElementById("foodInstructions").innerHTML = `
          <h4>${totalStepInstructions}</h4>
          `
        document.getElementById('foodInstructions').value = ''

        //setting inner HTML for nutrition -- ***NOT DONE YET***
        let nutritionInfo = foodInfo.nutrition.nutrients
        console.log("ping" + nutritionInfo[0].name + ": " + nutritionInfo[0].amount)
        console.log("ping" + nutritionInfo[8].name + ": " + nutritionInfo[8].amount)
        console.log("ping" + nutritionInfo[3].name + ": " + nutritionInfo[3].amount)
        document.getElementById("calories").innerHTML = `
          <h4>${nutritionInfo[0].name}: ${nutritionInfo[0].amount}</h4>`
        document.getElementById("protein").innerHTML = `
          <h4>${nutritionInfo[8].name}: ${nutritionInfo[8].amount}</h4>
        `
        document.getElementById("carbs").innerHTML = `
         <h3>${nutritionInfo[3].name}: ${nutritionInfo[3].amount}</h3>
        `
      }
    })
    .catch(err =>
      console.log(err))

  document.getElementById('foodName').value = ''
  document.getElementById('foodIngredient').value = ''
  document.getElementById('foodInstructions').value = ''
  document.getElementById('foodNutrition').value = ''
  // FOR USE LATER -- // document.getElementById('recipe').innerHTML = "No recipe found - please try other ingredients"   
})

//  API for cocktails
axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => {
    console.log(res)
    const drinkInfo = res.data.drinks[0]
    document.getElementById('drinkName').innerHTML = `
      <h2>${drinkInfo.strDrink}</h2>
      <img src=${drinkInfo.strDrinkThumb} alt=${drinkInfo.strDrink} pic" width="250" >
      `


    //setting array of objects for key/value pair since API does not format it in such a way
    let drinkList = [
      {
        measure: drinkInfo.strMeasure1,
        ingredient: drinkInfo.strIngredient1
      },
      {
        measure: drinkInfo.strMeasure2,
        ingredient: drinkInfo.strIngredient2
      },
      {
        measure: drinkInfo.strMeasure3,
        ingredient: drinkInfo.strIngredient3
      },
      {
        measure: drinkInfo.strMeasure3,
        ingredient: drinkInfo.strIngredient3
      },
      {
        measure: drinkInfo.strMeasure4,
        ingredient: drinkInfo.strIngredient4
      },
      {
        measure: drinkInfo.strMeasure5,
        ingredient: drinkInfo.strIngredient5
      },
      {
        measure: drinkInfo.strMeasure6,
        ingredient: drinkInfo.strIngredient6
      },
      {
        measure: drinkInfo.strMeasure7,
        ingredient: drinkInfo.strIngredient7
      },
      {
        measure: drinkInfo.strMeasure8,
        ingredient: drinkInfo.strIngredient8
      },
      {
        measure: drinkInfo.strMeasure9,
        ingredient: drinkInfo.strIngredient9
      },
      {
        measure: drinkInfo.strMeasure10,
        ingredient: drinkInfo.strIngredient10
      },
      {
        measure: drinkInfo.strMeasure11,
        ingredient: drinkInfo.strIngredient11
      },
      {
        measure: drinkInfo.strMeasure12,
        ingredient: drinkInfo.strIngredient12
      },
      {
        measure: drinkInfo.strMeasure13,
        ingredient: drinkInfo.strIngredient13
      },
      {
        measure: drinkInfo.strMeasure14,
        ingredient: drinkInfo.strIngredient14
      },
      {
        measure: drinkInfo.strMeasure15,
        ingredient: drinkInfo.strIngredient15
      }
    ]

    drinkList.forEach((cocktailIngredient, i) => {
      const drinkElem = document.createElement('p')
      drinkElem.className = "cocktailIngredient"

      if (cocktailIngredient.measure) {
        drinkElem.innerHTML = `
          <li>${cocktailIngredient.measure} ${cocktailIngredient.ingredient}</li>
          `
        document.getElementById("cocktailIngredient").append(drinkElem)
      }
    })



    //set inner HTML to the instructions given on drink API

    console.log(drinkInfo.strInstructions)
    document.getElementById('drinkInstructions').innerHTML = `
      <h4>${drinkInfo.strInstructions}</h4>
      `
  })
  .catch(err =>
    console.log(err))

















































//

drinkList.forEach((cocktailIngredient, i) => {
  const drinkElem = document.createElement('p')
  drinkElem.className = "cocktailIngredient"

  if (cocktailIngredient.measure) {
    drinkElem.innerHTML = `
          <li>${cocktailIngredient.measure} ${cocktailIngredient.ingredient}</li>
          `
    document.getElementById("cocktailIngredient").append(drinkElem)
  }
})


//API for recipes

//API for calories
  // const options = {
  //   method: 'GET',
  //   url: 'https://food-calorie-data-search.p.rapidapi.com/api/search',
  //   params: { keyword: 'chicken' },
  //   headers: {
  //     'x-rapidapi-key': 'e867de6562mshdf4837fcdae9882p1cb737jsn366b080e13f2',
  //     'x-rapidapi-host': 'food-calorie-data-search.p.rapidapi.com'
  //   }
  // };

//API for beer/cocktail pairings 

//API for related YouTube videos 

//built-in timer? for user to start/stop time and have multiple timers based on the time it takes?


















//NOTES / NOT WORKING YET BELOW
  // this Yelp API might work (doesn't return error, but doesn't currently work)
  // const options = {
  //   method: 'POST',
  //   url: 'https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'x-rapidapi-key': 'e867de6562mshdf4837fcdae9882p1cb737jsn366b080e13f2',
  //     'x-rapidapi-host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
  //   },
  //   data: { text: '<REQUIRED>', accessToken: 'u-DWHHbDxAen8oE_kCupUogYAUfwxcLZV-uu1FJBg3YuxBH7LlrtSpdHSb1uzR_xpfbfPlw8mlK_iyG7QaDhOCzV7bQiwhi3FSeTaDCmGJtAkvOSwgJvCPICWumbYXYx' }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });




  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

    // document.getElementById("start").addEventListener('click', () => {
    //   axios.get("GET https://api.yelp.com/v3/businesses/search")
    //   .then(res => {
    //      restaurantSearch = res.data[0]
    //     console.log(restaurantSearch())
    //      .catch(err => console.log(err))
    //   })
    // })