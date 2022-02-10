document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    // get user password
    const passFeild = document.getElementById('user-password');
    const userPassword = passFeild.value;


    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid user');
    }

})

// event handler for deposit
