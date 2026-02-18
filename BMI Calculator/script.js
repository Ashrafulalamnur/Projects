let result = document.querySelector("#result");
let category;
let meter;
let BMI;
function feetToMeter(feet) {
  return feet * 0.3048;
}
function calculateBMI() {
  let weight = document.querySelector("#input_weight").value;
  let feet = document.querySelector("#input_height").value;
  if (weight <= 0 || feet <= 0) {
    return (result.innerText = "Enter valid values!");
  }
  let height = feetToMeter(feet);
  BMI = weight / (height * height);
  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    category = "Normal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  result.innerText = `Your BMI is ${Math.round(BMI)}, So you are ${category}`;
}
