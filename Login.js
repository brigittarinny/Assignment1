var exampleInputEmail1 = document.getElementById('exampleInputEmail1');
var signuppwd = document.getElementById('exampleInputPassword1');

var signupemaillabel = document.getElementById('signupemaillabel');
var signuppwdlabel = document.getElementById('signuppwdlabel');


function validatelogin(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    var x = regexp.test(exampleInputEmail1.value);

    if(exampleInputEmail1.value.trim()=="" || signuppwd.value.trim()=="") {

        alert("Ensure all fields are entered");
    
                    if(exampleInputEmail1.value.trim()==""){
                    signupemaillabel.innerHTML = "<p><i>Field is empty</i></p>";
                    signupemaillabel.style.color = "red";
                            return false;
                        }
                                                
                          if(signuppwd.value.trim()==""){
                            signuppwdlabel.innerHTML = "<p><i>Field is empty</i></p>";
                            signuppwdlabel.style.color = "red";
                                    return false;}
                                    
                        } 
        
                else if(x == false){
                    
                        signupemaillabel.innerHTML = "<p><i>Enter valid Email address</i></p>";
                        signupemaillabel.style.color = "red";
                        return false;
                    }
    
    else {
        return true;
    }
    }

