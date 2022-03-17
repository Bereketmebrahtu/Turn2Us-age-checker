// creat div element 
const divEl = document.createElement('div');
console.log(divEl);
// set class attribute 
divEl.setAttribute('class','main-container')
// divEl.textContent = 'container'

const div2El = document.createElement('div')
div2El.setAttribute('class','inner-container')
const spanEl = document.createElement('span');
const h2El = document.createElement('h2')
console.log(h2El)
h2El.textContent = "Welcome to Turn2Us"
const h4El = document.createElement('h4')
h4El.textContent = "Enter your age to get started"
spanEl.appendChild(h2El);
spanEl.appendChild(h4El);
spanEl.setAttribute('class', 'text')
spanEl.textContent = ''
div2El.appendChild(spanEl);
console.log(spanEl);

divEl.appendChild(div2El);

// create a form element
const form = document.createElement('form')
console.log(form);
form.setAttribute('class', 'super-form');
divEl.appendChild(form);
const inputEl = document.createElement('input')
inputEl.name = 'text';
inputEl.type = 'date';
const buttonEl = document.createElement('button')
buttonEl.setAttribute('class', 'submit-btn',);
buttonEl.type = 'submit';
buttonEl.name = 'button';
buttonEl.textContent = 'Submit'
form.appendChild(buttonEl);
console.log(buttonEl)

div2El.appendChild(form)

form.appendChild(inputEl);
const sectionEl = document.querySelector('.form-section')
sectionEl.appendChild(divEl);
sectionEl.appendChild(div2El)
// const value = formEl.elements['text'].value;
// console.log(value)
// console.log(value);

// 

// grab input value
// filter through input to check for age validity 
// display success/ illegibility message 

// const formEl = document.querySelector('input')
// console.log(formEl)

console.log

function ageChecker() {
    
    const valueEl = form.elements['text'].value


if (valueEl > 18) {

    window.location.href ="/success.html";
}

else {
    window.location.href = "/error.html";
}
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    ageChecker()

})

