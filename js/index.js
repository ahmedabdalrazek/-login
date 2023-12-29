var loginMail = document.querySelector('#loginMail');
var passwordLogin =loginMail.nextElementSibling;
var loginBtn = passwordLogin.nextElementSibling;
var userContainer;
if(localStorage.getItem('userContainer')){
    userContainer = JSON.parse(localStorage.getItem('userContainer'));
}else{
    userContainer = [];
}
var registerName = document.querySelector('#registerName');
var registerEmail = registerName.nextElementSibling;
var registerPassword = registerEmail.nextElementSibling;
var registerBtn = registerPassword.nextElementSibling;

registerBtn.addEventListener('click', function(eventInfo){
    var regexTest = /^[A-Za-z]{16,25}@[A-Za-z]{6,10}.com$/
    if(regexTest.test(registerEmail.value)){
    var user ={
        username: registerName.value,
        useremail:registerEmail.value,
        password:registerPassword.value
    }
    userContainer.push(user);
    localStorage.setItem('userContainer', userContainer);
    registerName.value = '';
    registerEmail.value = '';
    registerPassword.value = '';
}
});
loginBtn.addEventListener('click',function(){
    for(var i = 0; i < userContainer.length; i++){
        if(userContainer[i].useremail.includes(registerEmail.value)){
            alert('log in as ' + userContainer[i].useremail.value + ' is successfully');
            alert('wellcom '+userContainer[i].username.value)
        }
    }
});