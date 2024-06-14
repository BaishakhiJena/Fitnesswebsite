let btnSubmit = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnSubmit.addEvenListener('click', () => {
    inputs.forEach(input => input.value = ' ' );
});