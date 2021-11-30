let savedFoods = []

savedFoods = localStorage.getItem("food")
console.log(food[0].title)

document.getElementById('savedFoods').innerHTML = `
  <div class="media-content ">
    <div class="content" style="align-content: center;">
      <p>
      <strong>${food.title} </strong>
      <br>
      <br>
      </p>
    <button class="button is-primary is-rounded href="${food.source}">Recipe Link</button>
    <button class="button is-danger is-rounded mr-6 " id="remove">Remove Recipe</button>
    </div>
  </div>
`
  ** must stringify plz

// window.localStorage.getItem('user');
// JSON.parse(window.localStorage.getItem('user'))

// console.log(user)

// console.log(localStorage(food.title))


// document.addEventListener('click', event => {
//   if (event.target.id === 'foodSave') {
//     console.log(event.target.dataset)
//     let food = JSON.parse(localStorage.getItem("food")) || []
//     food.push({
//       title: event.target.dataset.title,
//       source: event.target.dataset.source
//     })
//     localStorage.getItem("food", JSON.stringify(food))
//   }
// })



// const renderFoodList = () => {
//   document.getElementById('savedFoods').innerHTML = ''

//   foods.forEach(food, i) => {
//   const foodElem = document.createElement('p')
//   foodElem.className = "savedFoods"

//   foodElem.innerHTML = `
//       <${foodName}
//       `

//   document.getElementById("savedFoods").append(foodElem)
// }
//   }


// document.getElementById
// const collectedFood = () => {
//   document.getElementById('savedFoods').innerHTMLvalue = food.title

// }

// let food = []

// var savedFoodInfo = localStorage.getItem(food)

// // localStorage.getItem(title)

// document.getElementById("savedFoods").innerHTML = savedFoodInfo

// console.log(food)


// document.getElementById("foodSave").addEventListener("click", => {
//   preventDefault

//   let savedItems = document.getElementById(foodSave.value)



// })

// const renderitems = () => {
//   document.getElementById('items').innerHTML = ''


//   for (let i = 0; i < items.length; i++) {
//     const itemElem = document.createElement('li')

//     itemElem.innerHTML`


//     `
//     document.getElementById('items').append(itemElem)
//   }



//   document.getElementById('addItem').addEventListener('click', event => {
//     event.preventDefault()


//     items.push(item)

//     renderItems()

//     document.getElementById('item').value = ''

//   })

document.getElementById('remove').addEventListener('click', event => {
  event.preventDefault()

})

document.addEventListener('click', event => {
  if (event.target.className === 'remove') {
    event.target.parentNode.remove()
  }
})

document.addEventListener('click', event => {
  if (event.target.id === 'foodSave') {
  }
})


//ideas

// Steps

// // 1) save the value of food name & API link(spoontacular) and drink name
//       -set an event listener to the innerHTML buttons (FoodSave and DrinkSave)
// 2) retrieve values on SavedRecipes page(in nav bar) and append to the list
// 3) need to make boolean isSaved: true
// if isSaved == false, then remove by splicing
//   ^ that way can remove recipes if desired
// 4) 

