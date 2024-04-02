const truck = document.querySelector('.truck');

truck.addEventListener('mousedown', (event) => {

    let shiftX = event.clientX - truck.getBoundingClientRect().left;
    let shiftY = event.clientY - truck.getBoundingClientRect().top;

    truck.style.position = 'absolute';

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        truck.style.left = pageX - shiftX + 'px';
        truck.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);


    truck.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
        truck.onmouseup = null;
    })
});

truck.ondragstart = () => {
    return false;
};

