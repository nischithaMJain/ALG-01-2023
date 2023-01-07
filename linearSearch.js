function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (searchItem === arr[i]) {
      return `Item found at position ${i}`;
    }
  }
  return `Not Found`;
}

let arr = [4, 5, 8, 3, 1];
let searchItem = 8;
console.log(linearSearch(arr, searchItem));
