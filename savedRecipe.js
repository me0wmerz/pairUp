let food = JSON.parse(localStorage.getItem("food")) || []
food.forEach(food => {
  let foodElem = document.createElement('li')
  foodElem.innerHTML = `
  <a href="${food.source}">${food.title}</a>
  `
  document.getElementById("foodExample").append(foodElem)
})
