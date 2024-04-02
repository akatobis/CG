function getCanvasCharName(idElem) {
    const heightCharsName = 305;
    const widthCharsName = 345;

    let firstCharName = document.getElementById(idElem);
    firstCharName.height = heightCharsName;
    firstCharName.width = widthCharsName;

    let ctxCharName = firstCharName.getContext('2d');
    ctxCharName.lineCap = 'round';
    ctxCharName.lineWidth = 5;

    return ctxCharName;
}

function drawFirstCharLastName(ctxFirstCharLastName) {
    ctxFirstCharLastName.beginPath();
    ctxFirstCharLastName.moveTo(100, 25);
    ctxFirstCharLastName.lineTo(100, 300);
    ctxFirstCharLastName.lineTo(140, 300);
    ctxFirstCharLastName.lineTo(140, 100);
    ctxFirstCharLastName.lineTo(145, 100);
    ctxFirstCharLastName.lineTo(195, 300);
    ctxFirstCharLastName.lineTo(235, 300);
    ctxFirstCharLastName.lineTo(285, 100);
    ctxFirstCharLastName.lineTo(290, 100);
    ctxFirstCharLastName.lineTo(290, 300);
    ctxFirstCharLastName.lineTo(330, 300);
    ctxFirstCharLastName.lineTo(330, 25);
    ctxFirstCharLastName.lineTo(275, 25);
    ctxFirstCharLastName.lineTo(220, 210);
    ctxFirstCharLastName.lineTo(215, 210);
    ctxFirstCharLastName.lineTo(165, 25);
    ctxFirstCharLastName.lineTo(100, 25);

    ctxFirstCharLastName.fill();
    ctxFirstCharLastName.stroke();
}

function drawFirstCharFirstName(ctxFirstCharFirstName) {
    ctxFirstCharFirstName.beginPath();
    ctxFirstCharFirstName.moveTo(150, 25);
    ctxFirstCharFirstName.lineTo(50, 300);
    ctxFirstCharFirstName.lineTo(100, 300);
    ctxFirstCharFirstName.lineTo(140, 200);
    ctxFirstCharFirstName.lineTo(200, 200);
    ctxFirstCharFirstName.lineTo(250, 300);
    ctxFirstCharFirstName.lineTo(300, 300);
    ctxFirstCharFirstName.lineTo(180, 25);
    ctxFirstCharFirstName.lineTo(150, 25);

    ctxFirstCharFirstName.moveTo(150, 160);
    ctxFirstCharFirstName.lineTo(190, 160);
    ctxFirstCharFirstName.lineTo(170, 95);
    ctxFirstCharFirstName.lineTo(165, 95);
    ctxFirstCharFirstName.lineTo(150, 160);

    //ctxFirstCharFirstName.fill();
    ctxFirstCharFirstName.stroke();
}

function drawFirstCharMiddleName(ctxFirstCharMiddleName) {
    ctxFirstCharMiddleName.beginPath();
    ctxFirstCharMiddleName.moveTo(20, 25);
    ctxFirstCharMiddleName.lineTo(20, 300);
    ctxFirstCharMiddleName.lineTo(220, 300);
    ctxFirstCharMiddleName.lineTo(220, 300);
    ctxFirstCharMiddleName.lineTo(220, 245);
    ctxFirstCharMiddleName.lineTo(70, 245);
    ctxFirstCharMiddleName.lineTo(70, 185);
    ctxFirstCharMiddleName.lineTo(220, 185);
    ctxFirstCharMiddleName.lineTo(220, 130);
    ctxFirstCharMiddleName.lineTo(70, 130);
    ctxFirstCharMiddleName.lineTo(70, 80);
    ctxFirstCharMiddleName.lineTo(220, 80);
    ctxFirstCharMiddleName.lineTo(220, 25);
    ctxFirstCharMiddleName.lineTo(20, 25);

    ctxFirstCharMiddleName.fill();
    ctxFirstCharMiddleName.stroke();
}

let ctxFirstCharLastName = getCanvasCharName('first-char-last-name');
let ctxFirstCharFirstName = getCanvasCharName('first-char-first-name');
let ctxFirstCharMiddleName = getCanvasCharName('first-char-middle-name');

ctxFirstCharLastName.fillStyle = '#2acb5a';
ctxFirstCharLastName.strokeStyle = '#2acb5a';

ctxFirstCharFirstName.fillStyle = '#5A2ACB';
ctxFirstCharFirstName.strokeStyle = '#5A2ACB';

ctxFirstCharMiddleName.fillStyle = '#CB5A2A';
ctxFirstCharMiddleName.strokeStyle = '#CB5A2A';

drawFirstCharLastName(ctxFirstCharLastName);
drawFirstCharFirstName(ctxFirstCharFirstName);
drawFirstCharMiddleName(ctxFirstCharMiddleName);

