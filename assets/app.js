

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