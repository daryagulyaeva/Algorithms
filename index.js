document.getElementById("form1_add").onclick = function () {
  let numbers = document.getElementById("form1_numbers").value;
  viewResult(
    form1_findMaxNumber(numbers),
    "form1_resultMax",
    "form1_resultMin"
  );
};

const form1_findMaxNumber = (array) => {
  let arr = array.split(",");
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(count) < parseInt(arr[i])) {
      count = arr[i];
    }
  }
  return count;
};
const form1_findMinNumber = (array) => {
  let arr = array.split(",");
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(count) > parseInt(arr[i])) {
      count = arr[i];
    }
  }
  return count;
};

document.getElementById("form2_add").onclick = function () {
  let form2_number = document.getElementById("form2_numbers").value;
  viewResult(
    form2_findMaxNumber(form2_number),
    "form2_resultMax",
    "form2_resultMin"
  );
};

const form2_findMaxNumber = (array) => {
  let arr = array.split(",");
  let sortedArray = convertStringToNumbers(arr).sort(function (a, b) {
    return a - b;
  });

  let obj = {
    max: sortedArray[sortedArray.length - 2],
    min: sortedArray[1],
  };
  return obj;
};

const convertStringToNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
};

const viewResult = (data, idMax, idMin) => {
  if (data instanceof Object) {
    document.getElementById(idMax).innerHTML = data.max;
    document.getElementById(idMin).innerHTML = data.min;
  } else {
    document.getElementById(idMax).innerHTML = form1_findMaxNumber(data);
    document.getElementById(idMin).innerHTML = form1_findMinNumber(data);
  }
};
