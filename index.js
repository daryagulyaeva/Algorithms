document.getElementById("add").onclick = function () {
  let numbers = document.getElementById("numbers").value;
  viewResult(numbers);
};

const findMaxNumber = (array) => {
  let arr = array.split(",");
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(count) < parseInt(arr[i])) {
      count = arr[i];
    }
  }
  return count;
};
const findMinNumber = (array) => {
  let arr = array.split(",");
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(count) > parseInt(arr[i])) {
      count = arr[i];
    }
  }
  return count;
};

const viewResult = (numbers) => {
  document.getElementById("resultMax").innerHTML = findMaxNumber(numbers);
  document.getElementById("resultMin").innerHTML = findMinNumber(numbers);
};
