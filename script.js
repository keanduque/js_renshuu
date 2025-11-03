//document.body.innerHTML = "Hello Kean to JS World!";
console.log("Hello Kean to JS World!");

const product = {
  name: "shirt",
  "delivery-time": "1 day",
  ratings: {
    stars: 4.5,
    count: 87,
  },
  fun: function function1() {
    console.log("This is a function inside an object");
  },
};
console.log("product", product);

const amazonProduct = {
  name: "basketball",
  price: 2095,
};
console.log("amazonProduct", amazonProduct);

amazonProduct.price += 500;

amazonProduct["delivery-time"] = "3 days";

console.log("amazonProduct update", amazonProduct);

const amazonProduct2 = {
  name: "shirt",
  price: 20,
};
const amazonProduct3 = amazonProduct2;

const amazonProduct4 = {
  name: "shirt",
  price: 20,
};

function comparePrice(product1, product2) {
  return product1.price < product2.price ? product1 : product2;
}
console.log(comparePrice(amazonProduct, amazonProduct2));

function isSameProduct(prod1, prod2) {
  return prod1.name === prod2.name || prod1.price === prod2.price;
}
console.log("is same product?", isSameProduct(amazonProduct2, amazonProduct4));
