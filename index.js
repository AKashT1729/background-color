const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function (e) {
        console.log(e.target.id);
        const color = e.target.id;
        if (['red', 'green', 'gold', 'grey'].includes(color)) {
            body.style.backgroundColor = color;
        }
    });
})