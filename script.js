      function validateForm(){ 
                    var email = document.getElementById("email").value;
                    var password = document.getElementById("password").value;
                    var error = document.getElementById("error");
                    var emaiPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if (!emailPattern.test(email)) {
                        error.innerHTML  = "invalid emnail format.";
                        return false;

                    }
                    if (email=== "user@example.com" && password === "password123")
                    {window.location.href = "dashboard.xhtml";
                return false;
            }else{
                error.innerHTML = "Invalid username or password.";
            return false;
        }    
    }