const button = document.querySelector('button');
let value = button.value;
console.log(button)

button.addEventListener('click', () => alert(value))