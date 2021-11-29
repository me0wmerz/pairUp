
const savedRecipes = []



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


