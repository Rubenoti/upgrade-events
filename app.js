const firstPart = document.querySelector('#btnToClick');

firstPart.addEventListener('click', function () {
    console.log('Clicked');
});

const secondPart = document.querySelector('.focus');

secondPart.addEventListener('focus', function () {
    console.log('Focused');
});

const thirdPart = document.querySelector('input');

thirdPart.addEventListener('input', function () {
    console.log('value');
});
