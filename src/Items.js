const Items = [
  {
    itemId: 0,
    name: "Mug",
    price: "12 .99",
    description: `The Pugman mug is the perfect choice for any fan of the Pug superhero!
                  Featuring an adorable Pug design, this mug is sure to bring a smile to your face. 
                  Made from high-quality ceramic, it is both durable and microwave safe. 
                  It's the perfect size for your daily caffeine fix, holding up to 12 ounces of your favorite hot drink. 
                  Whether you're enjoying a cup of coffee in the morning or winding down with a cup of tea at night, this mug is the perfect companion. 
                  With a comfortable handle and a glossy finish, this mug is both stylish and practical. 
                  Whether you're looking to show off your love for the Pug superhero or just want to add some personality to your kitchen, this mug is the perfect choice.`,
    overview: ['adorable design', 'high-quality ceramic', 'microwave safe', 'holds up to 12 ounces', 
               'comfortable handle'],
    img: "pug_mug.png",
  },
  {
    itemId: 1,
    name: "Socks",
    price: "9 .99",
    description: `Our Pugman socks are the perfect addition to any sock collection! 
                  Featuring an adorable Pug design, these socks are sure to bring a smile to your face. 
                  Made from a soft and comfortable material, these socks will keep your feet warm and cozy all day long. 
                  The non-slip grip on the bottom of the socks is perfect for preventing slips and falls, making these a practical choice as well as a fashionable one. 
                  With a variety of sizes available, these socks are suitable for men, women, and children. 
                  Whether you're looking to add a pop of personality to your outfit or just want to show off your love for Pugman, our socks are the perfect choice.`,
    overview: ['adorable design', 'comfortable', 'slip protection', 'variety of sizes', 
               'unisex'],
                  img: "pug_socks.png",
  },
  {
    itemId: 2,
    name: "T-Shirt",
    price: "19 .99",
    description: `Our Pugman t-shirt is the perfect choice for any fan of the Pug superhero! 
                  Made from high-quality, comfortable material, this t-shirt is sure to become a staple in your wardrobe. 
                  The shirt features an adorable Pug design, showcasing your love for the superhero. 
                  With a variety of sizes available, this t-shirt is suitable for men, women, and children. 
                  Whether you're wearing it for a casual day out or as part of a costume, our Pugman t-shirt is sure to make a statement. 
                  Whether you're looking for a gift or just want to add some personality to your wardrobe, our Pugman t-shirt is the perfect choice.`,
    overview: ['adorable design', 'comfortable', 'unisex', 'versatile', 
               'perfect gift'],
    img: "pug_t_shirt.png",
  },
  {
    itemId: 3,
    name: "Bedding",
    price: "29 .99",
    description: `Our Pugman bedding is the perfect choice for any fan of the Pug superhero! 
                  This bedding set includes a comforter, sheets, and pillowcases, all featuring an adorable Pug design. 
                  Made from high-quality, comfortable material, this bedding is sure to become a staple in your home. 
                  The sheets and pillowcases have a thread count of 300, ensuring a soft and smooth feel against your skin. 
                  The comforter is filled with hypoallergenic material, making it suitable for those with allergies. 
                  With a variety of sizes available, this bedding is suitable for twin, full, queen, and king size beds. `,
    overview: ['comforter, sheets and Pillowcases', 'adorable design', 'soft and smooth', 'hypoallergenic', 
               'variety of sizes'],
    img: "pug_bedding.png",
  },
  {
    itemId: 4,
    name: "Poster",
    price: "6 .99",
    description: `Our Pugman poster is the perfect choice for any fan of the Pug superhero! 
                  This high-quality poster features an adorable Pug design, sure to bring a smile to your face every time you look at it. 
                  The poster is printed on glossy, heavyweight paper, ensuring that the colors are vibrant and the image is clear. 
                  It's the perfect size for hanging in a bedroom, office, or anywhere else you'd like to show off your love for the Pug superhero.  
                  Whether you're looking for a gift or just want to add some personality to your walls, our Pugman poster is the perfect choice.`,
    overview: ['adorable design', 'vibrant colors', 'clear image', 'perfect size', 
               'perfect gift'],
    img: "pug_poster.png",
  },
  {
    itemId: 5,
    name: "Plush",
    price: "8 .99",
    description: `Our Pugman plush is the perfect choice for any fan of the Pug superhero! 
                  This high-quality plush toy is made from soft and cuddly material, making it the perfect companion for snuggles and playtime. 
                  The plush features an adorable Pug design, showcasing your love for the superhero. 
                  It's the perfect size for hugging and carrying around, making it suitable for all ages. 
                  Whether you're looking for a gift or just want to add some personality to your home, our Pugman plush is the perfect choice. 
                  It's sure to become a beloved member of your household in no time!`,
    overview: ['adorable', 'soft and cuddly', 'for all ages', 'perfect size', 
               'customer favorite'],
    img: "pug_plush.png",
  },
  {
    itemId: 6,
    name: "Sticker x10",
    price: "4 .99",
    description: `Our Pugman stickers are the perfect choice for any fan of the Pug superhero! 
                  This set includes 10 high-quality stickers, featuring an adorable Pug design. 
                  The stickers are made from durable material, making them suitable for indoor or outdoor use. 
                  They are the perfect size for decorating laptops, water bottles, notebooks, and more. 
                  With a variety of sizes included in the set, you'll have plenty of stickers to choose from. 
                  Whether you're looking for a gift or just want to add some personality to your belongings, 
                  our Pugman stickers are the perfect choice. 
                  They're sure to bring a smile to your face every time you use them!`,
    overview: ['10 Stickers', 'adorable', 'perfect size', 'variety of sizes included', 
               'durable'],
    img: "pug_sticker.png",
  },
  {
    itemId: 7,
    name: "Notebook",
    price: "4 .99",
    description: `Our Pugman notebook is the perfect choice for any fan of the Pug superhero! 
                  This high-quality notebook features an adorable Pug design on the cover, making it both functional and stylish. 
                  The notebook has a durable construction and is made from eco-friendly materials, making it a great choice for those who are environmentally conscious. 
                  It has a spiral binding, making it easy to write in and keep your notes organized.  
                  Whether you're using it for school, work, or personal use, our Pugman notebook is the perfect choice. 
                  It's sure to bring a smile to your face every time you use it!`,
    overview: ['adorable design', 'eco-friendly', 'versatile', '100 Pages', 
               'spiral binding'],
    img: "pug_notebook.png",
  },
  {
    itemId: 8,
    name: "Bag",
    price: "3 .99",
    description: `Our Pugman bag is the perfect choice for any fan of the Pug superhero! 
                  This high-quality bag is made from durable materials and features an adorable Pug design, making it both functional and stylish. 
                  The bag has a spacious interior, perfect for holding all of your essentials. 
                  It also has a variety of pockets, inside for organizing your items. 
                  Our Pugman bag is the perfect choice. 
                  It's sure to bring a smile to your face every time you use it!`,
    overview: ['adorable design', 'durable', 'spacious', 'variety of pockets', 
               'high-quality'],
    img: "pug_bag.png",
  },
  {
    itemId: 9,
    name: "Calendar",
    price: "2 .99",
    description: `Our Pugman calendar is the perfect choice for any fan of the Pug superhero! 
                  This high-quality calendar features an adorable Pug design on every page, making it both functional and stylish. 
                  The calendar has a spiral binding, making it easy to turn the pages and keep track of the days. 
                  It also has a spacious layout, providing plenty of room for writing appointments, events, and other important notes.  
                  Whether you're using it for personal or professional use, 
                  our Pugman calendar is the perfect choice. 
                  It's sure to bring a smile to your face every day of the year!`,
    overview: ['adorable design', 'spiral binding', 'spacious layout', 'versatile', 
               'new design on every page'],
    img: "pug_calendar.png",
  },
  {
    itemId: 10,
    name: "Water Bottle",
    price: "7 .99",
    description: `Our Pugman water bottle is the perfect choice for any fan of the Pug superhero! 
                  This high-quality water bottle is made from durable materials and features an adorable Pug design, making it both functional and stylish. 
                  The water bottle has a spacious interior, perfect for holding plenty of water to keep you hydrated throughout the day. 
                  It also has a leak-proof design, ensuring that your drink stays inside the bottle where it belongs. 
                  Whether you're using it for the gym, work, or outdoor activities, our Pugman water bottle is the perfect choice. 
                  It's sure to bring a smile to your face every time you use it!`,
    overview: ['adorable design', 'carrying handle', 'durable', 'leak-proof', 
               'versatile'],
    img: "pug_bottle.png",
  },
  {
    itemId: 11,
    name: "Towel",
    price: "5 .99",
    description: `Our Pugman towel is the perfect choice for any fan of the Pug superhero! 
                  This high-quality towel is made from soft and absorbent material, making it the perfect choice for drying off after a shower, swimming, or working out. 
                  The towel features an adorable Pug design, making it both functional and stylish. 
                  It's the perfect size for using at home or on the go, making it suitable for all your drying needs. 
                  Whether you're using it for personal use or as a gift for a Pugman fan, our towel is the perfect choice. 
                  It's sure to bring a smile to your face every time you use it!`,
    overview: ['adorable design', 'soft and absorbent', 'perfect gift', 'gym approved', 
               'high-quality'],
    img: "pug_towel.png",
  },
  {
    itemId: 12,
    name: "Dog Toy",
    price: "5 .99",
    description: `Our Pugman dog toy is the perfect choice for any fan of the Pug superhero and their furry friend! 
                  This high-quality dog toy is made from durable materials and features an adorable Pug design, making it both functional and stylish. 
                  The toy is perfect for playing fetch, tug-of-war, and other interactive games with your dog. 
                  It's also great for chewing, helping to keep your dog's teeth clean and healthy. 
                  It's sure to bring a smile to your face and your dog's face!`,
    overview: ['dogs love it', 'durable', 'Helps to keep the teeth healthy', 'versatile', 
               'high-quality'],
    img: "pug_dog_toy.png",
  },
  {
    itemId: 13,
    name: "Dog Grooming Kit",
    price: "12 .99",
    description: `Our Pugman dog grooming kit is the perfect choice for any fan of the Pug superhero and their furry friend! 
                  This high-quality kit includes all the tools you need to keep your dog looking and feeling their best. 
                  The kit includes 2x shampoo, a conditioner and a brush all featuring an adorable Pug design. 
                  The products are made from natural, safe ingredients, making them gentle on your dog's skin and coat. 
                  The brush is durable and easy to use, making grooming a breeze.`,
    overview: ['full kit', '2x Shampoo, 1x Conditioner, 1x Brush', 'natural ingredients', 'easy to use', 
               'high-quality'],
    img: "pug_dog_grooming.png",
  },
  {
    itemId: 14,
    name: "Collar",
    price: "3 .99",
    description: `Our Pugman collar is the perfect choice for any fan of the Pug superhero and their furry friend! 
                  This high-quality collar is made from durable materials and features an adorable Pug design, making it both functional and stylish. 
                  The collar has a secure buckle and is adjustable, ensuring a perfect fit for your dog. 
                  It's the perfect size for small, medium, and large dogs. 
                  Whether you're using it for everyday wear or special occasions, our Pugman collar is the perfect choice.`,
    overview: ['adorable design', 'fits all dogs', 'durable', 'secure buckle', 
               'high-quality'],
    img: "pug_collar.png",
  },
  {
    itemId: 15,
    name: "Pugman Season 1 (CD)",
    price: "19 .99",
    description: `Our Pugman Season 1 CD is the perfect choice for any fan of the Pug superhero! 
                  This CD features all the episodes from the first season of the popular animated series. 
                  The CD comes in a sleek, compact design, making it easy to store and transport. 
                  It's the perfect way to re-watch your favorite episodes 
                  or introduce someone new to the world of Pugman.`,
    overview: ['The beloved Series', 'handy cd', 'perfect gift', 'All Season 1 Adventures', 
               'full hd'],
    img: "pug_season1.png",
  },
  {
    itemId: 16,
    name: "Mousepad",
    price: "3 .99",
    description: `Our Pugman mousepad is the perfect choice for any fan of the Pug superhero! 
                  This high-quality mousepad is made from durable materials and features an adorable Pug design, making it both functional and stylish. 
                  The mousepad has a non-slip backing, ensuring that it stays in place while you work. 
                  It's the perfect size for use with a desktop computer or laptop.`,
    overview: ['adorable design', 'durable', 'non-slip', 'perfect size', 
               'high-quality'],
    img: "pug_mousepad.png",
  },
  {
    itemId: 17,
    name: "Videogame (CD)",
    price: "39 .99",
    description: `The Pugman videogame is the perfect choice for any fan of the Pug superhero! 
                  It features an exciting and engaging story starring the beloved Pug superhero. 
                  It's the perfect way to experience the adventures of Pugman in a whole new way. 
                  Whether you're a long time fan or new to the franchise. 
                  It's sure to bring a smile to your face every time you play it!`,
    overview: ['The beloved game', 'handy cd', 'perfect gift', 'exciting and engaging', 
               'whole new experience'],
    img: "pug_videogame.png",
  },
];

export default Items;