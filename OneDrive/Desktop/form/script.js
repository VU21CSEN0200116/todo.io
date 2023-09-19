document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strengthIndicator = document.getElementById('password-strength');
    let strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[!@#$%^&*()]+/)) {
        strength += 1;
    }

    if (password.length >= 8) {
        strength += 1;
    }

    switch (strength) {
        case 1:
            strengthIndicator.textContent = 'Weak';
            strengthIndicator.style.color = 'red';
            break;
        case 3:
            strengthIndicator.textContent = 'Medium';
            strengthIndicator.style.color = 'orange';
            break;
        case 5:
            strengthIndicator.textContent = 'Strong';
            strengthIndicator.style.color = 'green';
            break;
        default:
            strengthIndicator.textContent = '';
    }
});
