
function local() {
    var RegUser = document.getElementById('username').value
    var RegPass = document.getElementById('password').value
    localStorage.setItem('Regname', RegUser)
    localStorage.setItem('Regpass', RegPass)
    window.location = 'login.html'
}



function validation(local) {
   
    const User = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const Pass = document.getElementById('password').value.trim();
    const Cpass = document.getElementById('password1').value.trim();
    // console.log(Pass);
    // console.log(Cpass);
    if (User == "") {
        return false
    }
    else if (email == "") {
        return false
    }

    if (Pass !== Cpass) {
        alert('Password Not Match')
        return false
    }
    else {
        local()
        return true
    }
}

