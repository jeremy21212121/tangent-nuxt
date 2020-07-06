export default {
  title: "drinks",
  categories: [
    {
      title: "wine",
      description: ["Served by the glass","6oz | ½ liter | bottle"],
      subcategories: [
        {
          title: "red",
          items: [
            {
              title: "Gehringer Cabernet-Merlot",
              description: "BC",
              prices: [10, 25, 39]
            },
            {
              title: "Flauta de Bartolo Monastrell",
              description: "Spain",
              prices: [9, 24, 35]
            },
            {
              title: "Leaping Horse Cabernet-Sauvignon",
              description: "California",
              prices: [11, 27, 40]
            }
          ]
        },
        {
          title: "white",
          items: [
            {
              title: "Mayhem Pinot Blanc",
              description: "BC",
              prices: [11, 27, 40]
            },
            {
              title: "Gehringer Sauvignon Blanc",
              description: "BC",
              prices: [9, 24, 36]
            },
            {
              title: "Terroso Chardonnay",
              description: "Chile",
              prices: [9.5, 26, 38]
            }
          ]
        }
      ]
    },
    {
      title: "cocktails",
      description: "Available after 3pm",
      items: [
        {
          title: "strange brew",
          description: "gin, pineapple, IPA & almond syrup",
          prices: [9.5]
        },
        {
          title: "paloma",
          description: "tequila, grapefruit, agave",
          prices: [9]
        },
        {
          title: "mai tai",
          description: "rum, citrus, almond syrup",
          prices: [10]
        },
        {
          title: "margarita",
          description: "tequila, lime & triple sec on the rocks",
          prices: [9.5]
        },
        {
          title: "el diablo",
          description: "tequila, cassis, lime, ginger beer",
          prices: [11]
        },
        {
          title: "lady grey",
          description: "vodka, earl grey, lemon, ginger",
          prices: [10]
        },
        {
          title: "trouble in paradise",
          description: "bourbon, campari, grapefruit, honey",
          prices: [11]
        }
      ]
    },
    {
      title: "scotch whiskey",
      description: "Available after 3pm",
      items: [
        {
          title: "Glenfiddich 12 Year",
          prices: [7.5]
        },
        {
          title: "Ardbeg 10 Year",
          prices: [11]
        },
        {
          title: "Macallan Gold",
          prices: [8]
        },
        {
          title: 'Talisker 10 Year',
          prices: [ 11 ]
        },
        {
          title: 'Dalmore 12 Year',
          prices: [ 10 ]
        },
        {
          title: 'Dalwhinnie 15 Year',
          prices: [ 12 ]
        },
        {
          title: 'Highland Park 12 Year',
          prices: [ 9 ]
        },
        {
          title: 'Lagavulin 16 Year',
          prices: [ 14.5 ]
        },
        {
          title: 'Laphroaig 10 Year',
          prices: [ 10 ]
        },
        {
          title: 'Aberlour A’Bunadh',
          prices: [ 14 ]
        },
        {
          title: 'Oban 14 Year',
          prices: [ 14 ]
        }
      ]
    }
  ]
};
