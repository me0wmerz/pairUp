//  API for cocktails
axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => {
    console.log(res)
    const drinkInfo = res.data.drinks[0]
    document.getElementById('drinkName').innerHTML = `
      <h2>${drinkInfo.strDrink}</h2>
      <button id="drinkSave" class="button is-primary is-rounded "> Save </button>
      `
    document.getElementById('drinkImg').innerHTML =
      `
    <img src=${drinkInfo.strDrinkThumb} alt=${drinkInfo.strDrink} pic" width="250">
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
      ${drinkInfo.strInstructions}
      `
  })
  .catch(err =>
    console.log(err))

