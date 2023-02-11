const dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

const el = document.querySelector('h1');
const btn = document.querySelector('.button');

const colors = [
    '#f44336','#e91e63','#9c27b0',
    '#673ab7','#3f51b5','#2196f3',
    '#03a9f4','#00bcd4','#009688',
    '#4caf50','#8bc34a','#cddc39',
    '#ffeb3b','#ffc107','#ff9800',
    '#ff5722','#795548','#9e9e9e',
    '#607d8b'
];

const ranString = (amt) => {
    let string = '';
    for(let i = 0; i < amt; i++) {
        string += dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    return string;
}

const init = (str) => {
    let count = str.length;
    let delay = 10;

    el.innerHTML = '';

    const gen = setInterval(function() {
        el.setAttribute('data-before', ranString(count));
        el.setAttribute('data-after', ranString(count));
        console.log(el);
        for(let i=0; i<count; i++) {
            el.style.color = colors[i];
        }
        if(delay > 0) {
            delay--;
        }
        else {
            if(count < str.length) {
                el.innerHTML += str[str.length - count-1];
            }
            count--;
            if(count === -1) {
                el.style.color = 'white';
                clearInterval(gen);
            }}
    }, 32);
}

window.onload(init('hihihihi'));
