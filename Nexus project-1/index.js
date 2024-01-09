function showSignup() {
    document.getElementById('loginBox').classList.add('slide-out');
    setTimeout(() => {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('loginBox').classList.remove('slide-out');
        document.getElementById('signupBox').classList.add('slide-in');
        document.getElementById('signupBox').style.display = 'block';
    }, 500);
}

function showLogin() {
    document.getElementById('signupBox').classList.add('slide-out');
    setTimeout(() => {
        document.getElementById('signupBox').style.display = 'none';
        document.getElementById('signupBox').classList.remove('slide-out');
        document.getElementById('loginBox').classList.add('slide-in');
        document.getElementById('loginBox').style.display = 'block';
    }, 500);
}

function validateSignupForm() {
    var username = document.getElementById('user-su').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('pwd').value;
    var confirmPassword = document.getElementById('confirmPwd').value;
    var rememberCheckbox = document.getElementById('remember');

    document.getElementById('pwdError').textContent = '';
    document.getElementById('confirmPwdError').textContent = '';

    if(username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return false;
    }

    if(name.length === 0) {
        alert('Name cannot be empty.');
        return false;
    }

    if(password.length > 6) {
        document.getElementById('pwdError').textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    if(confirmPassword !== password) {
        document.getElementById('confirmPwdError').textContent = 'Passwords do not match. Please try again.';
        return false;
    }

    if (!rememberCheckbox.checked) {
        alert('Please agree to the Terms and Conditions.');
        return false;
    }

    console.log('Signup successful!');
    return true;
}