// Activity 1: Using map to convert steps to HTML

// Declare the steps array
const steps = ["one", "two", "three"];

// Function to create an <li> element for each step
const listTemplate = (step) => `<li>${step}</li>`;

// Convert each step to an HTML list item using map and set the innerHTML of the <ul> element
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// Activity 2: Converting grades to GPA points

// Declare an array of letter grades
const grades = ['A', 'B', 'A'];

// Function to convert letter grade to GPA points
const gradeToGpa = (grade) => {
  if (grade === 'A') return 4;
  if (grade === 'B') return 3;
  if (grade === 'C') return 2;
  if (grade === 'D') return 1;
  return 0;
};

// Convert letter grades to GPA points using map
const gpaPoints = grades.map(gradeToGpa);
document.querySelector("#gpaResults").textContent = `GPA Points: ${gpaPoints.join(', ')}`;

// Activity 3: Calculating GPA using reduce

// Calculate total GPA by summing the GPA points and dividing by the number of grades
const totalGpaPoints = gpaPoints.reduce((total, points) => total + points, 0);
const gpa = totalGpaPoints / gpaPoints.length;
document.querySelector("#gpaResults").textContent += ` | Final GPA: ${gpa.toFixed(2)}`;

// Activity 4: Filtering fruits longer than 6 characters

// Declare an array of fruits
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// Filter fruits that have more than 6 characters
const longFruits = fruits.filter(fruit => fruit.length > 6);
document.querySelector("#filteredFruits").textContent = `Fruits longer than 6 characters: ${longFruits.join(', ')}`;

// Activity 5: Using indexOf to find a lucky number

// Declare an array of numbers and a lucky number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

// Find the index of the lucky number using indexOf
const luckyIndex = myArray.indexOf(luckyNumber);
const luckyNumberResult = luckyIndex !== -1 ? `Lucky number found at index ${luckyIndex}` : 'Lucky number not found';
document.querySelector("#luckyNumberResult").textContent = luckyNumberResult;
