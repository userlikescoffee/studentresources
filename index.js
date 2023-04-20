const time=document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
learn=document.getElementById('learn'),
openModelButton=document.querySelector('[data-model-target]'),
closeModelButton=document.querySelector('[data-close-button]'),
overlay=document.getElementById('overlay');

function ShowTime(){
    let today= new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    const ampm= hour >=12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;
    time.innerHTML=`${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)}`;
    setTimeout(ShowTime,1000);

}
function addzero(n){
    return (parseInt(n,10)< 10? '0': '')+n;

}

function backcolour() {
    let today= new Date(),
    hour = today.getHours();
    if( hour < 12){
        document.body.style.backgroundImage="url('../img/morning.jfif')";
        greeting.textContent=' good morning ! make a productive day';}
        else if(hour < 18){
            document.body.style.backgroundImage="url('../img/af.jfif')";
            greeting.textContent=' good afternoon ! take a meal and have some action :)';
        }
        else {
            document.body.style.backgroundImage="url('../img/night.jfif')";
            greeting.textContent='good evening! you know what great thing happen at night ;)';
            document.body.style.color='white';
        }
    }
    
    function getName(){
        if(localStorage.getItem('name')==null){
            name.textContent= '[enter your name]';
            
        }
        else {
            name.textContent = localStorage.getItem('name');
        }
    }



    function getlearn(){
        if(localStorage.getItem('learn')==null){
            learn.textContent = '[enter what you want to learn]';
            
        }
        else {
            learn.textContent = localStorage.getItem('learn');
        }
    }

ShowTime();
backcolour();
getName();
getlearn();
openModelButton.forEach(button=>{
    button.addEventListener('click',()=>{
        const model= document.querySelector(button.dataset.modeltarget)
        openModel(model)
    })
})
overlay.addEventListener('click',()=>{
    const models=document.querySelectorAll('.model.active')
    models.forEach(model=>{
    closeModel(model)
})
})
closeModelButton.forEach(button=>{
    button.removeEventListener('click',()=>{
        const model = button.closest('.model')
        closeModel(model)
    })
})

function openModel(model){
    if(model==null) return
    model.classList.add('active')
    overlay.classList.add('active')
}
function closeModel(model){
    if(model==null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
}



