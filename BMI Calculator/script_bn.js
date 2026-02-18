let result = document.querySelector("#result_bn");
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
    return (result.innerText = "সঠিক সংখ্যা দিন!");
  }
  let height = feetToMeter(feet);
  BMI = weight / (height * height);
  if (BMI < 18.5) {
    category = "স্বাভাবিক থেকে কম";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    category = "";
  } else if (BMI >= 25 && BMI <= 29.9) {
    category = "থেকে বেশী";
  } else {
    category = "অনেক বেশী";
  }
  result.innerText = `আপনার বিএমআই হলো ${Math.round(
    BMI
  )}, সুতরাং আপনার ওজন স্বাভাবিক ${category}`;
}
