var menuItems = {
    "restaurants":[
        {
            "restaurant": {
                "name": "Snooze",
                "location": {
                    "address": "2262 Larimer Street, Denver 80205",
                    "locality": "LoDo",
                    "city": "Denver",
                    "city_id": 305,
                    "latitude": "39.7556527778",
                    "longitude": "-104.9889972222",
                    "zipcode": "80205",
                    "country_id": 216,
                    "locality_verbose": "LoDo, Denver",
                    "logo": "../pictures/snoozelogo-300x145.png",
                    "menu_Url":'http://snoozeeatery.com/co-menu/'
                },
                "menu":{
                    "items":[
                      {
                        "Pineapple Upside Down Pancakes":{
                            "item":"Pineapple Upside Down Pancakes",
                            "description": 'Buttermilk pancakes with caramelized pineapple chunks, housemade vanilla crème anglaise and cinnamon butter.',
                            "labels": ['pancake','pancakes','buttermilk','pineapple','vanilla','cinnamon','butter','pineapple upside down pancakes'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Sweet Potato Pancakes":{
                            "item":"Sweet Potato Pancakes",
                            "description": 'Our signature sweet potato buttermilk pancakes topped with homemade caramel, candied pecans and ginger butter.',
                            "labels": ['pancake','pancakes','buttermilk','sweet potato','caramel','pecan','ginger','butter','candied',"sweet potato pancakes"],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Blackberry SubLIME Pancakes":{
                            "item":"Blackberry SubLIME Pancakes",
                            "description": 'Buttermilk pancakes loaded with white chocolate chips then topped with Key Lime pie filling, graham cracker crumbs, plump blackberries, and mascarpone whip cream.',
                            "labels": ['pancake','pancakes','buttermilk','chocolate','key lime','graham cracker','blackberries','mascarpone','whip cream',"blackberry sublime pancakes",'blackberry pancakes'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "OMG! French Toast":{
                            "item":"OMG! French Toast",
                            "description": 'Brioche stuffed with mascarpone then griddled and topped with vanilla crème, salted caramel, fresh strawberries and toasted coconut. O. M. G.',
                            "labels": ['french toast','toast','strawberry','strawberries','brioche','mascarpone','griddle','griddled','vanilla','creme','salted caramel','caramel','fresh','coconut'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "French Toast Neat":{
                            "item":"French Toast Neat",
                            "description": 'For the purist, French toasted brioche completed with whipped mascarpone cream, seasonal fruit and Slopeside pure Vermont maple syrup.',
                            "labels": ['french toast','toast','brioche','mascarpone','cream','fruit','maple','syrup'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "The Snooze Classic":{
                            "item":"The Snooze Classic",
                            "description": 'Three farm fresh cage free eggs cooked any style and your choice of ham, bacon, sausage, chorizo, pulled pork, chicken sausage or soyrizo. Includes hash browns and choice of toast.',
                            "labels": ['egg','eggs','ham','bacon','sausage','chorizo','pulled pork','pork','chicken','soyrizo','soy','hash browns','toast'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "3 Egg Omelet or Scramble":{
                            "item":"3 Egg Omelet or Scramble",
                            "description": 'Our farm fresh eggs with a choice of three fillings served with hash browns and choice of toast or tortillas **Now available as a tofu scramble!**',
                            "labels": ['eggs','egg','strawberry','strawberries','blueberry','blueberries','hash browns','toast','tortillas','tortilla','tofu','scramble','omelet'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Breakfast Pot Pie":{
                            "item":"Breakfast Pot Pie",
                            "description": 'Snooze’s homemade rosemary sausage gravy smothers a flaky puff pastry, topped with an egg your style (we’d say sunny side up!). You’ve reached breakfast bliss, complete with hash browns.',
                            "labels": ['rosemary','sausge','gravy','pastry','pastries','egg','eggs','hash browns','hash brown','pot pie'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Snooze Spuds Deluxe":{
                            "item":"Snooze Spuds Deluxe",
                            "description": 'A heaping portion of our hash browns, covered with melted cheddar & jack cheese, scallions plus choice of two fillings – see below. Topped with two cage free eggs your style!',
                            "labels": ['hash brown','hash browns','cheese','cheesy','cheddar','jack','scallions','eggs','egg'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Corned Beef Hash":{
                            "item":"Corned Beef Hash",
                            "description": 'Snooze’s signature shredded hash mixed with locally made corned beef, caramelized poblanos and onions. Topped with two eggs your style & toast or tortillas.',
                            "labels": ['hash','shredded','corned beef','beef','caramelized','caramel','poblano peppers','poblano','peppers','hot','onions','egg','eggs','toast','tortillas','tortilla'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Sweet Potato Hash":{
                            "item":"Sweet Potato Hash",
                            "description": 'Sweet potato and fennel chicken sausage hash fired up with honey Cholula, carrots, poblanos, leeks, jack cheese and baby kale, topped with two cage free eggs your style.',
                            "labels": ['sweet potato','potato','chicken','sausage','hash','cholula','honey','carrots','poblano peppers','peppers','poblano','leeks','leek','cheese','cheesy','jack','kale','baby kale','eggs','egg'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Juan’s Breakfast Tacos":{
                            "item":"Juan’s Breakfast Tacos",
                            "description": 'Three fresh corn or flour tortillas topped with scrambled eggs, shredded hash browns, jack cheese, green chile hollandaise & pico de gallo.(inside tip: better yet with veggie/meat toppings)',
                            "labels": ['corn','flour','tortillas','tortilla','eggs','egg','hash browns','hash','jack','cheese','cheesy','green','green chili','chili','hollandaise','pico','pico de gallo','sausage','chicken','veggies','veggie','pork','pulled pork'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Snooze Breakfast Burrito":{
                            "item":"Snooze Breakfast Burrito",
                            "description": 'Burrito Filled with scrambled eggs, hash browns, house black beans, cheddar & jack cheese, topped with pico de gallo and choice of green chili or ranchero.  (psst, love your veggies & meats)',
                            "labels": ['burrito','breakfast burrito','eggs','egg','hash','hash browns','beans','black beans','cheddar','cheese','cheesy','jack','pico','pico de gallo','green','green chili','ranchero','sausage','chicken','veggies','veggie','pork','pulled pork'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Huevos Rancheros":{
                            "item":"Huevos Rancheros",
                            "description": 'Corn or flour tortillas layered with black beans, jack cheese, ranchero sauce, three eggs any style, and pico de gallo.(Imagine it topped with veggies and/or meats!)',
                            "labels": ['corn','flour','tortillas','tortilla','black beans','beans','jack','cheese','cheesy','ranchero','sauce','eggs','egg','pico','pico de gallo','sausage','chicken','veggies','veggie','pork','pulled pork',"huevos rancheros"],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Ham Benedict III":{
                            "item":"Ham Benedict III",
                            "description": 'The classic evolved with our signature English muffin topped with shaved hickory smoked ham, perfectly poached cage free eggs and smoked cheddar hollandaise.',
                            "labels": ['benedict','ham','ham benedict','english','muffin','english muffin','ham','smoked ham','poached','poached egg','poached eggs','egg','eggs','cheddar','cheese','cheesy','hollandaise'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Summer Harvest Benny":{
                            "item":"Summer Harvest Benny",
                            "description": 'Parmesan pesto quinoa cakes with fresh Caprese salad topped with two poached eggs, cream cheese hollandaise, balsamic reductions, and Parmesan crisps.',
                            "labels": ['benedict','parmesan','pesto','quinoa','cake','caprese','salad','eggs','egg','cream cheese','cheese','cheesy','hollandaise','balsamic','reductions','balsamic reductions'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Chilaquiles Benedict":{
                            "item":"Chilaquiles Benedict",
                            "description": 'Flavorful barbacoa beef over a stack of ranchero sauced tortillas and melted cheese, with poached cage free eggs, roasted poblano hollandaise, pico de gallo and cotija cheese.',
                            "labels": ['benedict','bar b que','barbacoa','beef','ranchero','sauce','tortilla','tortillas','cheese','cheesy','eggs','egg','poblano','peppers','pablano peppers','hollandaise','pico','pico de gallo','cotija','cotija cheese','chilaquiles'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Benny Goodman":{
                            "item":"Benny Goodman",
                            "description": 'Lox style salmon and cream cheese served over toasted rye and topped with poached cage free eggs, cream cheese hollandaise blended with sun dried tomato and caper relish.',
                            "labels": ['benedict','goodman','lox','salmon','cream cheese','cheese','rye','toasted rye','toasted','eggs','egg','cream cheese','cheese','cheesy','hollandaise','tomato','tomatoes','caper','relish','caper relish'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Bella! Bella! Benny":{
                            "item":"Bella! Bella! Benny",
                            "description": 'Thin slices of prosciutto, Taleggio cheese, and perfectly poached eggs on toasted ciabatta, topped with cream cheese hollandaise, balsamic glaze and arugula. Ciao Bella!',
                            "labels": ['benedict','bella','prosciutto','taleggio','cheese','eggs','egg','ciabatta','toasted','cheesy','creeam cheese','hollandaise','balsamic','arugula','balsamic glaze'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Chile Verde Benny":{
                            "item":"Chile Verde Benny",
                            "description": 'Slow cooked pulled pork over a stack of green chile sauced tortillas and melted cheese with poached cage free eggs and green chili hollandaise, pico de gallo and cotija cheese.',
                            "labels": ['benedict','chile','verde','chile verde benny','pork','pulled pork','green','green chili','green chile','sauce','tortillas','tortilla','cheese','cheesy','eggs','egg','hollandaise','pico','pico de gallo','cotija','cotija cheese'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Sandwich I Am":{
                            "item":"Sandwich I Am",
                            "description": 'A soft pretzel roll filled with scrambled eggs, cheddar cheese and a sausage patty, served with a side of smoked cheddar hollandaise & house hash browns … served with hash browns, black beans, dressed greens or fruit $2',
                            "labels": ['sandwich','pretzel','roll','eggs','egg','cheddar','cheese','cheddar cheese','sausage','smoked','hollandaise','hash browns','hash browns','black beans','beans','greens','green','fruit'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Havana Daydreaming":{
                            "item":"Havana Daydreaming",
                            "description": 'Free-range house pork, shaved ham, gruyere cheese, homemade pickles and a sunny side egg (or your call) with Dijon hollandaise, served up open-face on a hoagie roll … served with hash browns, black beans, dressed greens or fruit $2',
                            "labels": ['havana','daydreaming','havana daydreaming','pork','ham','cheese','gruyere','gruyere cheese','pickles','pickle','egg','eggs','dijon','hollandaise','hoagie','hoagie roll','roll','hash browns','black beans','beans','greens','green','fruit'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "The B.E.A.T Sandwich ":{
                            "item":"The B.E.A.T Sandwich ",
                            "description": 'Tender Belly Bacon, fried cage free egg(we recommend sunny-side up!) organic arugula and sliced tomato served with bacon-tomato aioli on a toasted ciabatta roll. Add Avocado! (1.75) … served with hash browns, black beans, dressed greens or fruit $2',
                            "labels": ['bacon','eggs','egg','arugula','tomato','tomatoes','aioli','ciabatta','roll','avocado','hash browns','black beans','beans','greens','green','fruit'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Peter Paul Rubens":{
                            "item":"Peter Paul Rubens",
                            "description": 'Mounds of locally made corned beef, sauerkraut, and Swiss cheese with house 1,000 isles dressing upon a plump pretzel roll. A work of art … served with hash browns, black beans, dressed greens or fruit $2',
                            "labels": ['ruben','rueben','corned beef','sauerkraut','swiss','cheese','swiss cheese','dressing','pretzel','hash browns','black beans','beans','greens','green','fruit'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Grilled Cheese and Tomato Soup":{
                            "item":"Grilled Cheese and Tomato Soup",
                            "description": '… served with hash browns, black beans, dressed greens or fruit $2',
                            "labels": ['grilled','cheese','grilled cheese','tomato','soup','tomato soup','hash','hash browns','black beans','beans','greens','fruit'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Egg White Frittata":{
                            "item":"Egg White Frittata",
                            "description": 'Cage free egg whites filled with wild mushrooms, carmelized onions, roasted garlic, asparagus and zucchini topped with melted Manchego, dressed arugula and cherry tomatoes.',
                            "labels": ['healthy','light','frittata','egg','eggs','egg white','mushrooms','mushroom','caramelized','caramel','onions','caramelized onions','garlic','roasted garlic','asparagus','zucchini','manchego','arugula','cherry tomatoes','tomatoes'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "The Lower East Sider":{
                            "item":"The Lower East Sider",
                            "description": 'Power up with lox style salmon and accouterments including herbed goat cheese spread, sun dried tomato and caper relish, hard-boiled egg, dressed greens and rustic bread.',
                            "labels": ['healthy','light','lox','salmon','goat cheese','cheese','spread','tomato','tomatoes','caper relish','relish','eggs','egg','greens','green','bread'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Snooze Continental":{
                            "item":"Snooze Continental",
                            "description": 'Our house made granola, Greek yogurt, and an agave nectar drizzle, alongside a grapefruit brulée and your choice of toast. So European…yet Coloradoan.',
                            "labels": ['continental','granola','greek','yogurt','agave','nectar','grapefruit','brulee','toast'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Quinoa Breakfast Bowl":{
                            "item":"Quinoa Breakfast Bowl",
                            "description": 'Quinoa sauteed with roasted cauliflower, green harissa, poblanos, and spinach topped with crisp cucumbers, feta cheese and a cage free egg cooked your style (we’d say sunny side up)!',
                            "labels": ['quinoa','breakfast bowl','bowl','cauliflower','green','harissa','poblanos','peppers','hot','spinach','cucumbers','feta','cheese','feta cheese','eggs','egg'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Mediterranean Summer Salad":{
                            "item":"Mediterranean Summer Salad",
                            "description": 'Smoked salmon, fresh mint, couscous, shaved radishes, cherry tomatoes, cucumbers and feta on a bed of crisp romaine hearts tossed in Green Harissa Vinegarette.',
                            "labels": ['salad','healthy','light','mediterranean','salmon','smoked salmon','mint','couscous','radishes','radish','cherry tomatoes','tomato','tomatoes','cucumbers','feta','romaine','lettuce','green','harissa','vinegarette'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Blueberry Danish Pancakes":{
                            "item":"Blueberry Danish Pancakes",
                            "description": 'Buttermilk pancakes topped with blueberry coulis, sweet cream and almond streusel surrounding a center of lemony cream cheese filling',
                            "labels":['pancake','pancakes','buttermilk','blueberry','sweet cream','almond','streusel','lemon','cream cheese','blueberry danish pancakes','blueberry pancakes'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Choice Mimosa":{
                            "item":"Choice Mimosa",
                            "description": 'Snooze Sparkling With Orange, Grapefruit, Apple, Lemonade, Cranberry Or Pineapple Juice.',
                            "labels": ['mimosa','orange','sparkling','grapefruit','apple','drink','alcohol','apple','lemonade','cranberry','pineapple','juice'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "White Peach Basil Bellini":{
                            "item":"White Peach Basil Bellini",
                            "description": 'Snooze Sparkling, White Peach & Basil Shrub.',
                            "labels": ['peach','drink','alcohol','sparkling','basil shrub','basil','bellini'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Mmm Mmm Mimosa":{
                            "item":"Mmm Mmm Mimosa",
                            "description": 'Snooze Sparkling, Orange Juice & Pama Pomegranate Liqueur.',
                            "labels": ['mimosa','drink','alcohol','orange','juice','pomegranate','liqueur','sparkling'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Palomimosa":{
                            "item":"Palomimosa",
                            "description": 'Snooze Sparkling, Espolón Blanco Tequila, St. Germain Liqueur & Grapefruit Juice.',
                            "labels": ['mimosa','sparkling','espolon','drink','alcohol','grapefruit','juice','tequila'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Straight Up Or Spicy":{
                            "item":"Straight Up Or Spicy",
                            "description": 'Snooze House Bloody Mix & MEll Vodka Or Habanero & Jalapeño Infused Vodka.',
                            "labels": ['spicy','bloody','bloody mary','vodka','drink','alcohol'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Green Tom Bloody":{
                            "item":"Green Tom Bloody",
                            "description": 'Snooze Bloody Mix, crushed Green Tomatoes, Cucumber, Jalapeño, Rosemary & MEll Vodka.',
                            "labels": ['bloody','bloody mary','drink','alcohol','green tomatoes','spicy','rosemary','vodka'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Boss Hog":{
                            "item":"Boss Hog",
                            "description": 'Bacon Infused Breckenridge Bourbon & House Bloody Mix.',
                            "labels": ['bloody','bloody mary','bourbon','bacon','drink','alcohol'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Bangkok":{
                            "item":"Bangkok",
                            "description": 'MEll Vodka, Sriracha, Lime, Cilantro, Basil, Fish Sauce & House Bloody Mix.',
                            "labels": ['spicy','drink','alcohol','bloody','bloody mary','basil','fish sauce','cilantro','lime','sriracha','vodka'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Bacon and Eggs":{
                            "item":"Bacon and Eggs",
                            "description": 'Bacon Infused Breckenridge Bourbon, House Sour, Frothed Egg White, Bitters & Bacon.',
                            "labels": ['bacon','eggs','egg','drink','alcohol'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Mountain Mule":{
                            "item":"Mountain Mule",
                            "description": 'CapRock Organic Gin, Fever Tree Ginger Beer, Grapefruit juice, Fresh Lime & Agave Nectar.',
                            "labels": ['mule','gin','drink','alcohol','ginger beer','grapefruit','juice','lime','agave','moscow mule'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Morning Marg":{
                            "item":"Morning Marg",
                            "description": 'Espolón Blanco Tequila (or make it spicy with Ancho Reyes), Orange Liqueur, house Sour & Lime Squeeze.',
                            "labels": ['marg','margaritas','tequila','spicy','orange','drink','alcohol'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Strawberry Mint Marg":{
                            "item":"Strawberry Mint Marg",
                            "description": 'Espolon Tequila, House Sour & Strawberry Mint Agua Fresca.',
                            "labels": ['marg','margarita','drink','alcohol','tequila','sstrawberry','mint'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Orange Snoozius":{
                            "item":"Orange Snoozius",
                            "description": 'MEll Vodka, Orange Liqueur, Fresh Oj & Whipped Cream.',
                            "labels": ['orange','vodka','alcohol','drink'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Brewmosa":{
                            "item":"Brewmosa",
                            "description": 'Craft Belgian Style Wheat Beer & Fresh Oj.',
                            "labels": ['mimosa','beer','orange','juice','drink','alcohol'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Michelada":{
                            "item":"Michelada",
                            "description": 'Local Brew, House Bloody Mix, Hot Sauce & Fresh Lime.',
                            "labels": ['beer','bloody','bloody mary','drink','alcohol','lime'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Ancho Shandy":{
                            "item":"Ancho Shandy",
                            "description": 'Belgian Style Wheat Beer, Ancho Reyes, & Lemonade.',
                            "labels": ['shandy','beer','drink','alcohol','lemonade'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Am Manhattan":{
                            "item":"Am Manhattan",
                            "description": 'Breckenridge Bourbon, Espresso, Carolan’s Irish Cream, Steamed Milk & Cherry.',
                            "labels": ['manhattan','drink','alcohol','espresso','bourbon','cherry'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Dirty Drunken Chai":{
                            "item":"Dirty Drunken Chai",
                            "description": 'Bhakti Chai, Espresso, Steamed Milk, Coffee Liqueur & Montanya Platino Rum.',
                            "labels": ['chai','drink','alcohol','espresso','coffee','rum'],
                            "price": 'n/a'
                        },
                      },
                      {
                        "Kentucky Coffee":{
                            "item":"Kentucky Coffee",
                            "description": 'Iced Espresso, Bourbon, Simple Syrup, & Fresh Mint.',
                            "labels": ['coffee','drink','alcohol','bourbon','espresso'],
                            "price": 'n/a'
                        },
                      }
                    ]
                }
            }
          },
          {
            "restaurant": {
                "name": "Syrup",
                "location": {
                  "address": "999 18th Street, Suite 105, Denver 80202",
                  "locality": "Central Business District",
                  "city": "Denver",
                  "city_id": 305,
                  "latitude": "39.7488653000",
                  "longitude": "-104.9915620000",
                  "zipcode": "80202",
                  "country_id": 216,
                  "locality_verbose": "Central Business District, Denver",
                  "logo":"../pictures/New-syrup-logo-main.png",
                  "menu_Url":'http://www.syruprestaurant.com/menu/breakfast-and-brunch/'
                },
                "menu":{
                    "items":[
                      {
                        "Beignets":{
                            "item":"Beignets",
                            "description": 'lightly fried dough rolled in cinnamon sugar glaze and topped with powdered sugar',
                            "labels": ['beignet','beignets','fried','cinnamon','sugar'],
                            "price": '6.00'
                        },
                        "Pancake or Waffle Flight":{
                            "item":"Pancake or Waffle Flight",
                            "description": 'choose either 4 sand dollar pancakes OR 3 waffle wedges',
                            "labels": ['pancake','pancakes','buttermilk','waffle'],
                            "price": '6.00'
                        },
                        "3 Little Pigs in a Blanket":{
                            "item":"3 Little Pigs in a Blanket",
                            "description": '3 sand dollar pancakes stuffed with sweet maple sausage patties',
                            "labels": ['pigs in a blanket','pancake','pancakes','sausage','maple'],
                            "price": '6.00'
                        },
                        "Cracked Bacon":{
                            "item":"Cracked Bacon",
                            "description": '5 pieces of our house crack bacon made with brown sugar and black pepper',
                            "labels":['bacon','brown sugar','pepper'],
                            "price": '6.00'
                        },
                        "Waffle Sliders":{
                            "item":"Waffle Sliders",
                            "description": '2 waffle sliders with either scrambled egg, ham, and cheese OR fried chicken with sweet n’ spicy Thai chili sauce on the side',
                            "labels":['syrup','waffle','waffles','sliders','slider','egg','eggs','ham','cheese','chicken','fried chicken','fried','sauce','sweet','spicy','sweet and spicy','thai','chili'],
                            "price": '9.00'
                        },
                        "D’ Lish":{
                            "item":"D’ Lish",
                            "description": '2 large crostinis with smoked salmon, cream cheese, red onion, capers, and arugula',
                            "labels":['syrup','crostinis','salmon','smoked salmon','cream cheese','cream','cheese','red onion','onion','capers','arugula'],
                            "price": '7.00'
                        },
                        "Nutella Stuffed French Toast":{
                            "item":"Nutella Stuffed French Toast",
                            "description": 'thick slices of french toast sandwiched together and stuffed with Nutella and banana topped with fresh strawberries',
                            "labels":['syrup','french toast','toast','nutella','banana','strawberry','strawberries','stuffed','nutella stuffed french toast'],
                            "price": '11.00'
                        },
                        "Crunchy French Toast":{
                            "item":"Crunchy French Toast",
                            "description": 'thick slices of texas toast coated with crunchy granola and lightly frieds',
                            "labels":['syrup','french toast','toast','granola','fried'],
                            "price": '11.00'
                        },
                        "Up & At ‘Em":{
                            "item":"Up & At ‘Em",
                            "description": '3 buckwheat pancakes with granola and blueberries inside',
                            "labels":['pancake','syrup','pancakes','granola','blueberry','blueberries','buckwheat','wheat'],
                            "price": '11.00'
                        },
                        "Sweet & Savory":{
                            "item":"Sweet & Savory",
                            "description": '3 buttermilk pancakes with pieces of maple peppered bacon, sausage, and walnuts cooked inside. Pecan butter',
                            "labels":['syrup','buttermilk pancakes','pancake','pancakes','maple','bacon','sausage','walnuts','pecan','butter','pecan butter','peppered bacon'],
                            "price": '12.00'
                        },
                        "Elvis French Toast":{
                            "item":"Elvis French Toast",
                            "description": 'french toast sandwich stuffed with peanut butter, chopped bacon, and banana',
                            "labels":['syrup','french toast','toast','sandwich','sandwiches','peanut butter','butter','bacon','banana','peanut butter pancakes','peanut butter pancake'],
                            "price": '12.00'
                        },
                        "Coconut Coated French Toast":{
                            "item":"Coconut Coated French Toast",
                            "description": '3 pieces of french toast coated with delicious coconut flakes, and served with a coconut syrup',
                            "labels":['french toast','syrup','toast','coconut','flakes'],
                            "price": '12.00'
                        },
                        "Baked Apple Pie Pancake ":{
                            "item":"Baked Apple Pie Pancake ",
                            "description": '1 large baked pancake with cooked apples, cinnamon sugar and spices, topped with whipped cream and caramel sauce (please allow extra time for baking)',
                            "labels":['baked','syrup','apple','apple pie','pancakes','pancake','cinnamon','sugar','spice','whipped cream','cream','caramel'],
                            "price": '11.00'
                        },
                        "Traditional":{
                            "item":"Traditional",
                            "description": 'old school - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','traditional','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free'],
                            "price": '9.00'
                        },
                        "Blueberry":{
                            "item":"Blueberry",
                            "description": 'fresh blueberries sautéed in blackberry syrup - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','blueberry','blueberries','blackberry','blackberries','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free','blueberry pancake','blueberry pancakes'],
                            "price": '11.00'
                        },
                        "The Foster":{
                            "item":"The Foster",
                            "description": 'banana slices sautéed in maple vanilla syrup - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free','banana','vanilla','maple'],
                            "price": '10.00'
                        },
                        "Strawberry Fields":{
                            "item":"Strawberry Fields",
                            "description": 'fresh strawberries sautéed in strawberry syrup - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free','strawberry','strawberries','strawberry pancake','strawberry pancakes'],
                            "price": '11.00'
                        },
                        "Double Berry Bliss":{
                            "item":"Double Berry Bliss",
                            "description": 'fresh blueberries and strawberries topped with whipped cream  - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free','blueberry','blueberries','strawberry','strawberries','whipped cream','cream','strawberry pancake','strawberry pancakes','blueberry pancake','blueberry pancakes'],
                            "price": '11.00'
                        },
                        "S’mores":{
                            "item":"S’mores",
                            "description": 'graham cracker crumbles, marshmallow, and chocolate sauce - Choose: stack of buttermilk pancakes, buckwheat pancakes, french toast, or a buttermilk waffle. Gluten free cakes or waffle available – add 2',
                            "labels":['syrup','pancake','pancakes','buttermilk','buckwheat','wheat','french toast','toast','waffle','waffles','gluten free','s\'mores','smores','graham cracker','marshmallow','chocolate','sauce','chocolate sauce'],
                            "price": '10.00'
                        },
                        "The Wisconsin":{
                            "item":"The Wisconsin",
                            "description": 'all natural ham steak and cheddar cheese topped with 2 poached eggs and hollandaise sauce - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','ham','steak','cheddar','cheese',''],
                            "price": '11.00'
                        },
                        "The California":{
                            "item":"The California",
                            "description": 'avocado and grilled tomato slices, topped with 2 poached eggs and hollandaise sauce - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','avocado','tomato','grilled','hollandaise','sauce'],
                            "price": '11.00'
                        },
                        "The Cherry Creeker":{
                            "item":"The Cherry Creeker",
                            "description": 'our slow cooked award-winning corned beef hash topped with 2 poached eggs and hollandaise sauce (this dish made Syrup famous) - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','corned beef','beef','hash','hollandaise','sauce'],
                            "price": '13.00'
                        },
                        "The Carolina":{
                            "item":"The Carolina",
                            "description": 'slow cooked pulled pork topped with 2 poached eggs, hollandaise sauce, and BBQ sauce - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','pulled pork','pork','hollandaise','sauce','bbq','BBQ'],
                            "price": '13.00'
                        },
                        "The Maryland":{
                            "item":"The Maryland",
                            "description": 'Maryland style crab cakes served over a bed of smashed tater tots, topped with 2 poached eggs and hollandaise sauce.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','crab cakes','crab cake','crab','hollandaise','sauce'],
                            "price": '14.00'
                        },
                        "The New Yorker":{
                            "item":"The New Yorker",
                            "description": 'smoked salmon, grilled tomato slices, and spinach, topped with 2 poached eggs and hollandaise sauce - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','smoke salmon','salmon','tomato','spinach','hollandaise','sauce'],
                            "price": '13.00'
                        },
                        "El Ranchero":{
                            "item":"El Ranchero",
                            "description": 'fried corn tortillas, chorizo, and jack cheese, topped with 2 poached eggs and smothered in our pork green chili - Served with our smashed tater tots.',
                            "labels":['syrup','english muffin','gluten free','croissant','toast','bagel','tater tots','tots','fruit','eggs','egg','benedict','benedicts','egg benedict','corn tortillas','corn tortilla','tortillas','tortilla','chorizo','cheese','jack','smothered','pork','green chili'],
                            "price": '12.00'
                        },
                        "The Jan Omelet":{
                            "item":"The Jan Omelet",
                            "description": 'ham, cheddar, green onion, and white onion - Served with our smashed tater tots',
                            "labels":['syrup','omelet','omelets','tater tots','tater tot','tot','tots','ham','cheddar','green onion','onion','white onion'],
                            "price": '10.00'
                        },
                        "The Aztec":{
                            "item":"The Aztec",
                            "description": 'local chorizo, cheddar, and green onion smothered in our pork green chili - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','chorizo','cheddar','green onion','onion','pork','green chili'],
                            "price": '11.00'
                        },
                        "The Brooklyn":{
                            "item":"The Brooklyn",
                            "description": 'our award-winning corned beef hash, swiss cheese, and green onion - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','corned beef hash','corned beef','beef','cheese','green onion'],
                            "price": '13.00'
                        },
                        "The Trail Runner":{
                            "item":"The Trail Runner",
                            "description": 'spinach, mushroom, and swiss cheese - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','spinach','mushroom','cheese'],
                            "price": '13.00'
                        },
                        "Build Your Own":{
                            "item":"Build Your Own",
                            "description": 'any veggie or cheese (add 1), meat or avocado (add 2) - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','veggies','veggie','cheese','meat','avocado'],
                            "price": '6.00'
                        },
                        "The Lenny":{
                            "item":"The Lenny",
                            "description": 'smoked salmon, cream cheese, capers, onion, and tomato - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','smoked salmon','salmon','cream cheese','cheese','capers','onion','tomato'],
                            "price": '13.00'
                        },
                        "The Veg":{
                            "item":"The Veg",
                            "description": 'spinach, mushroom, roasted red pepper, tomato, and onion - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','spinach','mushroom','red pepper','tomato','onion'],
                            "price": '11.00'
                        },
                        "The Jalapeño Popper":{
                            "item":"The Jalapeño Popper",
                            "description": 'fresh jalapeño, chopped bacon, jalapeño cream cheese, cheddar cheese, and crispy fried onions - Served with our smashed tater tots',
                            "labels":['omelet','omelets','tater tots','tater tot','tot','tots','syrup','jalapeno','bacon','cream cheese','cheese','onion','fried','crispy'],
                            "price": '10.00'
                        },
                        "Eggs Your Way":{
                            "item":"Eggs Your Way",
                            "description": '2 eggs any style and a side of smashed tater tots with your choice of fixings: meat – bacon, sausage links, sausage patties or ham bread – toast, english muffin, croissant, or bagel, a gluten free english muffin, 1 pancake or piece of french toast may be substituted – add 2',
                            "labels":['syrup','eggs','egg','tater tots','tots','tater tot','tot','meat','bacon','sausage','ham','bread','toast','english muffin','croissant','bagel','gluten free','pancake','pancakes','french toast'],
                            "price": '9.00'
                        },
                        "Breakfast Sandwich":{
                            "item":"Breakfast Sandwich",
                            "description": 'any style egg with your choice of cheese and bread served with smashed tater tots. cheese – cheddar, swiss, monterey jack, pepper jack, mozzarella, american, gorgonzola, or cream cheese - bread – toast, english muffin, croissant, or bagel a gluten free english muffin may be substituted – add 2 - meat or avocado – add 2 (bacon, sausage links, sausage patties or ham)',
                            "labels":['syrup','eggs','egg','tater tots','tots','tater tot','tot','meat','bacon','sausage','ham','bread','toast','english muffin','croissant','bagel','gluten free','pancake','pancakes','french toast','avocado'],
                            "price": '8.00'
                        },
                        "Breakfast Burrito":{
                            "item":"Breakfast Burrito",
                            "description": 'scrambled egg, chorizo, cheddar, and green onion wrapped in a flour tortilla and smothered in pork green chili. Served with homemade tomatillo salsa and sour cream - make it a monster with smashed tater tots and avocado inside – add 3',
                            "labels":['syrup','breakfast burrito','burrito','egg','eggs','chorizo','cheddar','cheese','green onion','tortilla','pork','green chili','tomatillo','sauce','sour cream','avocado','tater tots','tater tot','tots','tot'],
                            "price": '11.00'
                        },
                        "Boulder & Yogurt Parfait":{
                            "item":"Boulder & Yogurt Parfait",
                            "description": 'vanilla yogurt, fresh berries, and Nature Valley granola',
                            "labels":['syrup','parfait','yogurt','vanilla','berries','strawberries','strawberry','blueberry','blueberries','granola'],
                            "price": '6.00'
                        },
                        "Steak ‘n Eggs":{
                            "item":"Steak ‘n Eggs",
                            "description": '6 oz. sirloin steak served with 2 eggs any style and smashed tater tots',
                            "labels":['syrup','steak','eggs','egg','tater tots','tater tot','tots','tot'],
                            "price": '14.00'
                        },
                        "The Remedy":{
                            "item":"The Remedy",
                            "description": 'cottage fries topped with chorizo, cheddar, onion, roasted red pepper, and 2 eggs any style, smothered with our pork green chili',
                            "labels":['cottage fries','syrup','chorizo','cheddar','onion','red pepper','eggs','egg','pork','green chili','fries'],
                            "price": '12.00'
                        },
                        "The Kitchen Sink":{
                            "item":"The Kitchen Sink",
                            "description": 'a bed of smashed tater tots, open-faced biscuit, maple peppered bacon, and 2 eggs any style, smothered in our white country sausage gravy',
                            "labels":['syrup','tater tots','tater tot','tots','tot','biscuits','biscuit','maple','bacon','peppered','eggs','egg','gravy','sausage','biscuits and gravy'],
                            "price": '11.00'
                        },
                        "The Mile High Tower":{
                            "item":"The Mile High Tower",
                            "description": 'a mixture of scrambled egg, smashed tater tots, chicken, mushroom, onion, and cream cheese stacked high and topped with hollandaise sauce',
                            "labels":['syrup','eggs','egg','tater tots','tater tot','tots','tot','chicken','mushroom','onion','cream cheese','hollandaise','sauce'],
                            "price": '11.00'
                        },
                        "Breakfast Pizza":{
                            "item":"Breakfast Pizza",
                            "description": 'personal sized Naan bread with pesto sauce, chorizo, roasted red pepper, onion, cheese, and topped with an over easy egg, served with arugula salad onsidey',
                            "labels":['syrup','breakfast pizza','pizza','naan','pesto','chorizo','red pepper','onion','cheese','egg','eggs','arugula'],
                            "price": '10.00'
                        },
                        "Old Fashioned Oatmeal":{
                            "item":"Old Fashioned Oatmeal",
                            "description": 'our oatmeal is finished creme brûlée style - cup of berries – add 5 - cup of mixed fruit – add 3',
                            "labels":['oatmeal','syrup','creme brulee','berries','strawberry','strawberries','blueberry','blueberries','fruit'],
                            "price": '6.00'
                        },
                      }
                    ]
                }
              }

          },
          {
            "restaurant": {
              "name": "Bistro Vendome",
              "location": {
                  "address": "1420 Larimer Street, Denver 80202",
                  "locality": "Larimer Square, LoDo",
                  "city": "Denver",
                  "city_id": 305,
                  "latitude": "39.7474972222",
                  "longitude": "-104.9989916667",
                  "zipcode": "80202",
                  "country_id": 216,
                  "locality_verbose": "Larimer Square, LoDo, Denver",
                  "logo":"../pictures/BVStoreLogo.png",
                  "menu_Url":"http://www.bistrovendome.com/#menus"
                },
                "menu":{
                    "items":[
                      {
                        "Soupe à l’Oignon":{
                            "item":"Soupe à l’Oignon",
                            "description": 'n/a',
                            "labels": ['soupe','bistro','bistro vendome'],
                            "price": '8.00'
                        },
                        "Charcuterie":{
                            "item":"Charcuterie",
                            "description": 'a daily assortment of cured meats, terrines, rillettes and accompaniments',
                            "labels":['bistro','bistro vendome','meat','meats','terrines','rillettes','cheese','charcuterie'],
                            "price": '15.50'
                        },
                        "Croissants, Jams":{
                            "item":"Croissants, Jams",
                            "description": 'Croissants and Jams',
                            "labels":['bistro','bistro vendome','croissant','jam','jams','jelly'],
                            "price": '11.00'
                        },
                        "Moules":{
                            "item":"Moules",
                            "description": 'mussels, garlic, herbs and white wine',
                            "labels":['bistro','bistro vendome','mussels','garlic','wine'],
                            "price": '12.00'
                        },
                        "Crème Frâiche Yaourt":{
                            "item":"Crème Frâiche Yaourt",
                            "description": 'vanilla yogurt, granola, berries',
                            "labels":['bistro','bistro vendome','vanilla','yogurt','granola','berry','berries'],
                            "price": '7.00'
                        },
                        "Sélection de Pâtisseries Maison":{
                            "item":"Sélection de Pâtisseries Maison",
                            "description": 'fresh-baked mini French pastries',
                            "labels": ['bistro','bistro vendome','baked','french','pastry','pastries'],
                            "price": '10.00'
                        },
                        "Beignets de Brioche":{
                            "item":"Beignets de Brioche",
                            "description": 'brioche doughnuts, caramel',
                            "labels":['bistro','bistro vendome','brioche','doughnuts','donunt','doughnut','donut','caramel'],
                            "price": '5.00'
                        },
                        "Steak Tartare":{
                            "item":"Steak Tartare",
                            "description": ' beef tenderloin, aioli,  Dijon mustard, capers, shallots, quail egg, grilled baguette',
                            "labels":['bistro','bistro vendome','beef','tenderloin','aioli','dijon mustard','capers','shallots','quail egg','egg','eggs','baguette'],
                            "price": '12.50'
                        },
                        "Croque Monsieur":{
                            "item":"Croque Monsieur",
                            "description": 'Parisian ham, Gruyére, béchamel, sourdough, mixed greens, fines herbes vinaigrette add a fried egg - add 1',
                            "labels":['bistro','bistro vendome','ham','gruyere','sourdough','mixed greens','herbs','egg','eggs'],
                            "price": '11.00'
                        },
                        "Cheese Burger":{
                            "item":"Cheese Burger",
                            "description": 'griddled patty*, sherried onions, brie, bibb lettuce, tomato, aioli, brioche bun, pommes frites',
                            "labels":['beef','bistro','bistro vendome','onions','onion','brie','lettuce','tomato','aioli','brioche','frites','pommes','burger','cheese burger','hamburger'],
                            "price": '15.00'
                        },
                        "Quiche du Jour":{
                            "item":"Quiche du Jour",
                            "description": 'seasonal quiche, mixed greens, fines herbes vinaigrette',
                            "labels":['quiche','bistro','bistro vendome','mixed greens','herbs','soup'],
                            "price": '12.00'
                        },
                        "Pain Perdu":{
                            "item":"Pain Perdu",
                            "description": 'griddled brioche, blueberry-lavender compote, brûléed banana, honey Boursin cheese, granola, maple gastrique',
                            "labels":['bistro','bistro vendome','brioche','brulee','banana','honey','cheese','granola','maple','gastrique','blueberry','blueberries'],
                            "price": '12.00'
                        },
                        "Oeufs Bénédicte":{
                            "item":"Oeufs Bénédicte",
                            "description": 'poached eggs•, duck confit, English muffin, sauce maltaise, roasted carrots, Lyonnaise potatoes, dill crème fraîche',
                            "labels":['bistro','bistro vendome','benedict','egg benedicts','egg benedict','egg','eggs','benedicts','duck','duck confit','muffin','english muffin','sauce','carrots','potatoes','potato','dill'],
                            "price": '14.00'
                        },
                        "Saucisse de Boeuf":{
                            "item":"Saucisse de Boeuf",
                            "description": 'smoked beef sausage, soft scrambled eggs*, mixed greens, brown butter vinaigrette, brûléed grapefruit, grilled sourdough',
                            "labels":['bistro','bistro vendome','beef','sausage','smoked','eggs','egg','mixed greens','greens','butter','brulee','grapefruit','sourdough','grilled'],
                            "price": '12.00'
                        },
                        "Omelette du Fromage":{
                            "item":"Omelette du Fromage",
                            "description": 'trifold omelette, Boursin cheese, fines herbes, watercress',
                            "labels":['bistro','bistro vendome','omelet','omelets','cheese','herb','herbs','watercress'],
                            "price": '10.00'
                        },
                        "Salade Niçoise":{
                            "item":"Salade Niçoise",
                            "description": 'seared albacore tuna, mixed greens, fingerling potatoes, haricot verts, tomatoes, boiled egg, olives, radish, torn herbs, yogurt vinaigrette',
                            "labels":['bistro','bistro vendome','salad','albacore','tuna','mixed greens','potatoes','potato','haricot verts','tomato','tomatoes','egg','eggs','olive','olives','radish','yogurt'],
                            "price": '15.00'
                        },
                        "Frisée aux Lardons":{
                            "item":"Frisée aux Lardons",
                            "description": 'frisée, endive, poached egg*, bacon lardon, torn herbs, mustard vinaigrette, grilled sourdough',
                            "labels":['frisee','bistro','bistro vendome','endive','eggs','egg','bacon','herbs','herb','sourdough','grilled','salad'],
                            "price": '13.00'
                        },
                        "Salade du Verte":{
                            "item":"Salade du Verte",
                            "description": 'butter lettuce, pickled shallots, breakfast radish, pickled herbs, sourdough croutons, Champagne vinaigrette',
                            "labels":['salad','bistro','bistro vendome','lettuce','butter','shallots','radish','herbs','herb','sourdough','champagne'],
                            "price": '8.00'
                        },

                      }
                    ]
                }
            }
          },
          {
            "restaurant": {
                "name": "Beast + Bottle",
                "location": {
                    "address": "719 East 17th Avenue 80203",
                    "locality": "North Capitol Hill",
                    "city": "Denver",
                    "city_id": 305,
                    "latitude": "39.7434607000",
                    "longitude": "-104.9781214000",
                    "zipcode": "80203",
                    "country_id": 216,
                    "locality_verbose": "North Capitol Hill, Denver",
                    "logo":"../pictures/beast_weblogo.png",
                    "menu_Url":"http://beastandbottle.com/wp-content/uploads/2017/09/Brunch_9.7.17.pdf"
                },
                "menu":{
                    "items":[
                      {
                        "fallen pancake soufflé":{
                            "item":"fallen pancake soufflé",
                            "description": 'whipped pork + maple butter, pears, muesli',
                            "labels": ['beast + bottle','pancakes','pancake','souffle','pork','maple','butter','pear','pears','muesli'],
                            "price": '12.00'
                        },
                        "ratatouille":{
                            "item":"ratatouille",
                            "description": 'poached egg, vegetable biyaldi, four herb salad',
                            "labels":['beast + bottle','ratatouille','egg','eggs','vegetable','veggies','salad'],
                            "price": '13.00'
                        },
                        "arctic char eggs benedict":{
                            "item":"arctic char eggs benedict",
                            "description": 'gravlax, béarnaise, capers',
                            "labels":['beast + bottle','eggs','egg','eggs benedicts','eggs benedict','bearnaise','capers','gravlax'],
                            "price": '16.00'
                        },
                        "square meal":{
                            "item":"square meal",
                            "description": 'eggs, bacon, toast + jam',
                            "labels":['beast + bottle','eggs','egg','bacon','toast','jam'],
                            "price": '12.00'
                        },
                        "chicken-basil sausage":{
                            "item":"chicken-basil sausage",
                            "description": 'crostini, tomato hollandaise, eggs',
                            "labels":['chicken','beast + bottle','sausage','eggs','egg','hollandaise','tomato','chicken-basil'],
                            "price": '14.00'
                        },
                        "french omelette":{
                            "item":"french omelette",
                            "description": 'summer vegetables, gruyere, toast',
                            "labels":['beast + bottle','omelet','french','vegetables','veggies','gruyere','toast'],
                            "price": '13.00'
                        },
                        "pork shoulder tostada":{
                            "item":"pork shoulder tostada",
                            "description": 'charred tomatillos, queso panela, sunny eggs',
                            "labels":['beast + bottle','tostada','pork','tomato','queso','eggs','egg'],
                            "price": '14.00'
                        },
                        "denver omelette":{
                            "item":"denver omelette",
                            "description": 'smoked ham, peppers, onions, raclette',
                            "labels":['beast + bottle','denver','omelet','ham','smoked','peppers','onion','raclette'],
                            "price": '14.00'
                        },
                        "beef pastrami hash":{
                            "item":"beef pastrami hash",
                            "description": 'haricot vert, thyme crème fraiche, corn, sunny egg',
                            "labels":['beast + bottle','beef','hash','haricot vert','thyme','fraiche','corn','eggs','egg'],
                            "price": '15.00'
                        },
                        "black pepper-bourbon sausage":{
                            "item":"black pepper-bourbon sausage",
                            "description": 'brown butter pears, johnny cakes, sunny egg',
                            "labels":['beast + bottle','sausage','pepper','butter','cakes','eggs','egg'],
                            "price": '14.00'
                        },
                        "fried green tomato sandwich":{
                            "item":"fried green tomato sandwich",
                            "description": 'yellow squash relish, summer herb aioli, brioche bun',
                            "labels":['beast + bottle','sandwich','fried green tomatoes','fried green tomato','fried','tomato','tomatoes','squash','veggies','vegetables','relish','aioli','brioche'],
                            "price": '15.00'
                        },
                        "the fig + pig flatbread":{
                            "item":"the fig + pig flatbread",
                            "description": 'guanciale, gorgonzola, arugula',
                            "labels":['beast + bottle','flatbread','sandwich','pork','cheese','arugula','guanciale'],
                            "price": '15.00'
                        },
                        "b + b meat board":{
                            "item":"b + b meat board",
                            "description": 'terrines and cured meats, table cheese, pickles',
                            "labels":['beast + bottle','meats','meat','charcuterie','terrines','cheese','pickles','pickle'],
                            "price": '21.00'
                        },
                        "chicken + bacon club sandwich":{
                            "item":"chicken + bacon club sandwich",
                            "description": 'tomato, salanova lettuce, charred lemon aioli ',
                            "labels":['beast + bottle','chicken','bacon','club','sandwich','tomato','lettuce','lemon','aioli'],
                            "price": '17.00'
                        },
                        "house made pastry basket":{
                            "item":"house made pastry basket",
                            "description": 'n/a',
                            "labels":['beast + bottle','pastries','pastry'],
                            "price": '9.00'
                        },
                        "toast + jam ":{
                            "item":"toast + jam ",
                            "description": 'n/a',
                            "labels":['beast + bottle','toast','jam'],
                            "price": '4.00'
                        },
                      }
                    ]
                }
            }
          },
          {
            "restaurant": {
                "name": "The Hornet",
                "location": {
                    "address": "76 Broadway, Denver 80203",
                    "locality": "Speer",
                    "city": "Denver",
                    "city_id": 305,
                    "latitude": "39.7183111111",
                    "longitude": "-104.9873416667",
                    "zipcode": "80203",
                    "country_id": 216,
                    "locality_verbose": "Speer, Denver",
                    "logo":"../pictures/Hornet_logowebsite.jpg",
                    "menu_Url":"http://hornetrestaurant.com/list-menu/brunch/"
                },
                "menu":{
                    "items":[
                      {
                        "BROADWAY BREAKFAST":{
                            "item":"BROADWAY BREAKFAST",
                            "description": 'cage free eggs • pecanwood smoked bacon • sausage • potatoes',
                            "labels":['the hornet','hornet','eggs','egg','bacon','sausage','potato','potatoes','light','gluten free'],
                            "price": '11.00'
                        },
                        "BREAKFAST TACOS":{
                            "item":"BREAKFAST TACOS",
                            "description": 'cage free eggs • pulled pork • black beans • cheese • pico de gallo • guacamole • cilantro • potatoes',
                            "labels":['the hornet','hornet','eggs','egg','pork','beans','black beans','cheese','pico','pico de gallo','guacamole','cilantro','potato','potatoes','light'],
                            "price": '11.00'
                        },
                        "DIXIE CHICKEN":{
                            "item":"DIXIE CHICKEN",
                            "description": 'buttermilk-battered fried chicken breast • sausage gravy • cage free eggs • potatoes',
                            "labels":['the hornet','hornet','chicken','buttermilk','fried','gravy','sausage','eggs','egg','potato','potatoes'],
                            "price": '12.00'
                        },
                        "DÜSSELDORFER":{
                            "item":"DÜSSELDORFER",
                            "description": 'bratwurst burger • fried farm fresh egg • bacon • american cheese • sausage gravy • pretzel roll • potatoes',
                            "labels":['the hornet','hornet','bratwurst','burger','fried','egg','eggs','bacon','cheese','sausage','gravy','pretzel','potatoes','potato'],
                            "price": '12.00'
                        },
                        "FRENCH KISSED TOAST":{
                            "item":"FRENCH KISSED TOAST",
                            "description": 'pecanwood smoked bacon • potatoes • bourbon-banana syrup',
                            "labels":['the hornet','hornet','french toast','smoked','bacon','potatoes','potato','banana','light'],
                            "price": '11.00'
                        },
                        "GIGUNDA BREAKFAST BURRITO":{
                            "item":"GIGUNDA BREAKFAST BURRITO",
                            "description": 'cage free eggs • pecanwood smoked bacon • potatoes • pork green chili • melted cheese • lettuce • tomatoes • guacamole',
                            "labels":['the hornet','hornet','breakfast burrito','burrito','eggs','egg','bacon','potatoes','potato','pork','green chili','cheese','lettuce','tomato','tomatoes','guacamole','gluten free','light'],
                            "price": '12.00'
                        },
                        "HORNET OMELETTE":{
                            "item":"HORNET OMELETTE",
                            "description": 'cage free eggs • spinach • tomato • mushroom • sausage • feta • potatoes',
                            "labels":['the hornet','hornet','eggs','egg','omelet','spinach','tomato','mushroom','sausage','feta','potato','potatoes','gluten free','light'],
                            "price": '11.00'
                        },
                        "PRIME RIB HASH":{
                            "item":"PRIME RIB HASH",
                            "description": 'shaved prime rib • cage free eggs • onions • peppers • potatoes',
                            "labels":['the hornet','hornet','hash','prime rib','eggs','egg','onions','onion','peppers','potatoes','potato','gluten free'],
                            "price": '13.00'
                        },
                        "PUPUSAS RANCHEROS":{
                            "item":"PUPUSAS RANCHEROS",
                            "description": 'two pupusas • cage free eggs • pork green chili • black beans • cheese • lettuce • tomatoes',
                            "labels":['the hornet','hornet','pupusas','eggs','egg','pork','green chili','black beans','cheese','lettuce','tomatoes','light','gluten free'],
                            "price": '12.00'
                        },
                        "SEA SALT CARAMEL BREAD PUDDING":{
                            "item":"SEA SALT CARAMEL BREAD PUDDING",
                            "description": 'walnuts • candied bacon',
                            "labels":['the hornet','hornet','sea salt','caramel','bread pudding','walnuts','bacon','candied bacon','light'],
                            "price": '7.00'
                        },
                        "GREEK GOD OF PARFAIT":{
                            "item":"GREEK GOD OF PARFAIT",
                            "description": 'greek yogurt • artisan natural granola • seasonal fruit • orange blossom honey • candied hazelnuts • blueberry muffin',
                            "labels":['the hornet','hornet','parfait','greek yogurt','yogurt','granola','fruit','orange','honey','hazelnuts','blueberry','blueberries','blueberry muffin','light','gluten free'],
                            "price": ''
                        },
                        "POP TART":{
                            "item":"POP TART",
                            "description": 'homemade blueberry filled pastry • icing made by our sweet-toothed neighbor\'s — Sugar Bake Shop',
                            "labels":['the hornet', 'hornet','blueberry','blueberries','pastries','pastry','light'],
                            "price": '3.00'
                        },
                        "BLUEBERRY MUFFIN ":{
                            "item":"BLUEBERRY MUFFIN ",
                            "description": 'deliciousness',
                            "labels":['the hornet','hornet','blueberry','blueberries','blueberry muffin','light','gluten free'],
                            "price": '3.00'
                        },
                        "BREAKFAST SHOT":{
                            "item":"BREAKFAST SHOT",
                            "description": 'don julio anejo • cinnamon-dusted orange',
                            "labels":['the hornet','hornet','alcohol','drink','drinks','breakfast drink'],
                            "price": '10.00'
                        },
                        "BRUNCHY PUNCHY":{
                            "item":"BRUNCHY PUNCHY",
                            "description": 'breckenridge spiced rum • cranberry liqueur • pineapple juice • orange juice • lemon',
                            "labels":['the hornet','hornet','punch','alcohol','drink','drinks','rum','cranberry','pineapple','pineapple juice','orange juice','lemon'],
                            "price": '8.00'
                        },
                        "DIRTY CHAI":{
                            "item":"DIRTY CHAI",
                            "description": 'captain morgan coconut rum • chai simple syrup • cold brew coffee • milk • cinnamon garnish',
                            "labels":['the hornet','hornet','rum','alcohol','drink','drinks','chai','syrup','coffee','cold brew','cold brew coffee','milk','cinnamon'],
                            "price": '9.00'
                        },
                        "KOMBUCHA CUREMOSA":{
                            "item":"KOMBUCHA CUREMOSA",
                            "description": 'happy leaf kombucha • champagne • mint',
                            "labels":['the hornet','hornet','kombucha','champagne','mint','drink','drinks','alcohol'],
                            "price": '6.00'
                        },
                        "BRUNCH DRINKS":{
                            "item":"BRUNCH DRINKS",
                            "description": 'MAKE-YOUR-OWN BLOODY MARY',
                            "labels":['bloody mary','the hornet','hornet','drink','drinks','alcohol'],
                            "price": '2.00'
                        },
                        "BRUNCH DRINKS":{
                            "item":"BRUNCH DRINKS",
                            "description": 'CLASSIC MIMOSA',
                            "labels":['the hornet','hornet','drink','drinks','alcohol','mimosa','orange juice','champagne'],
                            "price": '3.00'
                        },
                        "BRUNCH DRINKS":{
                            "item":"BRUNCH DRINKS",
                            "description": 'DOUBLE MIMOSA',
                            "labels":['the hornet','hornet','drink','drinks','alcohol','mimosa','orange juice','champagne'],
                            "price": '5.00'
                        },

                      }
                    ]
                }
            }
          },
          {
            "restaurant": {
                "name": "Lola Mexican Fish House",
                "location": {
                    "address": "1575 Boulder Street, Denver 80211",
                    "locality": "The Highlands",
                    "city": "Denver",
                    "city_id": 305,
                    "latitude": "39.7592204112",
                    "longitude": "-105.0107693883",
                    "zipcode": "80211",
                    "country_id": 216,
                    "locality_verbose": "The Highlands, Denver",
                    "logo":"../pictures/header-logo.png",
                    "menu_Url":"https://www.loladenver.com/menus/brunch/"
                },
                "menu":{
                    "items":[
                      {
                        "Salsa Verde [medium]":{
                            "item":"Salsa Verde [medium]",
                            "description": 'tomatillo, green apple, serrano, cilantro',
                            "labels":['lola','salsa','verde','salsa verde','tomatillo','green apple','apple','serrano','cilantro'],
                            "price": '4.00'
                        },
                        "":{
                            "item":"",
                            "description": '',
                            "labels":[],
                            "price": ''
                        },

                      }
                    ]
                }
            }
          },
    ]
}
