var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var slider;
function sliderStyling() {
  slider = document.getElementById("featured-slider")
  slider.style.height = '210px'
  slider.style.backgroundColor = 'white'
  slider.style.overflowX = 'slider'
  slider.style.position = 'relative'
  slider.style.width = '100%'
}

function featuredSection() {

  sliderStyling();


  document.getElementById('feature-btn').style.display = "none";
  document.getElementById('feature-img').style.display = "none";
  console.log(slider)

  var featured = ['snooze','tamayo','la loma'];
  // ['snooze','tamayo','the nickel','la loma','beatrice & woodsley']

for(var i = 0; i < featured.length; i++){
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${featured[i]}&apikey=b23400682136545e76a3ebb355532993`)
  .then((response) => {
    return response.json()
    .then((restaurantData) => {

      var div = document.createElement('div')
        div.classList.add('restaurantInfo')
        div.style.height = "180px"
        div.style.width = "50%"
        div.style.border = "1px solid black"
        div.style.margin = '.5rem'

      var name;
        name = document.createElement('h6')
        name.innerText = restaurantData.restaurants[0].restaurant.name
      var rating = document.createElement('p')
        rating.innerText = `rating:  ${restaurantData.restaurants[0].restaurant.user_rating.aggregate_rating}`
      var image = document.createElement('img')
        image.setAttribute('src',restaurantData.restaurants[0].restaurant.featured_image)
        image.classList.add('restaurantImage')
        image.style.height = "50%"
        image.style.width = "100%"


      slider.append(div)
      div.append(image)
      div.append(name)
      div.append(rating)
    })
  })
}
}
