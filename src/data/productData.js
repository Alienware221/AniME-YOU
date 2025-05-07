// src/data/productData.js

const productData = {
    // Figurines collection
    figurines: [
      {
        id: "fig-001",
        name: "Roronoa Zoro Figurine",
        price: "$29.99",
        image: "/assets/figurines/figure1.jpg",
        description: "Detailed Roronoa Zoro action figure in combat pose. Highly articulated with multiple accessories.",
        category: "figurines",
        inStock: true,
        rating: 4.7
      },
      {
        id: "fig-002",
        name: "Goku Super Saiyan Statue",
        price: "$49.99",
        image: "/assets/figurines/goku-figure.jpg",
        description: "Premium Dragon Ball Z collectible statue featuring Goku in Super Saiyan form.",
        category: "figurines",
        inStock: true,
        rating: 4.9
      },
      {
        id: "fig-003",
        name: "Mikasa Ackerman Figure",
        price: "$39.99",
        image: "/assets/figurines/mikasa-figure.jpg",
        description: "Attack on Titan's Mikasa Ackerman in 3D maneuver gear. Detailed paintwork and sculpting.",
        category: "figurines",
        inStock: true,
        rating: 4.5
      }
    ],
    
    // Clothing collection
    clothing: [
      {
        id: "cloth-001",
        name: "My Hero Academia T-Shirt",
        price: "$24.99",
        image: "/assets/clothing/mha-tshirt.jpg",
        description: "100% cotton t-shirt featuring the Class 1-A heroes. Available in multiple sizes.",
        category: "clothing",
        inStock: true,
        sizes: ["S", "M", "L", "XL", "XXL"],
        rating: 4.6
      },
      {
        id: "cloth-002",
        name: "One Piece Straw Hat Hoodie",
        price: "$39.99",
        image: "/assets/clothing/onepiece-hoodie.jpg",
        description: "Comfortable hoodie with Straw Hat Pirates logo. Perfect for anime fans and casual wear.",
        category: "clothing",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8
      },
      {
        id: "cloth-003",
        name: "Demon Slayer Jacket",
        price: "$59.99",
        image: "/assets/clothing/demonslayer-jacket.jpg",
        description: "Stylish jacket inspired by Demon Slayer Corps uniform. Water-resistant material.",
        category: "clothing",
        inStock: true,
        sizes: ["M", "L", "XL"],
        rating: 4.7
      }
    ],
    
    // Plushies collection
    plushies: [
      {
        id: "plush-001",
        name: "Totoro Plush",
        price: "$19.99",
        image: "/assets/plushies/totoro-plush.jpg",
        description: "Soft and huggable Totoro plush toy from Studio Ghibli's My Neighbor Totoro.",
        category: "plushies",
        inStock: true,
        rating: 4.9
      },
      {
        id: "plush-002",
        name: "Pikachu Plushie",
        price: "$24.99",
        image: "/assets/plushies/pikachu-plush.jpg",
        description: "Official Pokémon Pikachu plush toy. Super soft material, perfect for Pokémon fans.",
        category: "plushies",
        inStock: true,
        rating: 4.8
      },
      {
        id: "plush-003",
        name: "Kiki's Black Cat Jiji",
        price: "$22.99",
        image: "/assets/plushies/jiji-plush.jpg",
        description: "Adorable Jiji plush from Kiki's Delivery Service. Made with premium materials.",
        category: "plushies",
        inStock: true,
        rating: 4.7
      }
    ],
    
    // Desktop items collection
    desktop: [
      {
        id: "desk-001",
        name: "Blue Lock Mouse Pad",
        price: "$14.99",
        image: "assets/desktop/mousepad1.jpg",
        description: "Extended mouse pad featuring Nagi from Blue Lock.",
        category: "desktop",
        inStock: true,
        rating: 4.5
      },
      {
        id: "desk-002",
        name: "My Hero Academia Desk Lamp",
        price: "$34.99",
        image: "/assets/desktop/mha-lamp.jpg",
        description: "LED desk lamp with My Hero Academia theme. Three brightness settings and USB port.",
        category: "desktop",
        inStock: true,
        rating: 4.6
      },
      {
        id: "desk-003",
        name: "Anime Themed Mechanical Keyboard",
        price: "$79.99",
        image: "/assets/desktop/anime-keyboard.jpg",
        description: "RGB mechanical keyboard with anime-themed keycaps. Blue switches for tactile feedback.",
        category: "desktop",
        inStock: true,
        rating: 4.8
      }
    ],
    
    // Varieties/miscellaneous items
    varieties: [
      {
        id: "var-001",
        name: "Anime Wall Scroll Collection",
        price: "$19.99",
        image: "/assets/varieties/wall-scroll.jpg",
        description: "High-quality fabric wall scrolls featuring various popular anime series.",
        category: "varieties",
        inStock: true,
        rating: 4.4
      },
      {
        id: "var-002",
        name: "Anime Character Stickers Pack",
        price: "$9.99",
        image: "/assets/varieties/sticker-pack.jpg",
        description: "Pack of 50 waterproof vinyl stickers featuring popular anime characters.",
        category: "varieties",
        inStock: true,
        rating: 4.7
      },
      {
        id: "var-003",
        name: "Anime Series Poster Set",
        price: "$29.99",
        image: "/assets/varieties/poster-set.jpg",
        description: "Set of 5 high-quality posters from top anime series. Perfect for room decoration.",
        category: "varieties",
        inStock: true,
        rating: 4.5
      }
    ]
  };
  
  // Helper function to find a product by ID across all categories
  export const getProductById = (productId) => {
    for (const category in productData) {
      const foundProduct = productData[category].find(product => product.id === productId);
      if (foundProduct) return foundProduct;
    }
    return null; // Return null if product not found
  };
  
  // Export the entire data object
  export default productData;