function dividedBy3() {
  let result = [];
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      result.push(i);
    }
  }
  return result;
}

function dividedBy4() {
  let result = [];
  for (let i = 0; i <= 1000; i++) {
    if (i % 4 === 0 && i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

function allNumbersEndWithOne() {
  let result = [];
  for (let i = 0; i <= 1000; i++) {
    if (i % 10 === 1) {
      result.push(i);
    }
  }
  return result;
}

console.log(dividedBy3());
console.log(dividedBy4());
console.log(allNumbersEndWithOne());

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

function cleanArr1(array) {
  let emptyArray1 = [];
  for (item of array) {
    if (typeof item === "string") {
      emptyArray1.push(item);
    }
  }
  return emptyArray1;
}

console.log(cleanArr1(test));

function cleanArr2(array) {
  let emptyArray2 = [];
  for (item of array) {
    if (typeof item === "number") {
      emptyArray2.push(item);
    }
  }
  return emptyArray2;
}

console.log(cleanArr2(test));

function cleanArr3(array) {
  let emptyArray3 = [];
  for (num of array) {
    if (num) {
      emptyArray3.push(num);
    }
  }
  return emptyArray3;
}
console.log(cleanArr3(test));
