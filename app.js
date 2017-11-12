var body;
function login(){
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    body = document.getElementById("body");
    if(name.value ==""){
        alert("Missing name");
    }else if(password.value == ""){
        alert("Missing password");        
    }
}