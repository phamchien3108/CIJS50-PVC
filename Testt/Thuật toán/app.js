console.log(`Bai 1`);

function arrsolve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
      }
    }
  }
  arr1 = arr1.concat(arr2);
  return arr1;
}
console.log(arrsolve(["y", "x", "a", 1], [1, "x", "b"]));

console.log(`
Bai 2
`);
function sortgoal(arr) {
  arr.sort((a, b) => {
    return b.points - a.points;
  });
  arr.sort((a, b) => {
    return b.GD - a.GD;
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i].position = i + 1;
  }

  console.log(arr);
}

sortgoal([
  {
    name: "Arsenal",
    points: 99,
    GD: 45,
  },
  {
    name: "Chelsea",
    points: 75,
    GD: 39,
  },
  {
    name: "MU",
    points: 60,
    GD: 29,
  },
  {
    name: "Liver",
    points: 99,
    GD: 43,
  },
]);
