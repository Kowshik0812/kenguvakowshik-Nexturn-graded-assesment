
const productsJSON = `[
  {"id": 1, "name": "Desktop", "category": "Electronics", "price": 39999, "available": true},
  {"id": 2, "name": "Iphone", "category": "Electronics", "price": 49999, "available": false},
  {"id": 3, "name": "Work Table", "category": "Furniture", "price": 8999, "available": true},
  {"id": 4, "name": "Flask", "category": "Appliances", "price": 1500, "available": true}
]`;


function parseProductsJSON(jsonString) {
  return JSON.parse(jsonString);
}

const products = parseProductsJSON(productsJSON);

function addProduct(products, newProduct) {
  products.push(newProduct);
  return products;
}

const newProduct = {id: 5, name: "Air Purifier", category: "Appliances", price: 12000, available: true};
addProduct(products, newProduct);


function updatePrice(products, productId, newPrice) {
  const product = products.find(p => p.id === productId);
  
  if (product) {
    product.price = newPrice;
    return product;
  } else {
    return "product not found!.";
  }
}


updatePrice(products, 1, 35000);

updatePrice(products, 6, 950);

function filterAvailableProducts(products) {
  return products.filter(p => p.available);
}

const availableProducts = filterAvailableProducts(products);


function filterProductsByCategory(Products,category){
  returnproducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

const electronicsProducts = filterProductsByCategory(products, "Electronics");

const FurnitureProducts = filterProductsByCategory(products, "Furniture");

const AppliancesProducts = filterProductsByCategory(products, "Appliances");

console.log("Available products:", availableProducts);
console.log("Electronics products:", electronicsProducts);
console.log("Furniture Products:",FurnitureProducts);
console.log("Appliances products:",AppliancesProducts);
console.log("All avalible products :", products);


