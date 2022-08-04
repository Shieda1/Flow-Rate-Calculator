// https://calculator.swiftutors.com/flow-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const flowRateRadio = document.getElementById('flowRateRadio');
const flowAreaRadio = document.getElementById('flowAreaRadio');
const flowVelocityRadio = document.getElementById('flowVelocityRadio');

let flowRate;
let flowArea = v1;
let flowVelocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

flowRateRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Flow Area (m²)';
  variable2.textContent = '(v) Flow Velocity (m/s)';
  flowArea = v1;
  flowVelocity = v2;
  result.textContent = '';
});

flowAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Flow Rate (m³/s)';
  variable2.textContent = '(v) Flow Velocity (m/s)';
  flowRate = v1;
  flowVelocity = v2;
  result.textContent = '';
});

flowVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Flow Rate (m³/s)';
  variable2.textContent = '(A) Flow Area (m²)';
  flowRate = v1;
  flowArea = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(flowRateRadio.checked)
    result.textContent = `Flow Rate = ${computeFlowRate().toFixed(2)} m³/s`;

  else if(flowAreaRadio.checked)
    result.textContent = `Flow Area = ${computeFlowArea().toFixed(2)} m²`;

  else if(flowVelocityRadio.checked)
    result.textContent = `Flow Velocity = ${computeFlowVelocity().toFixed(2)} m/s`;
})

// calculation

function computeFlowRate() {
  return Number(flowArea.value) * Number(flowVelocity.value);
}

function computeFlowArea() {
  return Number(flowRate.value) / Number(flowVelocity.value);
}

function computeFlowVelocity() {
  return Number(flowRate.value) / Number(flowArea.value);
}