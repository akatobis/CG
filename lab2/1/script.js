//region consts

const downloadImage = document.querySelector('#download-image');
const ctxDownloadImage = downloadImage.getContext("2d");
const inputSelectImage = document.querySelector('#input-select-image');
const btnSaveImage = document.querySelector('#save-image');
const btnNewImage = document.querySelector('#new-image');
const changeDraw = document.querySelector('#change-draw');

const validImageExtensions = ['png', 'jpeg', 'jpg', 'webp', 'svg'];
const extensionPng = 'png';

//endregion

//region add image
function getBase64Extension(file) {
    return file.substring("data:image/".length, file.indexOf(";base64")).toLowerCase()
}

function checkOnValidImageExtension(extension) {
    return validImageExtensions.includes(extension);
}

function checkOnPng(imageExtension) {
    return imageExtension === extensionPng;
}

function addBackgroundPngImage() {
    downloadImage.style.backgroundImage = 'url(images/png-background.jpg)'
}

function clearBackgroundPngImage() {
    downloadImage.style.backgroundImage = null;
}

function addImage(reader) {
    const imageSrc = reader.result;
    const imageExtension = getBase64Extension(imageSrc);

    const isValidExtension = checkOnValidImageExtension(imageExtension);
    if (!isValidExtension)
    {
        return;
    }

    const isPng = checkOnPng(imageExtension);
    if (isPng) {
        addBackgroundPngImage();
    } else {
        clearBackgroundPngImage();
    }

    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
        downloadImage.width = image.width;
        downloadImage.height = image.height;

        ctxDownloadImage.drawImage(image, 0, 0, image.width, image.height)
    }
}

inputSelectImage.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = () => {
        addImage(reader);
    }
    reader.readAsDataURL(event.target.files[0]);
    inputSelectImage.value = ""
})
//endregion

let isDrawingMode = false;

//region event listeners

btnSaveImage.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'img.png';
    link.href = downloadImage.toDataURL()
    link.click();
})

btnNewImage.addEventListener('click', () => {
    downloadImage.width = 960;
    downloadImage.height = 540;
    clearBackgroundPngImage();
})

changeDraw.addEventListener('click', () => {
    isDrawingMode = !isDrawingMode;
    changeDraw.innerHTML = isDrawingMode ? "Move" : "Draw";
})

let shiftX = 0;
let shiftY = 0;

downloadImage.addEventListener('mousedown', () => {
    if (isDrawingMode) {
        startDrawing();
    }
    else {
        startMove();
    }
})

downloadImage.addEventListener('mouseup', () => {
    if (isDrawingMode) {
        stopDrawing();
    }
    else {
        dragEnd();
    }
})

downloadImage.addEventListener('mouseout', () => {
    if (isDrawingMode) {
        stopDrawing();
    }
})

downloadImage.addEventListener('mousemove', () => {
    if (isDrawingMode){
        draw();
    }
    else {
        moveAt();
    }
});

//endregion

//region draw

let isDraw = false;

function startDrawing() {
    isDraw = true;

    const pageX = event.pageX;
    const pageY = event.pageY;
    const offsetX = downloadImage.offsetLeft;
    const offsetY = downloadImage.offsetTop;

    ctxDownloadImage.beginPath();
    ctxDownloadImage.moveTo(pageX - offsetX, pageY - offsetY);
}

function draw() {
    if (!isDraw) {
        return;
    }

    let x = event.pageX - downloadImage.offsetLeft;
    let y = event.pageY - downloadImage.offsetTop;

    ctxDownloadImage.strokeStyle = 'rgb(212,21,29)'
    ctxDownloadImage.lineWidth = '1';

    ctxDownloadImage.lineTo(x, y);
    ctxDownloadImage.stroke();
}

function stopDrawing() {
    isDraw = false;

    downloadImage.addEventListener('mouseover', () => {
        startDrawing();
        downloadImage.removeEventListener('mouseover', startDrawing);
    })
}

//endregion

//region drag&drop

let isMove = false;

function dragEnd() {
    downloadImage.removeEventListener('mousemove', moveAt);
    isMove = false;
}

function moveAt() {
    if (!isMove) {return;}

    const pageX = event.pageX;
    const pageY = event.pageY;

    downloadImage.style.left = pageX - shiftX + 'px';
    downloadImage.style.top = pageY - shiftY + 'px';
}

function startMove() {
    isMove = true;
    shiftX = event.clientX - downloadImage.getBoundingClientRect().left;
    shiftY = event.clientY - downloadImage.getBoundingClientRect().top;
    moveAt();

    document.onmouseleave = () => {
        if (!isDrawingMode) {
            dragEnd();
        }
    }
}

downloadImage.ondragstart = function() {
    return false;
};

//endregion