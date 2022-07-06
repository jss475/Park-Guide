
#Create Lodgings for Yosemite National Park

puts('Creating Lodging data')

Lodging.create(
    name: "The Ahwahnee",
    address: "Yosemite National Park, 1 Ahwahnee Drive, Yosemite Valley, CA 95389",
    website: "https://www.travelyosemite.com/lodging/the-ahwahnee/",
    proximity: '',
    lodging_amenity: ['Heated Swimming Pool', 'Dining', 'Lounge/Bar', 'Gift Shop', 'WiFi', 'ADA Accessible', 'Shuttle Access', 'Free Guest Parking', 'Valet', 'Concierge','Daily Afternoon Tea','Waterfall & Cliff Views'] ,
    room_amenity: ['Hair Dryer', 'Flat Screen TV', 'Refrigerator', 'Telephone', 'ADA Accessible Rooms', 'Coffee Maker','Rollaway Cribs','Pillow-Top Mattress','Iron and Ironing Board','Non-Smoking','Daily Housekeeping','Room Service'] ,
    upvote: 0,
    downvote: 0,
    image: 'https://www.travelyosemite.com/media/574839/spring-at-the-majestic-yosemite-hotel_1000x667.jpg'
)

Lodging.create(
    name: 'Yosemite Valley Lodge',
    address: '9006 Yosemite Lodge Dr, YOSEMITE NATIONAL PARK, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/yosemite-valley-lodge/',
    proximity: '',
    lodging_amenity: ['Multiple Dining Options','Starbucks','Shuttle Access','Meeting & Banquet Facilities','Free Guest Parking','Limited WiFi','Outdoor Swimming Pool','Gift Shop','Outdoor Amphitheater','Activities Desk','ADA Accessible','Onsite Bike Rentals'],
    room_amenity: ['Hair Dryer','Iron/Ironing Board','Mini Fridge','Coffee Maker','Rollaway Crib','Daily Housekeeping','Television','Balcony/Patio','Toiletries','All Rooms Non-Smoking','ADA Accessible Rooms','No Pets Allowed','Extra Blankets (available by request)'],
    image: 'https://www.travelyosemite.com/media/574847/the-mountain-room-exterior_1000x667.jpg'
)


Lodging.create(
    name: 'Wawona Hotel',
    address: '8308 Wawona Rd, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/wawona-hotel/',
    proximity: '',
    lodging_amenity: ['Summer Saturday Night BBQ','Golf Course','Pioneer Yosemite History Center','Hiking Trails','Wawona Hotel Horse Stable','Outdoor Swimming Pool','Non-Smoking','Free Guest Parking','Cozy Fireplace in the Winter','Sun Room','Manicured Lawn','Evening Piano Music','Dining Room'],
    room_amenity: ['Private or Shared Bathrooms','Grand Verandas Available','Rollaway Cribs','Victorian Decor','No Tvs or Telephones','Daily Housekeeping'],
    image: 'https://www.travelyosemite.com/media/580080/exterior-1000x667.jpg'
)

Lodging.create(
    name: 'Curry Village',
    address: '9010 Curry Village Dr, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/curry-village/',
    proximity: '',
    lodging_amenity: ['Cabins, Tent Cabins & Standard Rooms','ADA Accessible','Free Guest Parking','Outdoor Swimming Pool','Non-Smoking','Multiple Dining Shops','Gift Shop'],
    image: 'https://www.travelyosemite.com/media/759099/half-dome-village_heated-canvas-tent-cabins_1000x667.jpg'
)

Lodging.create(
    name: 'Housekeeping Camp',
    address: 'Southside Dr, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/housekeeping-camp/',
    proximity: '',
    lodging_amenity: [],
    image: 'https://www.travelyosemite.com/media/610216/houskeeping-camp_unit-interior_1000x667.jpg'
)

Lodging.create(
    name: 'White Wolf Lodge',
    address: 'White Wolf Rd, Yosemite National Park, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/white-wolf-lodge/',
    proximity: '',
    image: 'https://www.travelyosemite.com/media/818422/cabin-exterior-white-wolf-02_1000x667.jpg'
)

Lodging.create(
    name: 'Tuolumne Meadows Lodge',
    address: 'Tioga Rd, Yosemite National Park, CA 95389',
    website: 'https://www.travelyosemite.com/lodging/tuolumne-meadows-lodge/',
    image: 'https://www.travelyosemite.com/media/690092/tuolumne-meadows-lodge-lodge-night-exterior_01_1000x667.jpg'
)

puts('Finished creating lodging data')

#Create foods for Yosemite National Park

puts('Creating food data')

Food.create(
    name: 'The Ahwahnee Dining Room',
    address: 'Yosemite National Park, 1 Ahwahnee Drive, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/dining/the-ahwahnee-dining-room/',
    pictures: ['https://www.travelyosemite.com/media/574868/majestic-yosemite-hotel-dining-room-interior-118_1000x333.jpg'],
    proximity: '',
    food_type: 'American',
    description: "As a destination dining spot, The Ahwahnee Dining Room is open year-round serving breakfast and dinner. With ceilings over 30 feet high and massive windows that take in the surrounding views, the dining room evokes a feeling of grandness and opulence. This is the setting for some of the world's most famous food and wine events: Bracebridge Dinner, Vintners' Holidays and Chefs' Holidays."
)

Food.create(
    name: 'The Ahwahnee Bar',
    address: 'Yosemite National Park, 1 Ahwahnee Drive, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/dining/the-ahwahnee-dining-room/',
    pictures: ['https://www.travelyosemite.com/media/574866/majestic-yosemite-hotel-bar-125_1000x333.jpg'],
    proximity: '',
    food_type: 'Bar',
    description: "The perfect place to unwind after an exciting day outdoors, the bar offers a relaxing atmosphere as well as outdoor seating with wonderful views of Yosemite National Park."
)

Food.create(
    name: 'Yosemite Valley Lodge (Base Camp Eatery and Mountain Room)',
    address: '9006 Yosemite Lodge Dr, YOSEMITE NATIONAL PARK, CA 95389',
    website: 'https://www.travelyosemite.com/dining/yosemite-valley-lodge/',
    proximity: '',
    pictures: ['https://www.travelyosemite.com/media/818396/base-camp-eatery-service-area-2_1000x667.jpg','https://www.travelyosemite.com/media/818397/mountain-room-lounge-3949_1000x667.jpg'],
    food_type: 'American',
    description: "At The Mountain Room Restaurant, you will take in astounding views of the nearly 2500 foot high waterfall. The menu offers perfectly cooked steaks, sustainably caught seafood, and delicious vegetarian options. The restaurant is open year-round. Last seating is 8:30 pm. *walk-ins based on availability.\n 
    Kick back, put a marshmallow on a stick, and roast it to a golden brown at The Mountain Room Lounge. In addition to the wonderful Swedish-style fireplace, you'll enjoy the classic furnishings as a sip a cocktail and munch on delicious appetizers. During the warmer months, you can enjoy sitting outside on the patio, where you'll take in the gorgeous surroundings.\n 
    Base Camp Eatery, which includes a Starbucks coffee bar, serves breakfast, lunch and dinner. The new dining experience offers greater menu variety, recipes using local/seasonal ingredients with a greater emphasis on front-of-house cooking and fresh food concepts, and grab-and-go selections. The interior design and concept honors the history of rock climbing in Yosemite. Base Camp Eatery represents Yosemite Hospitality's latest capital improvement project and continued investment in modernizing hospitality offerings and enhancing guest experiences at Yosemite National Park. Both indoor and outdoor seating are available."
)

Food.create(
    name: 'Village Store',
    address: '9011 Village Dr, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/things-to-do/shopping-supplies-groceries/#village-store',
    proximity: '',
    pictures: ['https://images.happycow.net/venues/1024/18/87/hcmp188707_782130.jpeg'],
    food_type: 'Grocery',
    description: "You find the Village Store in Yosemite Village, with all the essentials you need — including groceries, meat and produce, baked goods, camping supplies, books, magazines, postcards, ice and firewood. There's also an ATM in the store. Additionally, you'll find all the souvenirs, T-shirts, sweatshirts and hats you could ever want—perfect for gifts or commemorating your Yosemite experience."
)

Food.create(
    name: "Yosemite Village (Degnan's Kitchen, The Loft at Degnan's, Village Grill Deck)",
    address: '9015 Village Dr, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/dining/yosemite-village/',
    proximity: '',
    pictures: ['https://www.travelyosemite.com/media/749727/degnans-kitchen_dsc2879_1000x333.jpg','https://www.travelyosemite.com/media/749729/degnans-loft_dsc2689_1000x333.jpg','https://www.travelyosemite.com/media/821181/yosemite-village-store-3964_1000x333.jpg?%20alt='],
    food_type: 'American',
    description: "Degnan's Kitchen. Authentic delicatessen sandwiches, signature salads, artisan pizzas, breakfast favorites, coffee / espresso drinks, baked goods and a wide selection of soft drinks and other beverages are available at Degnan's Kitchen. \n 
    The Loft at Degnan's. The perfect place to enjoy tasty BBQ including chicken wings, ribs, brisket and more! The Loft at Degnan's is upstairs from the Degnan's Kitchen. A wide variety of wines and beers on tap are available. The Loft at Degnan's features numerous TVs to enjoy sports and other entertainment.\n 
    Village Grill Deck. Grilled sandwiches, burgers, hot dogs and veggie options are available daily. The Village Grill features outside seating on the expansive deck. "
)

Food.create(
    name: 'Curry Village Dining',
    address: '9010 Curry Village Dr, Yosemite Valley, CA 95389',
    website: 'https://www.travelyosemite.com/dining/curry-village-dining/',
    proximity: '',
    pictures: ['https://www.travelyosemite.com/media/823121/1889-1000x667.jpg','https://www.travelyosemite.com/media/823122/the-deck-1000x667.jpg','https://www.travelyosemite.com/media/823123/seven-tents-1000x667.jpg','https://www.travelyosemite.com/media/823124/seven-tents-graphics-1000x667.jpg'],
    food_type: 'American',
    description: "Curry Village's Meadow Grill offers a wide variety of menu options including breakfast burritos, burgers, rice bowls, salads and numerous vegetarian options.\n 
    Pizza Deck. Hand-tossed pizza, fresh salads, and cold drinks are served on the outdoor deck, surrounded by great views of Glacier Point and Royal Arches. The Deck is open January through November and during holidays when Curry Village is open.\n 
    Coffee Corner. Grab a fresh pastry, enjoy a hearty oatmeal to start your day on the trail, or sip your favorite coffee, cappuccino, or espresso. Proudly pouring Peet's Coffee.\n 
    The Seven Tents Pavilion just recently reopened after an extensive renovation. Enjoy hearty meals and our famous pizza after your day of adventure in Yosemite. \n 
    Bar 1899 is the perfect spot to enjoy creative cocktails—including our popular Agave Smash, numerous tap beers and a selection of small plates to savor. Indoor seating is available and there are TVs to view the game!"
)

puts('Finished creating food data')

#Creating trails data for Yosemite National Park

puts('Creating trail data')

Trail.create(
    name: 'Vernal and Neveada Falls via Mist Trail',
    proximity: '',
    mileage: 6,
    elevation_gain: 2162,
    starting_elevation: 4034,
    starting_lat: 37.73268,
    starting_long: -119.55816,
    ending_lat: 37.7243272,
    ending_long: -119.5328379,
    route_type: 'Loop',
    difficulty: 'Hard',
    estimated_time: '4 h',
    water: 2,
    food: 1,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10026910/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Upper Yosemite Falls Trail',
    proximity: '',
    mileage: 7.6,
    elevation_gain: 3218,
    starting_elevation: 3987,
    starting_lat: 37.787052921334826, 
    starting_long: -119.60515426801477,
    ending_lat: 37.7501035,
    ending_long: -119.5957893,
    route_type: 'Out & Back',
    difficulty: 'Hard',
    estimated_time: '5 h 35 min',
    water: 3,
    food: 2,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10005895/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Lower Yosemite Falls Trail',
    proximity: '',
    mileage: 1.2,
    elevation_gain: 59,
    starting_elevation: 3992,
    starting_lat: 37.7460739,
    starting_long: -119.5957464,
    ending_lat: 37.7501035,
    ending_long: -119.5957893,
    route_type: 'Loop',
    difficulty: 'Easy',
    estimated_time: '24 min',
    water: 1,
    food: 1,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10011926/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Half Dome via the John Muir Trail (JMT)',
    proximity: '',
    mileage: 15,
    elevation_gain: 5193,
    starting_elevation: 4031,
    starting_lat: 37.73275,
    starting_long: -119.55794,
    ending_lat: 37.72503,
    ending_long: -119.54501,
    route_type: 'Out & Back',
    difficulty: 'Extremely Hard',
    estimated_time: '9 h 47 min',
    water: 4,
    food: 3,
    permit?: true,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10005585/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Vernal Falls',
    proximity: '',
    mileage: 4,
    elevation_gain: 1279,
    starting_elevation: 4022,
    starting_lat: 37.726,
    starting_long: -119.55153,
    ending_lat: 37.72723,
    ending_long: -119.54237,
    route_type: 'Out & Back',
    difficulty: 'Hard',
    estimated_time: '2 h 30 min',
    water: 2,
    food: 1,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10276593/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Mirror Lake via Valley Loop Trail',
    proximity: '',
    mileage: 4.4,
    elevation_gain: 301,
    starting_elevation: 4003,
    starting_lat: 37.73947,
    starting_long: -119.55982,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Loop',
    difficulty: 'Moderate',
    estimated_time: '1 h 34 min',
    water: 2,
    food: 1,
    pictures: ['https://www.alltrails.com/api/alltrails/trails/10235913/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Big Pine Lakes Trail',
    proximity: '',
    mileage: 15.2,
    elevation_gain: 3982,
    starting_elevation: 7678,
    starting_lat: 37.128026,
    starting_long: -118.427383,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Out & Back',
    difficulty: 'Extremely Hard',
    estimated_time: '8 h 32 min',
    water: 4,
    food: 3,
    pictures:['https://www.alltrails.com/api/alltrails/trails/10027563/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Glacier Point Trail',
    proximity: '',
    mileage: 0.6,
    elevation_gain: 167,
    starting_elevation: 7188,
    starting_lat: 37.72759,
    starting_long: -119.5741975,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Loop',
    difficulty: 'Easy',
    estimated_time: '21 min',
    water: 1,
    food: 1,
    pictures:['https://www.alltrails.com/api/alltrails/trails/10033113/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Sentinel Dome Trail',
    proximity: '',
    mileage: 2.1,
    elevation_gain: 456,
    starting_elevation: 7719,
    starting_lat: 37.71244534122921, 
    starting_long: -119.58437331168108,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Out & Back',
    difficulty: 'Easy',
    estimated_time: '1 h 5 min',
    water: 1,
    food: 1,
    pictures:['https://www.alltrails.com/api/alltrails/trails/10031426/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Clouds Rest Trail',
    proximity: '',
    mileage: 14,
    elevation_gain: 3166,
    starting_elevation: 8166,
    starting_lat: 37.82583,
    starting_long: -119.46999,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Out & Back',
    difficulty: 'Extremely Hard',
    estimated_time: '7 h 20 min',
    water: 4,
    food: 3,
    pictures:['https://www.alltrails.com/api/alltrails/trails/10027503/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

Trail.create(
    name: 'Four Mile Trail',
    proximity: '',
    mileage: 9.2,
    elevation_gain: 3612,
    starting_elevation: 3980,
    starting_lat: 37.73123235765073, 
    starting_long: -119.55495045415381,
    ending_lat: 37.7433676,
    ending_long: -119.5567042,
    route_type: 'Out & Back',
    difficulty: 'Hard',
    estimated_time: '6 h 27 min',
    water: 3,
    food: 3,
    pictures:['https://www.alltrails.com/api/alltrails/trails/10010560/profile_photo?show_placeholder=no&show_static_map=no&size=larger_wide&key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i']
)

puts('Finished Trail Data')


#Create User data

puts('Creating User Data!')

5.times do
    User.create(
        email: Faker::Internet.email,
        password_digest: 'Password1!',
        password_confirmation: 'Password1!',
        name: Faker::Name.name,
        elite: false
    )
end

puts('Finished Creating User Data')


puts('Creating the Middle Men')
#Create UserTrails data

10.times do
    UserTrail.create(
        user_id: User.ids.sample,
        trail_id: Trail.ids.sample,
        review: Faker::GreekPhilosophers.quote
    )
end

#Create UserFoods data

10.times do
    UserFood.create(
        user_id: User.ids.sample,
        food_id: Food.ids.sample,
        review: Faker::GreekPhilosophers.quote
    )
end

#Create UserLodgings data


10.times do
    UserLodging.create(
        user_id: User.ids.sample,
        lodging_id: Lodging.ids.sample,
        review: Faker::GreekPhilosophers.quote
    )
end

puts('Finished Creating Middle Men')
