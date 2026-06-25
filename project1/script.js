let buttons=document.querySelectorAll(".button");
let body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(el){
        if(el.target.id==='grey'){
            body.style.backgroundColor= el.target.id;
        } 
        if(el.target.id==='white'){
            body.style.backgroundColor= el.target.id;
        } 
        if(el.target.id==='blue'){
            body.style.backgroundColor= el.target.id;
        } 
        if(el.target.id==='yellow'){
            body.style.backgroundColor= el.target.id;
        } 
        if(el.target.id==='brown'){
            body.style.backgroundColor= el.target.id;
        } 
        if(el.target.id==='green'){
            body.style.backgroundColor= el.target.id;
        } 
    });
});