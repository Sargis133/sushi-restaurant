import type {I_Categories} from "~/models/pages/menu/interfaces";

export const allCategories: I_Categories[] = [
    {
        category: 'maki',
        products: [
            {
                name: 'SPICY TUNA MAKI',
                description: 'A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.',
                price: '$5',
                image: 'images/products/pexels-yang-hao-10692509 1.png',
                list: true
            },
            {
                name: 'MANGO MAKI',
                description: 'Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.',
                price: '$5',
                image: 'images/products/pexels-yang-hao-10692510 1.png'
            },
            {
                name: 'SALMON MAKI',
                description: 'Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.',
                price: '$5',
                image: 'images/products/pexels-yang-hao-10692517 1.png'
            },
            {
                name: 'TUNA MAKI',
                description: 'A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.',
                price: '$5',
                image: 'images/products/pexels-yang-hao-10692500 1.png'
            }
        ]
    },
    {
        category: 'uramaki',
        products: [
            {
                name: 'VOLCANO DELIGHT',
                description: 'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.',
                price: '$12',
                image: 'pexels-yang-hao-10692488 1.png',
                list: true
            },
            {
                name: 'RAINBOW FUSION',
                description: 'A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.',
                price: '$12',
                image: 'pexels-yang-hao-10692499 2.png'
            },
            {
                name: 'DRAGON ELEGANCE',
                description: 'Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.',
                price: '$12',
                image: 'pexels-yang-hao-10692515 1.png'
            },
            {
                name: 'SUNSET SERENITY',
                description: 'Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.',
                price: '$12',
                image: 'pexels-yang-hao-10692527 1.png'
            },
            {
                name: 'MYSTIC GARDEN',
                description: 'Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.',
                price: '$12',
                image: 'pexels-yang-hao-10692528 1.png'
            },
            {
                name: 'OCEAN BREEZE',
                description: 'A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.',
                price: '$12',
                image: 'pexels-yang-hao-10692529 1.png'
            },
            {
                name: 'TOKYO BLOSSOM',
                description: 'Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.',
                price: '$12',
                image: 'pexels-yang-hao-10692494 1.png'
            }
        ]
    },
    {
        category: 'special rolls',
        products: [
            {
                name: 'SUNRISE BLISS',
                description: 'A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.',
                price: '$16',
                image: 'pexels-yang-hao-10692508 (1) 1.png',
                list: true
            },
            {
                name: 'MANGO TANGO FUSION',
                description: 'Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.',
                price: '$16',
                image: 'pexels-yang-hao-10692480 1.png',
                list: true
            },
            {
                name: 'TRUFFLE INDULGENCE',
                description: 'Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.',
                price: '$16',
                image: 'pexels-yang-hao-10692484 1.png',
                list: true
            },
            {
                name: 'PACIFIC FIRECRACKER',
                description: 'Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.',
                price: '$16',
                image: 'pexels-yang-hao-10692491 1.png',
                list: true
            },
            {
                name: 'ETERNAL EEL ENCHANTMENT',
                description: 'An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.',
                price: '$16',
                image: 'pexels-yang-hao-10692482 1.png',
                list: true
            }
        ]
    }
]