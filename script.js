
function validateName() {
    var fname = document.getElementById('name').value;
    var regx = /^([a-zA-Z]){3,}$/;

    if (regx.test(fname)) {
        document.getElementById("namevalid").style.visibility = "visible";
        document.getElementById("name").style.border = "2px solid yellow"; 
        document.getElementById("nameinvalid").style.visibility = "hidden";
    } 
    else 
    {
        document.getElementById("nameinvalid").style.visibility = "visible";
        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("namevalid").style.visibility = "hidden";
    }
}


function validateEmail()
{
    var femail=document.getElementById('email').value;
    var regx=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regx.test(femail))
    {
        
        document.getElementById("emailvalid").style.visibility="visible";
        document.getElementById("email").style.border="solid 2px  yellow";
        document.getElementById("emailinvalid").style.visibility="hidden";
        
    }
    else
    {
        
        document.getElementById("emailinvalid").style.visibility="visible";
        document.getElementById("email").style.border="solid 2px red";
        document.getElementById("emailvalid").style.visibility="hidden";
    }
}

function validatePass()
{
    var fpass=document.getElementById('pass').value;
    var regx=  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

    if(regx.test(fpass))
    {
        
        document.getElementById("passvalid").style.visibility="visible";
        document.getElementById("pass").style.border="solid 2px  yellow";
        document.getElementById("passinvalid").style.visibility="hidden";
        
    }
    else
    {
        
        document.getElementById("passinvalid").style.visibility="visible";
        document.getElementById("pass").style.border="solid 2px red";
        document.getElementById("passvalid").style.visibility="hidden";
    }
}


function validateConfpass() {
    var fconfpass = document.getElementById('confpass').value;
    var fpass = document.getElementById('pass').value;

    if (fpass !== fconfpass || fconfpass === "") 
    {
       
        document.getElementById("confpassinvalid").style.visibility = "visible";
        document.getElementById("confpass").style.border = "solid 2px red";
        document.getElementById("confpassvalid").style.visibility = "hidden";
    } 
    else
    {
        
        document.getElementById("confpassvalid").style.visibility = "visible";
        document.getElementById("confpass").style.border = "solid 2px  yellow";
        document.getElementById("confpassinvalid").style.visibility = "hidden";
    }
}



function validatePhone()
{
    var fphone=document.getElementById('phone').value;
    var regx=  /^[6-9][0-9]{9}$/;

    if(regx.test(fphone))
    {
        
        document.getElementById("phonevalid").style.visibility="visible";
        document.getElementById("phone").style.border="solid 2px  yellow";
        document.getElementById("phoneinvalid").style.visibility="hidden";
        
    }
    else
    {
        
        document.getElementById("phoneinvalid").style.visibility="visible";
        document.getElementById("phone").style.border="solid 2px red";
        document.getElementById("phonevalid").style.visibility="hidden";
    }
}


    function validateDob(){
    var dobInput=document.getElementById('dob');

    var d=new Date(dobInput.value);
    
    let CurrentDate=new Date();
    
    if(CurrentDate>d)
        {
        
            document.getElementById("dobvalid").style.visibility="visible";
            document.getElementById("dob").style.border="solid 2px  yellow";
            document.getElementById("dobinvalid").style.visibility="hidden";
            
        }
        else
        {
            
            document.getElementById("dobinvalid").style.visibility="visible";
            document.getElementById("dob").style.border="solid 2px red";
            document.getElementById("dobvalid").style.visibility="hidden";
        }
}

//checking while typing 
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("pass").addEventListener("input", validatePass);
document.getElementById("confpass").addEventListener("input", validateConfpass);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("dob").addEventListener("input", validateDob);


document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("pass").addEventListener("blur", validatePass);
document.getElementById("confpass").addEventListener("blur", validateConfpass);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("dob").addEventListener("blur", validateDob);


function validateForm() {
    validateName();
    validateEmail();
    validatePass();
    validateConfpass();
    validatePhone();
    validateDob();
    
    var invalidInputs = document.querySelectorAll('.myform input:invalid');
        if (invalidInputs.length === 0) {
            alert("Form is valid");
        } else {
            alert("Form is invalid! Please check your inputs.");
        }
    
}
document.getElementById('submitbutton').addEventListener('click', function() {
    validateForm();
    restartCountdown(); 
    location.reload();
});


var countdownDisplay = document.getElementById('count');
var countdownInterval;
        
        function startCountdown() {
            var seconds = 59;
            countdownDisplay.textContent = seconds;
            
            countdownInterval = setInterval(function() {
                seconds--;
                countdownDisplay.textContent = seconds;
                
                if (seconds === 0) {
                    clearInterval(countdownInterval);
                    restartCountdown();
                    window.location.reload();
                }
            }, 1000);
        }
        
        function restartCountdown() {
            setTimeout(function() {
                startCountdown();
            }, 1000);
        }
        
        startCountdown();

        function stopCountdown() {
            clearInterval(countdownInterval);
        }

        
        function resetMessages() {
           
        }






