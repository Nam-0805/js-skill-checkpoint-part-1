// Question #3
let userPassword = " ";

function checkPasswordStrength (userPassword) {
    for (let password in userPassword) {
    if (password > 10) {
        userPassword = "Strong"; 
    }
    else if ( password > 5 ) {
        userPassword = "Medium";
    }
    else {
        userPassword = "Weak";
    }
  }
   return userPassword;
};

console.log(checkPasswordStrength(userPassword));


