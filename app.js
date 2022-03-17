// creat div element 
const divEl = document.createElement('div');
console.log(divEl);
// set class attribute 
divEl.setAttribute('class','main-container')
// divEl.textContent = 'container'

const div2El = document.createElement('div')
div2El.setAttribute('class','inner-container')
const spanEl = document.createElement('span');
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
inputEl.type = 'text';
const buttonEl = document.createElement('button')
buttonEl.setAttribute('class', 'submit-btn',);
buttonEl.type = 'submit';
buttonEl.name = 'button';
buttonEl.textContent = 'Click Me'
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
const value = form.elements['text'].value
console.log
// const formData = new FormData(value)
// const myObj = Object.fromEntries(formData)
// console.log(formEl)




