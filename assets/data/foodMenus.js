const menuData = {
  status: {
    isLoaded: false
  },
  menus: [
    {
      title: "breakfast",
      footer: [
        "18% gratuity will automatically be charged to parties of six or more."
      ],
      categories: [
        {
          title: "eggs",
          description:
            "All egg dishes come with hash-browns, your choice of multigrain, rye or light sourdough toast & a slice of orange. Substitute for gluten free toast for $2. Substitute for free-range eggs or egg whites for 50 cents per egg. Substitute hash-browns for house salad or seasonal fruit for $2. All omelettes are made with three eggs & are available as scrambles.",
          items: [
            {
              title: "classic breakfast",
              meatFree: true,
              price: 12,
              description:
                "three eggs cooked to your liking, hash-browns & toast",
              addons: [
                {
                  title: "+ bacon, ham or breakfast sausage",
                  price: 15
                },
                {
                  title: "+ chorizo sausage or smoked meat",
                  price: 16
                }
              ]
            },

            {
              title: "light breakfast",
              meatFree: true,
              price: 13,
              description:
                "two scrambled egg whites, fried tomatoes, sautéed spinach & an english muffin"
            },

            {
              title: "cheddar omelette",
              meatFree: true,
              price: 13,
              addons: [
                {
                  title: "+ bacon, ham, breakfast sausage or mushrooms",
                  price: 16
                },
                {
                  title: "+ chorizo sausage or smoked meat",
                  price: 17
                }
              ]
            },

            {
              title: "brie omelette",
              meatFree: true,
              price: 16,
              description: "ripe tomatoes, baby spinach & brie"
            },

            {
              title: "veggie omelette",
              meatFree: true,
              price: 15,
              description:
                "sautéed mushrooms, spinach, tomatoes & crumbled feta"
            },

            {
              title: "meaty boy's breakie",
              meatFree: false,
              price: 18,
              description:
                "two eggs scrambled with sweet peppers & onions, with breakfast sausage, bacon & smoked meat on the side"
            },

            {
              title: "chorizo scramble",
              meatFree: false,
              price: 18,
              description:
                "three eggs, scrambled with chorizo sausage, green onions, jalapeños & cheddar"
            },

            {
              title: "malaysian vegan scramble",
              meatFree: true,
              price: 16,
              description:
                "spicy marinated tofu scrambled with tomato, spinach & green onions"
            },

            {
              title: "smoked meat hash",
              meatFree: false,
              price: 17,
              description:
                "shredded hash-browns, montréal-style smoked meat, red bell peppers & onions pan-fried & topped with two sunny-side-up eggs"
            },

            {
              title: "the blt",
              meatFree: false,
              price: 15,
              description:
                "bacon, lettuce & tomato sandwich, served with fries, hash-browns or salad",
              addons: [
                {
                  title: "+ fried egg",
                  price: 16
                }
              ]
            }
          ]
        },

        {
          title: "bennies",
          description:
            "All bennies are prepared with the freshest ingredients and house-made hollandaise with a side of crispy hash-browns & a slice of orange. Substitute hash-browns for house salad or seasonal fruit for $2",
          items: [
            {
              title: "classic ham",
              meatFree: false,
              price: 16
            },
            {
              title: "classic bacon",
              meatFree: false,
              price: 16
            },
            {
              title: "smoked meat",
              meatFree: false,
              price: 17
            },
            {
              title: "avocado & tomato",
              meatFree: true,
              price: 16
            },
            {
              title: "avocado & bacon",
              meatFree: false,
              price: 17
            },
            {
              title: "hot chorizo",
              meatFree: false,
              price: 18
            },
            {
              title: "spinach & brie",
              meatFree: true,
              price: 16
            },
            {
              title: "wild smoked salmon & red onion",
              meatFree: false,
              price: 18
            },
            {
              title: "crab cake & arugula",
              meatFree: false,
              price: 18
            }
          ]
        },

        {
          title: "sweets",
          description:
            "All sweet dishes come with a slice of orange & are served with syrup, whipped cream & choice of blueberry or apple cinnamon compote.",
          items: [
            {
              title: "french toast",
              description: "sprinkled with icing sugar",
              price: 15
            },
            {
              title: "waffles",
              description: "four waffles sprinkled with icing sugar",
              price: 15
            },
            {
              title: "pancakes",
              description: "three large pancakes sprinkled with icing sugar",
              price: 14,
              addons: [
                {
                  title: "+ bananas",
                  price: 16
                }
              ]
            },
            {
              title: "oatmeal",
              description: "comes with a side of toasted nuts, milk and a fresh orange slice",
              price: 11
            },
            {
              title: "french vanilla yogurt",
              price: 11,
              description: "with seasonal fruit"
            }
          ]
        },

        {
          title: "sides",
          items: [
            {
              title: "seasonal fruit bowl",
              price: 8
            },
            {
              title: "bacon, ham or breakfast sausage",
              price: 6
            },
            {
              title: "chorizo sausage or smoked meat",
              price: 7
            },
            {
              title: "sautéed mushrooms or spinach",
              price: 3
            },
            {
              title: "two pieces of toast",
              price: 5
            },
            {
              title: "cheddar, brie or feta",
              price: 5
            },
            {
              title: "one egg",
              price: 2
            },
            {
              title: "two waffles or two pancakes",
              price: 9
            },
            {
              title: "french toast",
              price: 9
            },
            {
              title: "House-made blueberry or apple-cinnamon compote",
              price: 3
            },
            {
              title: "mashed avocado",
              price: 5
            },
            {
              title: "wild smoked salmon",
              price: 10
            },
            {
              title: "house-made hollandaise sauce",
              price: 5
            }
          ]
        }
      ]
    },

    {
      title: "lunch",
      footer: [
        "Available 11am – 2pm, monday – friday. ",
        "18% gratuity will automatically be charged to parties of six or more."
      ],
      categories: [
        {
          title: "lunch",
          description: "All sandwiches come with house salad or fries. Substitue for truffled fries, sweet potato fries or soup for $2.",
          items: [
            {
              title: "daily soup",
              meatFree: true,
              price: 8,
              description: "made from scratch each morning with fresh, seasonal ingredients & served with garlic toast"
            },
            {
              title: "house salad",
              meatFree: true,
              price: 11,
              description:
                "fresh mixed greens, tomatoes, green onions & grated beets with balsamic vinaigrette",
              addons: [
                {
                  title: "• starter-size",
                  price: 8
                },
                {
                  title: "+ grilled chicken breast",
                  price: 6
                },
              ]
            },
            {
              title: "chicken club sandwich",
              price: 17,
              description: "seasoned chicken breast, bacon, lettuce, tomato, mayo on your choice of toast"
            },
            {
              title: "spicy crunchy chicken burger",
              price: 18,
              description:
                "chicken breast, panko battered & deep–fried, served with lettuce, tomatoes & jalapeños with sambal mayo",
              addons: [
                {
                  title: "+ bacon strips or cheddar cheese",
                  price: 20
                }
              ]
            },
            {
              title: "sante fe chicken burger",
              price: 17,
              description: "juicy chicken breast, avocado, jalapeños and cheddar cheese on a brioche bun."
            },
            {
              title: "BBQ bacon burger",
              meatFree: false,
              price: 17,
              description:
                "beef patty topped with bacon, carmelized onion, lettuce, tomato, mayo, mustard & bbq sauce",
              addons: [
                {
                  title: "+ add cheddar cheese",
                  price: 19
                }
              ]
            }
          ]
        }
      ]
    },

    {
      title: "dinner",
      footer: [
        "Available after 4pm wednesday – sunday. ",
        "18% gratuity will automatically be charged to parties of six or more."
      ],
      categories: [
        {
          title: "start & share",
          items: [
            {
              title: "daily soup",
              meatFree: true,
              price: 8,
              description: "made from scratch each morning with fresh, seasonal ingredients & served with garlic toast"
            },
            // {
            // 	title: "dry ribs",
            // 	price: 11,
            // 	description: "tossed in salt & pepper, deep-fried & served with plum sauce"
            // },
            {
              title: "fries",
              meatFree: true,
              price: 8,
              description:
                "blanched & deep–fried for maximum crunch & served with roasted garlic mayo",
              addons: [
                {
                  title: "+ truffled",
                  price: 10
                },
                {
                  title: "+ sweet potato",
                  price: 10
                }
              ]
            },
            {
              title: "malaysian poutine",
              price: 14,
              description:
                "Malaysia meets Montréal: our chicken curry sauce, served over our house fries, mixed with fresh cheese curds, fried shallots & cilantro for a fantastic fusion of flavours",
              addons: [
                {
                  title: "+ bacon",
                  price: 16
                }
              ]
            },
            {
              title: "wings of the world",
              price: 15,
              description:
                "one pound of wings smothered in your choice of tangent café’s house–made sauces: Lousiana hot, Malaysian, Texan or Vancouvarian"
            },
            {
              title: "roti canai",
              meatFree: true,
              price: 9,
              description:
                "flakey pan–fried Malaysian flatbread with a side of either lentil or chicken curry sauce for dipping"
            },
            // {
            // 	title: "calamari",
            // 	price: 11,
            // 	description: "tender squid, battered & flash fried, with sambal house mayo for dipping"
            // },
            {
              title: "crispy chicken tenders",
              price: 14,
              description: "battered, deep–fried & served with plum sauce",
              addons: [
                {
                  title: "+ side fries or house salad",
                  price: 17
                }
              ]
            }
            // {
            // 	title: "charcuterie plate",
            // 	price: 18,
            // 	description: "daily selection of meats, condiments & bread",
            // }
          ]
        },
        {
          title: "salads",
          description: "Add grilled chicken breast to any salad for $6.",
          items: [
            {
              title: "tangent house salad",
              meatFree: true,
              price: 11,
              description:
                "fresh mixed greens, tomatoes, green onions & grated beets with balsamic vinaigrette",
              addons: [
                {
                  title: "• starter-size",
                  price: 8
                },
                {
                  title: "+ grilled chicken breast",
                  price: 6
                },
              ]
            },
            // 1: {
            // 	title: "smoked wild salmon and arugula salad",
            // 	price: 17,
            // 	description: "smoked wild salmon, arugula, avocado, fennel, red onion & orange vinaigrette"
            // },
            {
              title: "roasted beet salad",
              meatFree: true,
              price: 14,
              description:
                "slow-roasted beets, mixed greens, mandarin oranges, toasted walnuts & goat cheese"
            },
            {
              title: "lemongrass chicken vermicelli salad",
              price: 17,
              description:
                "grilled lemongrass chicken, vermicelli, red pepper, shredded carrots & cucumbers with peanut dressing"
            },
            {
              title: "caesar salad",
              price: 14,
              description:
                "crisp romaine lettuce with diced bacon, garlic-oil toasted croutons, parmesan & house-made dressing",
              addons: [
                {
                  title: "+ grilled chicken breast",
                  price: 6
                },
              ]
            }
          ]
        },
        {
          title: "west",
          description:
            "All sandwiches come with house salad or fries. Substitue for truffled fries, sweet potato fries or caesar salad for $2. Substitute for Malaysian poutine for $4.",
          items: [
            // {
            // 	title: "chicken club wrap",
            // 	price: 15,
            // 	description: "seasoned chicken breast, bacon, lettuce, tomato, mayo — a classic"
            // },
            {
              title: "tangent burger",
              price: 18,
              description:
                "chargrilled burger with diced bacon cooked into the patty, served with cheddar, sautéed mushrooms, lettuce, tomatoes, pickles, mayo & Dijon mustard",
              addons: [
                {
                  title: "+ bacon² with strips on top",
                  price: 20
                }
              ]
            },
            {
              title: "veggie burger",
              meatFree: true,
              price: 17,
              description:
                "bean & veggie patty, breaded & pan fried, topped with cheddar, guac, lettuce, tomato, onion & garlic aioli"
            },
            {
              title: "spicy crunchy chicken burger",
              price: 18,
              description:
                "chicken breast, panko battered & deep–fried, served with lettuce, tomatoes & jalapeños with sambal mayo",
              addons: [
                {
                  title: "+ bacon strips or cheddar cheese",
                  price: 20
                }
              ]
            },
            {
              title: "BBQ bacon burger",
              meatFree: false,
              price: 17,
              description:
                "beef patty topped with bacon, carmelized onion, lettuce, tomato, mayo, mustard & bbq sauce",
              addons: [
                {
                  title: "+ add cheddar cheese",
                  price: 19
                }
              ]
            }
          ]
        },
        {
          title: "east",
          description:
            "Tangent Café’s Malaysian-style dishes are prepared from scratch with the freshest available ingredients. Add roti for $3.",
          items: [
            {
              title: "mee goreng",
              meatFree: true,
              price: null,
              description:
                "yellow egg noodles stir-fried in a piping hot wok with bok choy, bean sprouts, egg & a sweet & spicy soy sauce",
              addons: [
                {
                  title: "+ tofu",
                  price: 15
                },
                {
                  title: "+ chicken",
                  price: 18
                },
                {
                  title: "+ prawns",
                  price: 20
                }
              ]
            },
            // 1: {
            // 	title: "beef rendang",
            // 	price: 16,
            // 	description: "beef slow-cooked in a spicy curry & finished with coconut milk"
            // },
            {
              title: "sambal ayam",
              price: 18,
              description:
                "garlic, ginger & turmeric marinated chicken, deep-fried & tossed in our house-made spicy sambal sauce with green beans & served with rice"
            },
            {
              title: "kari ayam",
              price: 18,
              description:
                "chicken cooked in a spicy yellow curry of ginger, lemongrass, shallots & creamy coconut milk"
            },
            // 3: {
            // 	title: "lentil veggie curry",
            // 	meatFree: true,
            // 	price: 15,
            // 	description: "lentil, green peas, potatoes, onion, cilantro & curry spices"
            // },
            {
              title: "sambal green beans",
              meatFree: true,
              price: 15,
              description:
                "crisp green beans stir-fried with tofu in a spicy sambal sauce & served with rice",
              addons: [
                {
                  title: "+ chicken",
                  price: 18
                },
                {
                  title: "+ prawns",
                  price: 20
                }
              ]
            },
            {
              title: "sambal eggplant",
              meatFree: true,
              price: 16,
              description:
                "eggplant fried & smothered in house-made spicy sambal sauce, served with deep-fried tempeh bacon, pea shoots & served with rice"
              // addons: [
              // 	0: {
              // 		title: "+ chicken",
              // 		price: 17
              // 	},
              // 	1: {
              // 		title: "+ prawns",
              // 		price: 19
              // 	}
              // ]
            }
          ]
        } //east
      ] //categories
    } //dinner
  ] //menus
};

export default menuData;
