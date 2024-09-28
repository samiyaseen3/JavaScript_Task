function validateForm() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorElement = document.querySelector(".error")
  
    // Check if username is empty
    if (usernameInput.value == "") {
      errorElement.innerHTML = "Please Enter Your UserName !!"
      return false;
    }
  
    // Check if password is empty
    if (passwordInput.value == "") {
      errorElement.innerHTML = "Please Enter Your Passwrod !!"
      return false;
    }
  
    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorElement.innerHTML = "Password Do Not Match !!"
      return false;
    }
  
    // If all validation passes, submit the form
    return true;
  }