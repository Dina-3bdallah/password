function check() {

    let res = document.getElementById("result");
    // get password value
    let pss = document.getElementById("password").value;
    // get password length
    let psslen = pss.length;
    // get confirm password value
    let confpss = document.getElementById("confpassword").value;
    // if two values are match 
    if(pss === confpss){
        // massage if they match
        res.innerHTML = `password matches and password length is ${psslen}`;
    }
    // if two values are not match 
    else{
        // message if they don't match
        res.innerHTML = `password does not matches`;
    }
    // if any of inputs empty
    if (pss === "" || confpss === ""){
        // message if they empty
        res.innerHTML = `please fill the inputs!`
    }
    
}
