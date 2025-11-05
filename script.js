const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
    const val = password.value;
    let strength = 0;

    // Increase strength for different patterns
    if (val.match(/[a-z]/)) strength++;
    if (val.match(/[A-Z]/)) strength++;
    if (val.match(/[0-9]/)) strength++;
    if (val.match(/[^a-zA-Z0-9]/)) strength++;
    if (val.length >= 8) strength++;

    // Update the UI
    switch (strength) {
        case 0:
            strengthBar.style.width = "0%";
            strengthBar.style.background = "#ddd";
            strengthText.textContent = "";
            break;
        case 1:
            strengthBar.style.width = "20%";
            strengthBar.style.background = "red";
            strengthText.textContent = "Very Weak";
            break;
        case 2:
            strengthBar.style.width = "40%";
            strengthBar.style.background = "orange";
            strengthText.textContent = "Weak";
            break;
        case 3:
            strengthBar.style.width = "60%";
            strengthBar.style.background = "yellow";
            strengthText.textContent = "Moderate";
            break;
        case 4:
            strengthBar.style.width = "80%";
            strengthBar.style.background = "#3cb371";
            strengthText.textContent = "Strong";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "#008000";
            strengthText.textContent = "Very Strong";
            break;
    }
});