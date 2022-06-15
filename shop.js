let heading = document.querySelector('.display')
let adding = document.querySelector('.btn1')
let minusing = document.querySelector('.btn2')



let ozgaruvchi =0
adding.addEventListener('click', function(){
    ozgaruvchi=ozgaruvchi-1;
    displaying();
});



minusing.addEventListener('click', function(){
    ozgaruvchi=ozgaruvchi+1;
    displaying();
});


function displaying() {
    heading.innerHTML = ozgaruvchi;
}
