var heading1=document.getElementById('id-1');
var heading2=document.getElementById('id-2');
var heading3=document.getElementById('id-3');
var content1=document.getElementById('content-id-1');
var content2=document.getElementById('content-id-2');
var content3=document.getElementById('content-id-3');
var iconColor1=document.getElementById('icon-color-1');
var iconColor2=document.getElementById('icon-color-2');
var iconColor3=document.getElementById('icon-color-3');
function contentDisplay(id){
    if(id=='id-1'){
        iconColor1.style.color='white';
        iconColor2.style.color='rgba(255, 255, 255, 0.404)';
        iconColor3.style.color='rgba(255, 255, 255, 0.404)';
        content2.style.display='none';
        content3.style.display='none';
        heading1.classList.add('utility-class-2');
        content1.style.display='flex';
        heading2.classList.remove('utility-class-2');
        heading3.classList.remove('utility-class-2');
    }
    else if(id=='id-2'){
        iconColor2.style.color='white';
        iconColor1.style.color='rgba(255, 255, 255, 0.404)';
        iconColor3.style.color='rgba(255, 255, 255, 0.404)';
        heading1.classList.remove('utility-class-2');
        heading3.classList.remove('utility-class-2');
        heading2.classList.add('utility-class-2');
        content1.style.display='none';
        content2.style.display='flex';
        content3.style.display='none'
    }
    else{
        iconColor3.style.color='white';
        iconColor1.style.color='rgba(255, 255, 255, 0.404)';
        iconColor2.style.color='rgba(255, 255, 255, 0.404)';
        heading3.classList.add('utility-class-2');
        content3.style.display='flex';
        content2.style.display='none'
        heading1.classList.remove('utility-class-2');
        heading2.classList.remove('utility-class-2');
        content1.style.display='none';
    }
}

// form code
var formButton=document.querySelectorAll('.form-btn');
var formDiv=document.querySelector('.form-div');
var myForm=document.querySelector('form');
formButton.forEach(function(button){
    button.addEventListener('click',function(){
        formDiv.style.display='block';
        formDiv.style.transition='all 2s ease-in-out'
    })
})

var closeButton=document.getElementById('cross-sign');
closeButton.addEventListener('click',function(){
    formDiv.style.display='none';
})

//form data validation
var mailId=document.getElementById('email');
var pwd=document.getElementById('pwd');
var cpwd=document.getElementById('cpwd');
myForm.addEventListener('submit',function(){
    if(mailId.value ==''){
        alert('Mail id is required to Sign up')
    }
    else if(pwd.value == ''){
        alert('Password is required to Sign up')
    }
    else if(cpwd.value == ''){
        alert('Password confirmation is required to Sign up')
    }
    else if((pwd.value.length<8) || (cpwd.value.length<8)){
        alert('Password should be minimum of 8 characters')
    }
    else if((pwd.value.length>15) || (cpwd.value.length>15)){
        alert('Password should not be greater than 15 characters')
    }
    else if(pwd.value != cpwd.value){
        alert('Password and Confirmation password are not identical')
    }
    else{
        formDiv.style.display='none';
        alert('Sign up process completed')
    }
})
