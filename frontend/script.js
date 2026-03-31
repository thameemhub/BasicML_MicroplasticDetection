async function predict() {

    let btn = document.getElementById("predictBtn");
    let loader = document.getElementById("loader");
    let resultDiv = document.getElementById("result");

    // ================= VALIDATION =================
    let inputs = ["ph","Hardness","Solids","Chloramines","Sulfate",
                  "Conductivity","Organic_carbon","Trihalomethanes","Turbidity"];

    let data = {};

    for (let id of inputs) {
        let value = document.getElementById(id).value;

        if (value === "") {
            showError(" Please fill all fields");
            return;
        }

        value = parseFloat(value);

        if (isNaN(value)) {
            showError(" Invalid number input");
            return;
        }

        data[id] = value;
    }

    // Extra validation
    if (data.ph < 0 || data.ph > 14) {
        showError(" pH must be between 0 and 14");
        return;
    }

    // ================= LOADING =================
    loader.classList.remove("hidden");
    btn.disabled = true;
    resultDiv.innerHTML = "";

    try {

        let response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });

        let result = await response.json();

        showResult(result.prediction);

    } catch (error) {
        showError(" Server error. Is backend running?");
    }

    loader.classList.add("hidden");
    btn.disabled = false;
}


// ================= RESULT DISPLAY =================
function showResult(output) {

    let resultDiv = document.getElementById("result");

    let className = "";

    if (output === "LOW") className = "low";
    if (output === "MEDIUM") className = "medium";
    if (output === "HIGH") className = "high";

    resultDiv.innerHTML = `
        <div class="${className}">
             Microplastic Level: <b>${output}</b>
        </div>
    `;
}

// ================= ERROR =================
function showError(msg) {
    document.getElementById("result").innerHTML =
        `<div class="error">${msg}</div>`;
}