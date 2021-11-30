function loadData() {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => {
    const drink = res.data
    
    document.getElementById('drinkName').innerHTML = `${drink.drinks[0].strDrink}`
    
    document.getElementById('drinkImg').innerHTML = `<img
                          src="${drink.drinks[0].strDrinkThumb}"
                          alt="Drinks">`
    document.getElementById('instructions').innerHTML = `${drink.drinks[0].strInstructions}`




  }).catch(err => console.log(err))

}

loadData()

