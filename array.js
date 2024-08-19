// Initializing an Array of Grades that represents student grades:

let grades = [20, 30, 40, 50, 60, 70, 80] 

// Using push to add a grade to the end of the array.

grades.push(90);
console.log();

// Using pop to remove the last grade from the array.
grades.pop()
console.log(grades);

// Using unshift to add a grade to the beginning of the array.
grades.unshift(10);
console.log(grades);

// Using shift to remove the first grade from the array.
grades.shift();
console.log(grades);

// Using splice to insert and remove elements at specific positions.
grades.splice(1, 3, "Grace the senior dev");
// console.log(grades);

// Using slice to create a new array containing a portion of the original array.
let newgrades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newg = newgrades.slice(1,5);
console.log(newg);

// Combine and Split Arrays:
// Using concat to merge two arrays of grades.
let grades1 = [5, 10, 15, 20, 25, 30]
let grades2 = [15, 30, 45, 60, 75, 90]
let twogrades = grades1.concat(grades2);
console.log(twogrades);

// Using join to create a string from the array of grades, separated by commas.
let joingrades = grades.join()
console.log(joingrades);

// Reverse and Sort Grades:
// Using reverse to reverse the order of grades in the array.
let newG = grades2.reverse();
console.log(newG);
// Using sort to sort the grades in ascending order.
newG.sort();
console.log(newG);

// Iterate and Transform Grades:
// Using forEach to print each grade.
let studentgrades = newG.forEach(function (number){
console.log(number);
});

// Using map to create a new array of grades, each increased by 5 points.
let studentgrades2= newG.map(function(number){
    return number*5;
})
console.log(studentgrades2);

// Filter and Analyze Grades:
// Using filter to create an array of passing grades (above 70).
let studentgrades3 = newgrades.filter(function(number){
if (number >= 70){
    return number;
} else {
    console.log(`Your score is: ${number}`)
}
    })
console.log(studentgrades3);

// Using reduce to calculate the total sum of grades.
arraygrades = [85, 92, 78, 88, 90, 67, 95]

let reducedgrades = arraygrades.reduce(function(acc, curr) {
    return acc + curr
},0)
console.log(reducedgrades);

// Using find to locate the first grade that is exactly 88.
let newgrades2 = arraygrades.find(function(number){
return number === 88
})

console.log(newgrades2);

// Using findIndex to find the index of the first grade that is below 70.
let newgrades3 = arraygrades.findIndex(function(number){
return number < 70
})
console.log(newgrades3);

// Using some to check if any grade is below 60.
let newgrades4 = arraygrades.some(function(number){
    return number < 60;
})
console.log(newgrades4); 

// Using every to check if all grades are above 50.
let newgrades5 = arraygrades.every(function(number){
    return number > 50;
})
console.log(newgrades5);

// Check for Existence:
// Using includes to check if a specific grade exists in the array.
let grades5 = arraygrades.includes(80);
console.log(grades5);
