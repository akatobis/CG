const btnDrawCircle = document.querySelector(".button-draw-circle");

const body = document.querySelector("body");

const inputCircleCoordinateX = document.querySelector("#circle-coordinate-x");
const inputCircleCoordinateY = document.querySelector("#circle-coordinate-y");
const inputCircleRadius = document.querySelector("#circle-radius");
const inputCircleColorR = document.querySelector("#circle-color-r");
const inputCircleColorG = document.querySelector("#circle-color-g");
const inputCircleColorB = document.querySelector("#circle-color-b");

function createCircleCanvas(circleRadius, circleCoordinateX, circleCoordinateY) {
    const circle = document.createElement('canvas');
    body.appendChild(circle);

    circle.style.position = 'absolute';
    circle.style.top = circleCoordinateY - circleRadius + 'px';
    circle.style.left = circleCoordinateX - circleRadius + 'px';

    circle.width = circleRadius * 2;
    circle.height = circleRadius * 2;

    return circle.getContext("2d");
}

function drawPixel(canvasData, canvasWidth, x, y, r, g, b) {
    const index = (x + y * canvasWidth) * 4;

    canvasData.data[index] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = 255;
}

function updateCanvas(ctx, canvasData) {
    ctx.putImageData(canvasData, 0, 0);
}

function addCircleToCanvasDate(canvasData, circleRadius, r, g, b) {
    const dotBeginDraw = -Math.round(circleRadius * Math.sqrt(2) / 2);
    const dotEndDraw = -dotBeginDraw;

    for (let i = dotBeginDraw; i <= dotEndDraw; i = i + 1) {
        let x = Math.round(i) + circleRadius-10;
        let y = Math.round(Math.sqrt(Math.pow(circleRadius, 2) - Math.pow(i, 2))) + circleRadius;
            console.log(x + ' ' + y)
        drawPixel(canvasData, circleRadius * 2, x, y, r, g, b);
        // drawPixel(canvasData, circleRadius * 2, -(circleRadius - (x - circleRadius)), (circleRadius - (y - circleRadius)), r, g, b);
        // drawPixel(canvasData, circleRadius * 2, (circleRadius - (x - circleRadius)), (circleRadius - (y - circleRadius)), r, g, b);
        // drawPixel(canvasData, circleRadius * 2, -x, y, r, g, b);
    }
}

btnDrawCircle.addEventListener('click', () => {
    const circleCoordinateX = inputCircleCoordinateX.value;
    const circleCoordinateY = inputCircleCoordinateY.value;
    const circleRadius = 100//inputCircleRadius.value;
    const circleColorR = inputCircleColorR.value;
    const circleColorG = inputCircleColorG.value;
    const circleColorB = inputCircleColorB.value;

    // let ctxCircle = createCircleCanvas(circleRadius, circleCoordinateX, circleCoordinateY);
    // let ctxCircleData = ctxCircle.getImageData(circleCoordinateX, circleCoordinateY, circleRadius * 2, circleRadius * 2)
    let ctxCircle = createCircleCanvas(circleRadius, 500, 300);
    let ctxCircleData = ctxCircle.getImageData(500, 300, circleRadius * 2, circleRadius * 2)

    //addCircleToCanvasDate(ctxCircleData, circleRadius, circleColorR, circleColorG, circleColorB);
    addCircleToCanvasDate(ctxCircleData, circleRadius, 0, 0, 0);

    updateCanvas(ctxCircle, ctxCircleData);
})