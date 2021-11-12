var signupname = document.getElementById('signupname');
var exampleInputEmail1 = document.getElementById('exampleInputEmail1');
var signupmobile = document.getElementById('signupmobile');
var signuppwd = document.getElementById('exampleInputPassword1');
var signupcpwd = document.getElementById('signupcpwd');

var signupnamelabel = document.getElementById('signupnamelabel');
var signupemaillabel = document.getElementById('signupemaillabel');
var signupmobilelabel = document.getElementById('signupmobilelabel');
var signuppwdlabel = document.getElementById('signuppwdlabel');
var signupcpwdlabel = document.getElementById('signupcpwdlabel');




function validatesignup(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    var x = regexp.test(exampleInputEmail1.value);

    let regexq = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    var y = regexq.test(signupmobile.value);

    let regexr = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9\-@!#$%&?]{8,}$/
    var z = regexr.test(signuppwd.value);

    
       
if(signupname.value.trim()=="" || exampleInputEmail1.value.trim()=="" || signupmobile.value.trim()=="" || signuppwd.value.trim()=="" || signupcpwd.value.trim()=="") {

    alert("Ensure all fields are entered");

    if(signupname.value.trim()==""){
        signupnamelabel.innerHTML = "<p><i>Field is empty</i></p>";
        signupnamelabel.style.color = "red";
                return false;
            }
            if(exampleInputEmail1.value.trim()==""){
                signupemaillabel.innerHTML = "<p><i>Field is empty</i></p>";
                signupemaillabel.style.color = "red";
                        return false;
                    }
            if(signupmobile.value.trim()==""){
                signupmobilelabel.innerHTML = "<p><i>Field is empty</i></p>";
                signupmobilelabel.style.color = "red";
                        return false;
                             
                    }
                    if(signuppwd.value.trim()==""){
                        signuppwdlabel.innerHTML = "<p><i>Field is empty</i></p>";
                        signuppwdlabel.style.color = "red";
                                return false;}
                                
                    if(signupcpwd.value.trim()==""){
                        signupcpwdlabel.innerHTML = "<p><i>Field is empty</i></p>";
                        signupcpwdlabel.style.color = "red";
                                return false;
                            }
                } 
    
            else if(x == false || y == false || z == false){
                
                if (x==false) {
                    signupemaillabel.innerHTML = "<p><i>Enter valid Email address</i></p>";
                    signupemaillabel.style.color = "red";
                    return false;
                }

                if (y==false) {
                    signupmobilelabel.innerHTML = "<p><i>Enter valid mobile no.(Only formats allowed are : XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX)</i></p>";
                    signupmobilelabel.style.color = "red";
                    return false;
                }

                if (z==false) {
                    signuppwdlabel.innerHTML = "<p><i>Password criteria not met (Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number)</i></p>";
                    signuppwdlabel.style.color = "red";
                    return false;
                }

  }

else if(signuppwd.value != signupcpwd.value){
    signupcpwdlabel.innerHTML = "<p><i>Passwords not matching</i></p>";
    signupcpwdlabel.style.color = "red";
    return false;
}
else {
    return true;
}
}

function pass(){

    let poor = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9\-@!#$%&?]{8,}$/
    var a = poor.test(signuppwd.value);

    let medium = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9\-@!#$%&?]{9,}$/
    var b = medium.test(signuppwd.value);

    let strong = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[a-zA-Z0-9\-@!#$%&?]{10,}$/
    var c = strong.test(signuppwd.value);

    if(a == true){
        signuppwdlabel.innerHTML = "<p>Password Strenth : Poor</p>";
        signuppwdlabel.style.color = "red";}

        if(b == true){
            signuppwdlabel.innerHTML = "<p>Password Strenth : Medium</p>";
            signuppwdlabel.style.color = "orange";}

            if(c == true){
                signuppwdlabel.innerHTML = "<p>Password Strenth : Strong</p>";
                signuppwdlabel.style.color = "green";}
}