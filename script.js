
function calculateBMI() {
  const w = parseFloat(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value) / 100;
  const bmi = w / (h * h);
  let category = "";
  if (bmi < 18.5) category = "น้ำหนักน้อย";
  else if (bmi < 25) category = "ปกติ";
  else if (bmi < 30) category = "น้ำหนักเกิน";
  else category = "อ้วน";

  document.getElementById("result").innerHTML = 
    `<p><strong>BMI:</strong> ${bmi.toFixed(2)}</p><p><strong>ผล:</strong> ${category}</p>`;
}

function calculateBMR() {
  const gender = document.getElementById("gender").value;
  const age = parseFloat(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  let bmr = 0;
  if (gender === "male") {
    bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  } else {
    bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }
  document.getElementById("bmrResult").innerHTML = 
    `<p><strong>BMR:</strong> ${bmr.toFixed(0)} kcal/วัน</p>`;
}
