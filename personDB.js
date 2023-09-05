let person;
let active;
let age;
let weight;
let growth;

const form = document.forms.main;

document.querySelector('.calculator-gender__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-gender__item').forEach(i => {
        i.classList.remove('active');
    })
    if(e.target.parentElement.closest('.calculator-gender__item')){
        e.target.parentElement.classList.add('active');
 
}})
document.querySelector('#step-1-btn').addEventListener('click', (e) =>{
    e.preventDefault()
    gender = form.gender.value;
    document.querySelector('#step-1').style.display = 'none';
    document.querySelector('#step-2').style.display = 'block';
    console.log(gender);
})

document.querySelector('.calculator-activity__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-activity__item').forEach(i => {
        i.classList.remove('active');
    })
    if(e.target.parentElement.closest('.calculator-activity__item')){
        e.target.parentElement.classList.add('active');
 
}})
document.querySelector('#step-2-btn').addEventListener('click', (e) =>{
    e.preventDefault()
    active = form.activity.value;
    document.querySelector('#step-2').style.display = 'none';
    document.querySelector('#step-3').style.display = 'block';
    console.log(active);
})

function check(param){
    if(param.validity.rangeOverflow || param.validity.rangeUnderflow){
        alert ('Вы ввели некорректные данные')
    }
    return false
}

form.age.addEventListener('blur', (e) =>{
    if(!check(e.target)){
        age = form.age.value;
    }

})
form.growth.addEventListener('blur', (e) =>{
    if(!check(e.target)){
        growth = form.growth.value;
    }

})
form.weight.addEventListener('blur', (e) =>{
    if(!check(e.target)){
        weight = form.weight.value;
    }
})

function getDailyCalory() {
    if(gender === 'man'){
        return  Math.floor((10 *weight) + (6.25 * growth) - (5 * age + 5 *active))
    }else{
        return Math.floor((10 *weight) + (6.25 * growth) - (5 * age) - 161 *active)
    }
    }


document.querySelector('#step-result').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#step-3').style.display = 'none';
    document.querySelector('.calculator-result').style.display = 'block';
    const index = Math.floor((Math.pow((weight/growth), 2))*100);
    document.querySelector('#imt-value').innerHTML = index;
    const x = getDailyCalory();
    document.querySelector('#nc').innerHTML = x;
})