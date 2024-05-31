const boxes = document.getElementsByClassName('content-box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        boxes[i].classList.toggle('clicked')
    })
}