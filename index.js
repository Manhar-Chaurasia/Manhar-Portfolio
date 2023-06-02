let old = document.querySelector('.my-heading');
let texts = ["Developer"];
let index = 0;
let timeout = 100; // milliseconds

function typeWriter() {
    let text = texts[index];
    let length = text.length;
    let currentText = "";

    for (let i = 0; i < length; i++) {
        setTimeout(function () {
            currentText = currentText + text[i];
            old.innerText = currentText;

            if (i === length - 1) {
                setTimeout(backspace, timeout * 2);
            }
        }, i * timeout);
    }
}

function backspace() {
    let text = texts[index];
    let length = text.length;

    for (let i = length; i >= 0; i--) {
        setTimeout(function () {
            old.innerText = text.slice(0, i);

            if (i === 0) {
                index = (index + 1) % texts.length;
                setTimeout(typeWriter, timeout);
            }
        }, (length - i) * timeout);
    }
}

typeWriter();


// ----------------------------hamburger--------------------------------

let ham = document.querySelector('.hamburger');
let cross = document.querySelector('.cross');
let menu = document.querySelector('.menu-ham');

cross.style.display = "none"; // first hiding the cross button
ham.addEventListener('click', function () {
    ham.classList.toggle('hidden'); // hiding hamburger btn when clickd
    cross.style.display = 'block'; // display cross button as soon as hamburger hidden
    menu.classList.toggle('showmenu'); // showing menu
});

cross.addEventListener('click', function () {
    ham.classList.remove('hidden'); // getting back hamburger btn
    cross.style.display = 'none'; //hiding cross btn
    menu.classList.remove('showmenu'); //hiding menu
});
