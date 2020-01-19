function checkValue(){
    /*
    Funkcja sprawdza czy wszystkie pola wymagane w formularzu na stronie rejestracji, bez dodatkowych kryteriów są uzupełnione (nie są puste).
    */
    var form = document.forms[0];
    if(
        (form["nameUser"].value != "" && form["nameUser"].value != null) &&
        (form["surname"].value != "" && form["surname"].value != null) &&
        (form["city"].value != "" && form["city"].value != null) &&
        (form["street"].value != "" && form["street"].value != null) &&
        (form["building"].value != "" && form["building"].value != null) &&
        (form["postoffice"].value != "" && form["postoffice"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkLoginNotNull(){
    /*
    Funkcja sprawdza czy pole "login" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["login"].value != "" && form["login"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkLoginSize(){
    /*
    Funkcja sprawdza czy pole "login" na stronie rejestracji ma więcej niż 3 znaki.
    */
    var form = document.forms[0];
    if(
        (form["login"].value.length >= 3)
    ){
        return true;
    }else{
        return false;
    }
}

function checkLogin(){
    /*
    Funkcja sprawdza czy pole "login" na stronie rejestracji jest wypełnione poprawnie.
    */
    if(
        checkLoginNotNull() && checkLoginSize()
    ){
        return true;
    }else{
        return false;
    }
}

function checkPESELNotNull(){
    /*
    Funkcja sprawdza czy pole "Pesel" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["Pesel"].value != "" && form["Pesel"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkPESELSize(){
    /*
    Funkcja sprawdza czy pole "Pesel" na stronie rejestracji ma 11 znaków.
    */
    var form = document.forms[0];
    if(
        (form["Pesel"].value.length == 11)
    ){
        return true;
    }else{
        return false;
    }
}

function checkPESEL(){
    /*
    Funkcja sprawdza czy pole "Pesel" na stronie rejestracji jest wypełnione poprawnie.
    */
    if(
        checkPESELNotNull() && checkPESELSize()
    ){
        return true;
    }else{
        return false;
    }
}

function checkEmailNotNull(){
    /*
    Funkcja sprawdza czy pole "email" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["email"].value != "" && form["email"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkEmailOK(){
    /*
    Funkcja sprawdza czy pole "email" na stronie rejestracji zawiera znak "@".
    */
    var form = document.forms[0];
    if(
        (form["email"].value.indexOf('@') != -1)
    ){
        return true;
    }else{
        return false;
    }
}

function checkEmail(){
    /*
    Funkcja sprawdza czy pole "email" na stronie rejestracji jest wypełnione poprawnie.
    */
    if( checkEmailNotNull() && checkEmailOK() ){
        return true;
    }else{
        return false;
    }
}

function checkPasswordNotNull(){
    /*
    Funkcja sprawdza czy pole "npassword" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["npassword"].value != "" && form["npassword"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkRep_PasswordNotNull(){
    /*
    Funkcja sprawdza czy pole "rep_password" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["rep_password"].value != "" && form["rep_password"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkPasswordSize(){
    /*
    Funkcja sprawdza czy pole "npassword" na stronie rejestracji ma co najmnie 7 znaków.
    */
    var form = document.forms[0];
    var valuePassword = form["npassword"].value;
    if(valuePassword.length >= 7){
        return true;
    }else{
        return false;
    }
}

function checkPasswordOK(){
    /*
    Funkcja sprawdza czy pola "npassword" i "rep_password" na stronie rejestracji są takie same.
    */
    var form = document.forms[0];
    if(form["npassword"].value === form["rep_password"].value){
        return true;
    }else{
        return false;
    }
}

function checkPassword(){
    /*
    Funkcja sprawdza czy pole "npassword" i "rep_password" na stronie rejestracji są wypełnione poprawnie.
    */
    if( checkPasswordNotNull() && checkRep_PasswordNotNull() && checkPasswordSize() && checkPasswordOK() ){
        return true;
    }else{
         return false;
    }
}

function checkKod1NotNull(){
    /*
    Funkcja sprawdza czy pole "kod1" na stronie rejestracji jest wypełnione (nie jest puste).
    */
    var form = document.forms[0];
    if(
        (form["kod1"].value != "" && form["kod1"].value != null)
    ){
        return true;
    }else{
        return false;
    }
}

function checkKod1Size(){
    /*
    Funkcja sprawdza czy pole "kod1" na stronie rejestracji ma 6 znaków.
    */
    var form = document.forms[0];
    if(
        (form["kod1"].value.length === 6)
    ){
        return true;
    }else{
        return false;
    }
}

function checkKod1OK(){
    /*
    Funkcja sprawdza czy pole "kod1" na stronie rejestracji zawiera znak "-".
    */
    var form = document.forms[0];
    if(
        (form["kod1"].value.indexOf('-') != -1)
    ){
        return true;
    }else{
        return false;
    }
}

function checkKod1(){
    /*
    Funkcja sprawdza czy pole "kod1" na stronie rejestracji jest wypełnione poprawnie.
    */
    if(
        checkKod1NotNull() && checkKod1Size() && checkKod1OK()
    ){
        return true;
    }else{
        return false;
    }
}

function checkCheckboxActive(){
    /*
    Funkcja sprawedza czy checkbox "regi" jest zaznaczony.
    */
    var form = document.forms[0];
    if(form["regul"].checked){
        return true;
    }else{
        return false;
    }
}

$(document).ready(function(){
    $(document).mouseover(function(){
        if( checkValue() && checkEmail() && checkPESEL() && checkLogin() && checkPassword() && checkKod1() && checkCheckboxActive() ){
            $("#submit").attr("disabled", false);
            $("#submit").removeClass("submitStart");
            $("#submit").addClass("button2");
        }else{
            $("#submit").attr("disabled", true);
            $("#submit").removeClass("submitHover");
            $("#submit").addClass("submitStart");

            $("#submit").removeClass("button2");
            $("#submit").removeClass("submitHover");
        }

        if(checkPESELNotNull()){
            if( !(checkPESELSize()) ){
                $("#pesel").removeClass("pesel");
                $("#pesel").addClass("peselError");
            }else{
                $("#pesel").removeClass("peselError");
                $("#pesel").addClass("pesel");
            }
        }

        if(checkEmailNotNull()){
            if( !(checkEmailOK()) ){
                $("#email").removeClass("email");
                $("#email").addClass("emailError");
            }else{
                $("#email").removeClass("emailError");
                $("#email").addClass("email");
            }
        }

        if(checkLoginNotNull()){
            if( !(checkLoginSize()) ){
                $("#login").removeClass("login");
                $("#login").addClass("loginError");
            }else{
                $("#login").removeClass("loginError");
                $("#login").addClass("login");
            }
        }

        if(checkPasswordNotNull()){
            if( !(checkPasswordSize()) ){
                $("#password").removeClass("password");
                $("#password").addClass("passwordError");
            }else{
                $("#password").removeClass("passwordError");
                $("#password").addClass("password");
            }
        }

        if(checkPasswordNotNull() && checkRep_PasswordNotNull()){
            if( !(checkPasswordOK()) ){
                $("#rep_password").removeClass("rep_password");
                $("#rep_password").addClass("rep_passwordError");
            }else{
                $("#rep_password").removeClass("rep_passwordError");
                $("#rep_password").addClass("rep_password");
            }

        }

        if(checkKod1NotNull()){
            if( !(checkKod1OK()) || !(checkKod1Size()) ){
                $("#kod1").removeClass("kod1");
                $("#kod1").addClass("kod1Error");
            }else{
                $("#kod1").removeClass("kod1Error");
                $("#kod1").addClass("kod1");
            }
        }

    })
    $("#submit").mouseover(function(){
        $("#submit").removeClass("button2");
        $("#submit").addClass("submitHover");
    });
    $("#submit").mouseout(function(){
        $("#submit").removeClass("submitHover");
        $("#submit").addClass("button2");
    });
});