// Fresquently asked questions
const questions = document.querySelectorAll('.question')

questions.forEach(item=>{
    item.addEventListener('click', openAccordion)
})

function openAccordion(e){
    if(e.target.classList.contains('ques_btn')){
        e.target.classList.toggle('display')
    }

    if(e.target.classList.contains('display')){
        e.target.nextElementSibling.style.maxHeight = 'none';
    } else{
        e.target.nextElementSibling.style.maxHeight = '0';
    }
}

// Customers quotes
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const quotes = document.querySelectorAll('.quote')

rightArrow.addEventListener('click', nextQuote);
leftArrow.addEventListener('click', prevQuote);

function nextQuote(){
    const activeQuote = document.querySelector('.active')
    activeQuote.classList.remove('active');
    if(activeQuote.nextElementSibling){
        activeQuote.nextElementSibling.classList.add('active');
    } else {
        quotes[0].classList.add('active')
    }
}
function prevQuote(){
    const activeQuote = document.querySelector('.active')
    activeQuote.classList.remove('active');
    if(activeQuote.previousElementSibling){
        activeQuote.previousElementSibling.classList.add('active');
    } else {
        quotes[quotes.length-1].classList.add('active')
    }
}

// Price Plan
const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');

checkbox.addEventListener('change', showPlan);

function showPlan(){
    label.classList.toggle('active')
    checkbox.classList.toggle('active')
    displayPrice();
}

function displayPrice(){
    const prices = document.querySelectorAll('.price');

    prices.forEach(item=>{
        item.classList.toggle('selected__price')
    })
}