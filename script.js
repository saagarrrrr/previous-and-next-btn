const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const number = document.querySelectorAll('.number')


let currentStep = 1;

prev.disabled=true;

next.addEventListener("click", ()=>{
    currentStep++;
    prev.disabled = false;
    if(currentStep == number.length){
        next.innerHTML = "Submit";
        
    }
    else if (currentStep > number.length){
        currentStep = number.length;
    }
    updateCircle();
})

prev.addEventListener('click', ()=>{
    currentStep--;
    next.innerHTML="Next"
    if (currentStep <=1){
        currentStep = 1;
        prev.disabled = true;
    }
    updateCircle();
})

function updateCircle(){
    
    number.forEach((numbers, index)=>{
        if(index < currentStep){
            numbers.classList.add('active');
        }
        else{
            numbers.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1) / (number.length-1) * 100 + '%';


}