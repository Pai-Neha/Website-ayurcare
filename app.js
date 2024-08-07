window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        
        result.className="error";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.className="noerror";
        result.innerText = `You are Under Weight with a bmi of: ${bmi}.\nA BMI of less than 18.5 indicates that you are underweight,So you may need to put on some weight.\nYou are recommended to ask your doctor or a dietitian for advice.`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `You are Healthy with a bmi of: ${bmi}.\nA BMI of 18.5 to 24.9 indicates that you are Healthy weight for your height.By maintaining a healthy weight, you lower your risk of developing serious problems.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `You are Over Weight with a bmi of: ${bmi}.\nA BMI of 25 to 29.9 indicates that you are slightly Overweight,You may be advised to lose some weight for health reasons.You are recommended to talk to your doctor or dietitian for advice.`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `You are Obese (Class I) with a bmi of: ${bmi}.\nA BMI of over 30 indicates that you are Heavily Overweight,Your health may be at risk if you do not lose weight.\nYou are recommended to talk to your doctor or dietitian for advice.`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `You are Obese (Class II) with a bmi of: ${bmi}.\nA BMI of over 35 is indication that you are Heavily Overweight,If you are struggling with obesity, it is highly recommended to consult with your doctor or a registered dietitian.`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}.If you find yourself in a state of extreme obesity, it is highly advisable to seek guidance from a healthcare professional or a qualified dietitian for expert advice and a tailored weight management plan.`;
    }
}