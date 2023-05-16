function upArrowPressed() {
    let element = document.getElementById("myImage");
    element.style.top = parseInt(element.style.top) - 30 + 'px';
}

function downArrowPressed() {
    let element = document.getElementById("myImage");
    element.style.top = parseInt(element.style.top) + 30 + 'px';
}

function lefArrowPressed() {
    let element = document.getElementById("myImage");
    element.style.left = parseInt(element.style.left) - 30 + 'px';
}

function rightArrowPressed() {
    let element = document.getElementById("myImage");
    element.style.left = parseInt(element.style.left) + 30 + 'px';
}

function  moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            lefArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}