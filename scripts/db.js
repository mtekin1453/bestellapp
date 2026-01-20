
let categorieNames = [];

let databaseRestaurants = [
    {
        id: 0,
        name1: "Burger",
        name2: "Hause",
        rating: 4.1,
        reviews: 317,
        logo: "./assets/img/burgerhouse-logo.png",
        image: "./assets/img/header-company-image.png",
        slogan: "The best of Burgers, Pizza, and Greens, all in one great place.",
        menus: [
{
                categories: 
                { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Onion Rings (10 Stück)",
                ingredient: "mit Sauce Tartare",
                price: 6.5,
            },
            {
                categories: { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Frühlingsrollen (10 Stück)",
                ingredient: "mit scharfer Chilisauce",
                price: 6.0,
            },
            {
                categories: { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Gebackene Champignons (10 Stück)",
                ingredient: "mit Knoblauchsauce",
                price: 7.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Marinara",
                ingredient: "ohne Käse, mit Knoblauch",
                price: 5.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Margherita",
                ingredient: "mit Käse, mit Knoblauch",
                price: 6.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Salami",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Italiano",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Tiroler",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Mafiosi",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Funghi",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Soda (0,5L)",
                ingredient: "prickelnd",
                price: 2.0,
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Coca Cola (0,3L)",
                ingredient: "Dose",
                price: 3.0,
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Fanta (0,3L)",
                ingredient: "Dose",
                price: 3.0,
            },
            {
                categories: { name:"Alkoholisch", img: "./assets/icons/drink.png"},
                menu: "Sprite (0,3L)",
                ingredient: "Dose",
                price: 3.0,
            },
            {
                categories: { name:"Pasta", img: "./assets/icons/drink.png"},
                menu: "Red Bull (0,25L)",
                ingredient: "Dose",
                price: 3.0,
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Mezzo Mix (0,25L)",
                ingredient: "Dose",
                price: 3.0,
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Almdudler (0,33L)",
                ingredient: "Dose",
                price: 3.0,
            },
        ]
    },
    {
        id: 1,
        name1: "Burger",
        name2: "World",
        rating: 5.1,
        reviews: 417,
        logo: "./assets/img/burgerhouse-logo.png",
        image: "./assets/img/pizza.jpg",
        slogan: "Fresh from the oven, straight to your heart.",
        menus: [
            {
                categories: 
                { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Onion Rings (10 Stück)",
                ingredient: "mit Sauce Tartare",
                price: 6.5,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Frühlingsrollen (10 Stück)",
                ingredient: "mit scharfer Chilisauce",
                price: 6.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Vorspeisen", img: "./assets/icons/vorspeisen.png"},
                menu: "Gebackene Champignons (10 Stück)",
                ingredient: "mit Knoblauchsauce",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Marinara",
                ingredient: "ohne Käse, mit Knoblauch",
                price: 5.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Margherita",
                ingredient: "mit Käse, mit Knoblauch",
                price: 6.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Salami",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Italiano",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Tiroler",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Mafiosi",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Pizza", img: "./assets/icons/pizza.png"},
                menu: "Pizza Funghi",
                ingredient: "mit Käse, mit Salami",
                price: 7.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Soda (0,5L)",
                ingredient: "prickelnd",
                price: 2.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Coca Cola (0,3L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Fanta (0,3L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Sprite (0,3L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Red Bull (0,25L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Mezzo Mix (0,25L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
            {
                categories: { name:"Getränke", img: "./assets/icons/drink.png"},
                menu: "Almdudler (0,33L)",
                ingredient: "Dose",
                price: 3.0,
                menuImg: "./assets/menus/margherita.png"
            },
        ]
    }
];


