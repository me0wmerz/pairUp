let food = JSON.parse(localStorage.getItem("food")) || []
function displayFood() {
  document.getElementById('foodExample').innerHTML = ''
  let currentIndex = 0
  food.forEach(food => {
    let foodElem = document.createElement('li')
    foodElem.innerHTML = `
  <a href="${food.source}">${food.title}</a>
  <button class="delete" value="${currentIndex}"></button>
  `
    document.getElementById("foodExample").append(foodElem)
    currentIndex++
  })
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    const index = parseInt(event.target.value)
    console.log(event.target.value)
    food.splice(index, 1)
    localStorage.setItem("food", JSON.stringify(food))
    displayFood()
  }
})

displayFood()