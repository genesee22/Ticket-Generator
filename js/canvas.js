import { feature } from "./features.js";

export const ticket = document.querySelector(".ticket");
const ctx = ticket.getContext("2d");
const img = new Image();

export function updateTicket(src) {
    img.src = src;
    img.onload = async ()=> {
        //The program waits until all fonts will load
        await document.fonts.load("140px 'Irish Grover'");
        await document.fonts.load("50px 'Irish Grover'");
        await document.fonts.load("90px 'Konkhmer Sleokchher'");
        await document.fonts.load("40px 'Konkhmer Sleokchher'");

        //Fits the size of canvas with the size of template image
        ticket.width = img.width;
        ticket.height = img.height;

        //Updates all changes on the ticket
        setBackgroundColor(feature.backgroundColor);
        setTitle(
            feature.title.text, 
            feature.title.font, 
            feature.title.fontSize, 
            feature.title.fontColor, 
            feature.title.maxLettersInLine, 
            feature.title.letterSpacing, 
            feature.title.lineHeight, 
            feature.title.x, 
            feature.title.y
        );
        setDescription(
            feature.description.text, 
            feature.description.font, 
            feature.description.fontSize, 
            feature.description.fontColor, 
            feature.description.maxLettersInLine, 
            feature.description.letterSpacing, 
            feature.description.lineHeight, 
            feature.description.x, 
            feature.description.y
        );
        generateBarcode(feature.barcodeX, Math.floor(Math.random()*9000000000) + 1000000000);
    }
}


function setBackgroundColor(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ticket.width, ticket.height);

    ctx.drawImage(img, 0, 0);
}

function setTitle (text, font, fontSize, fontColor, maxLettersInLine, spacing, height, x, y) {
    let lineHeight = 0;
    let lines = 0;
    for (let i = 0; i < text.length; i += maxLettersInLine) {
        if (lines < 2) {
            ctx.font = fontSize + " " + font;
            ctx.fillStyle = fontColor;
            ctx.textAlign = "center";
            ctx.letterSpacing = spacing;
            ctx.fillText(text.slice(i, i + maxLettersInLine), x, y + lineHeight);
            lineHeight += height;

            lines++;
        }
        else {
            break;
        }
    }
}

function setDescription(text, font, fontSize, fontColor, maxLettersInLine, spacing, height, x, y) {
    let lineHeight = 0;
    let lines = 0;
    for (let i = 0; i < text.length; i += maxLettersInLine) {
        if (lines < 3) {
            ctx.font = fontSize + " " + font;
            ctx.fillStyle = fontColor;
            ctx.textAlign = "center";
            ctx.letterSpacing = spacing;
            ctx.fillText(text.slice(i, i + maxLettersInLine), x, y + lineHeight);
            lineHeight += height;

            lines++;
        }
        else {
            break;
        }
    }
}

function generateBarcode(x, value) {
    const barcodeCanvas = document.createElement('canvas');

    JsBarcode(barcodeCanvas, value, {
        format: "code128",
        lineColor: "#000",
        fontSize: 30,
        width: 4,
        height: 70,
        displayValue: true,
        background: "transparent"
    });

    ctx.save();

    ctx.translate(x, ticket.height / 2 + barcodeCanvas.width / 2);

    ctx.rotate(270 * Math.PI / 180);

    ctx.drawImage(barcodeCanvas, 0, 0)
}

