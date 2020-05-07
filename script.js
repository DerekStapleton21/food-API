


fetch("http://localhost:8088/food")
    .then(food => food.json())
    .then(parsedFoods => {
       console.table(parsedFoods)

       parsedFoods.forEach(food => {

        console.log(food.name)

        document.querySelector(".foodList").innerHTML += `<div>
        <h3>${food.name}</h3>
        <p>${food.category}</p>
        <p>${food.ethnicity}</p>
        <p>${food.barcode}</p>
        </div>`
           
       });

       

        
        
        
    })


    fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                        food.ingredients = productInfo.product.ingredients_text
                      } else {
                        food.ingredients = "no ingredients listed"
                    }
                    

                    // Build HTML string for individual food
                    // Add HTML string to DOM
                    
                })
        })
    })
 












// fetch("http://localhost:8088/food")
//           .then(r => r.json())
//           .then(myParsedFoods => {

//             myParsedFoods.forEach(food => {
//                 console.log(food)

//                 fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
//                 .then(r => r.json())
//                 .then(productInfo => {
//                   if (productInfo.product.ingredients_text) {
//                     food.ingredients = productInfo.product.ingredients_text
//                   } else {
//                     food.ingredients = "no ingredients listed"
//                   }
//                   if ()
//                 })
//             });
//           })
