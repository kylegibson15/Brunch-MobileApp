var form = document.getElementById('food')
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var id = event.target.elements.foodItem.value;
    id = id.toLowerCase()
  var restaurantsArray = menuItems.restaurants
  var section = document.getElementById('foodItems')
  section.innerHTML = '';
  function findMenuItems(id){
    for(var i = 0; i < restaurantsArray.length; i++){

      var currentRestaurant = restaurantsArray[i]
      var currentRestaurantName = currentRestaurant.restaurant.name
      var currentRestaurantMenuItems = currentRestaurant.restaurant.menu.items
      var currentRestaurantAddress = currentRestaurant.restaurant.location.address
      var currentRestaurantLocale = currentRestaurant.restaurant.location.locality
      var currentRestaurantLogo = currentRestaurant.restaurant.location.logo
      var currentRestaurantLink = currentRestaurant.restaurant.location.menu_Url


      for(var j = 0; j < currentRestaurantMenuItems.length; j++){
        for(var k in currentRestaurantMenuItems[j]){

          var currentLabels = currentRestaurantMenuItems[j][k].labels
          var currentItem = currentRestaurantMenuItems[j][k].item
          var currentDescription = currentRestaurantMenuItems[j][k].description
          var currentRestaurantMenuItemPrice = currentRestaurantMenuItems[j][k].price



          for(var l = 0; l < currentLabels.length; l++){
            if(id === currentLabels[l]){

              var div = document.createElement('div')
              var priceLocale = document.createElement('div')
              var h5 = document.createElement('h5')
              var h6 = document.createElement('h6')
              var link = document.createElement('a')
              var address = document.createElement('p')
              var locale = document.createElement('p')
              var price = document.createElement('p')
              var logo = document.createElement('img')
              var linkLogo= document.createElement('div')
              var click = document.createElement('p')
              var clickArrow = document.createElement('img')

              div.classList.add('food-container')
              h5.innerText = currentItem
              h6.innerText = currentDescription
                priceLocale.classList.add('price-locale')
              price.innerText = `$ ${currentRestaurantMenuItemPrice}`
              link.setAttribute('href', currentRestaurantLink)
                link.classList.add('link')
                linkLogo.classList.add('linkLogo')
              logo.setAttribute('src', currentRestaurantLogo)
                logo.classList.add('logo')
              address.innerText = currentRestaurantAddress
              locale.innerText = currentRestaurantLocale

              section.append(div)
              div.append(h5)
              div.append(h6)
              div.append(priceLocale)
                priceLocale.append(price)
                priceLocale.append(locale)
              div.append(address)
              div.append(linkLogo)
                linkLogo.append(link)
                  link.append(logo)

            }else{

            }
          }
        }
      }
    }
  }
findMenuItems(id)
})
