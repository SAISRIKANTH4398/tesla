const formValidate = () => {
    const username = document.getElementById('username').value
    const mobileNumber = document.getElementById('mobile').value
    const emailId = document.getElementById('email').value
    const zipCode = document.getElementById('zipCode').value

    let nameError = document.getElementById('nameError');
    let mobileError = document.getElementById('mobileError');
    let emailError = document.getElementById('emailError');
    let zipError = document.getElementById('zipError');

    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
    let zipStatus = false;

    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]{10}$/;
    const zipExp = /^[0-9]{6}$/;
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(username === ''){
        nameError.textContent = 'Please Enter Your Name'
    }else{
        if(username.match(alphaExp)){
            nameError.textContent = ''
            nameStatus = true
        }else{
            nameError.textContent = 'Name should only contain Alphabet'
        }
    }

    if(mobileNumber==''){
        mobileError.textContent = "Please Enter Mobile Number"
    }else{
        if(mobileNumber.match(numExp)){
            mobileError.textContent = ''
            mobileStatus = true
        }else{
            mobileError.textContent = "Mobile Number should contain 10 digits "
        }
    }

    if(zipCode==''){
        zipError.textContent = "Please Enter ZIP CODE"
    }else{
        if(zipCode.match(zipExp)){
            zipError.textContent = ''
            zipStatus = true
        }else{
            zipError.textContent = "ZIP CODE should contain 6 digits"
        }
    }

    if(emailId == ''){
        emailError.textContent = 'Please Enter EmailID'
    }else{
        if(emailId.match(emailExp)){
            emailError.textContent = ''
            emailStatus = true
        }else{
            emailError.textContent = 'Please enter a valid email id'
        }
    }


    if(nameStatus && mobileStatus && zipStatus && emailStatus){
        return true
    }else{
        return false
    }

}