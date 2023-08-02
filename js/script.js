function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const selectElement = document.getElementById('interested');
    const selectedValue = selectElement.value;

    if (nameValue === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    if (emailValue === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    if (selectedValue === 'default') {
        alert('Silakan pilih opsi selain "Select option"');
        return false;
    }

    var result = `Name: ${nameValue}\nEmail: ${emailValue}\nWhat you interested in are: ${selectedValue}`;
    alert(result);
    return true;

}

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();

});