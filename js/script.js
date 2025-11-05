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

/*
  let hour = new Date().getHours();
  let name = "Kean";

  if (hour >= 6 && hour <= 12) {
    console.log(`Good morning ${name}! its ${hour}00 hrs.`);
  } else if (hour > 13 && hour <= 17) {
    console.log(`Good afternoon ${name}! its ${hour}00 hrs.`);
  } else {
    console.log(`Good evening ${name}! its ${hour}00 hrs.`);
  }

  const isHoliday = false;
  let age = 6;
  if ((age <= 6 || age >= 65) && !isHoliday) console.log("Discount");
  else console.log("No Discount");
*/

/** Data manipulation in array */
const nums = [10, 20, 30, "apple", "banana", true, [1, 2], 66];
nums[7] = "mango";
// nums;

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log("lastItem is: " + getLastValue(nums));
console.log("lastItem is: " + getLastValue(["hi", "hello", "good"]));

function arraySwap(array) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let tempIndex = array[0];
  array[firstIndex] = array[lastIndex];
  array[lastIndex] = tempIndex;

  return array;
}
console.log("arraySwap", arraySwap(["bunny", 20, 22, 24, 25, "eagle"]));
console.log("arraySwap", arraySwap(nums));

/*
 0<1 = true : minNum=0, maxNum=1;
 0<-3 = false : minNum=-3, maxNum=1;
 -3<1 = true : minNum=-3, maxNum=5;
*/
function minMax(nums) {
  let minNum = 0;
  let maxNum = 0;
  if (nums.length !== 0) {
    for (let i in nums) {
      if (nums.length > 1 && minNum < nums[i]) {
        maxNum = nums[i];
      } else if (nums.length === 1) {
        maxNum = nums[i];
        minNum = nums[i];
      } else {
        minNum = nums[i];
      }
    }
  } else {
    minNum = null;
    maxNum = null;
  }
  return {
    minNum,
    maxNum,
  };
}
minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([]);
minMax([3]);

// count words that has duplicate then save on the object.
function countWords(words) {
  let fruitObj = {};
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    console.log(word, fruitObj[word]);
    if (!fruitObj[word]) {
      fruitObj[word] = 1;
    } else {
      fruitObj[word]++;
    }
  }
  return fruitObj;
}

countWords(["apple", "grape", "apple", "apple", "strawberry"]);
