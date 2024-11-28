import { feature } from "./features.js";
import { ticket, updateTicket } from "./canvas.js";

export function initializeButtons(generatorMenu, buttonsMenu, hwButton, chButton, nextButton, saveButton, newTicketButton) {
    hwButton.addEventListener("click", () => {
        //Changes style of the Hallowen button
        hwButton.style.background = "#FF6100";
        chButton.style.background = "#EEEBDD"
        nextButton.addEventListener("focus", ()=> {
            nextButton.style.background = "#FF6100";
            nextButton.style.transition = "0.1s";
        });

        saveButton.style.background = "#FF6100";
        newTicketButton.addEventListener("focus", ()=> {
            newTicketButton.style.background = "#FF6100";
            newTicketButton.style.transition = "0.1s";
        });

        //Updates ticket features
        feature.src = "images/ticket 1/Black Orange Modern Illustrative Illustrated Ticket Halloween Party.png";
        feature.backgroundColor = "#FF6100";
        feature.title.text = "Halloween Party";
        feature.title.font = "Irish Grover";
        feature.title.fontSize = "140px";
        feature.title.fontColor = "#000000";
        feature.title.maxLettersInLine = 9;
        feature.title.letterSpacing = "8px";
        feature.title.lineHeight = 170;
        feature.title.x = 650;
        feature.title.y = 190;
            
        feature.description.text = "October 31; 2022 123 Anywhere St. At 10 Pm";
        feature.description.font = "Irish Grover";
        feature.description.fontSize = "50px";
        feature.description.fontColor = "#000000";
        feature.description.maxLettersInLine = 20;
        feature.description.letterSpacing = "4px";
        feature.description.lineHeight = 60;
        feature.description.x = 670;
        feature.description.y = 470;
    
        feature.barcodeX = 1860;
    
        //Updates ticket image
        updateTicket(feature.src);
    });
    
    chButton.addEventListener("click", () => {
        //Changes style of the Christmas button
        chButton.style.background = "#01443C"
        hwButton.style.background = "#EEEBDD"
        nextButton.addEventListener("focus", ()=> {
            nextButton.style.background = "#01443C";
            nextButton.style.transition = "0.1s";
        });
    
        saveButton.style.background = "#01443C";
        newTicketButton.addEventListener("focus", ()=> {
            newTicketButton.style.background = "#01443C";
            newTicketButton.style.transition = "0.1s";
        });
    
        //Updates ticket features
        feature.src = "images/ticket 2/Green and White Illustrative Christmas Event Ticket.png";
        feature.backgroundColor = "#01443C";
        feature.title.text = "CHRISTMAS EVENT";
        feature.title.font = "Konkhmer Sleokchher";
        feature.title.fontSize = "90px";
        feature.title.fontColor = "#01443C";
        feature.title.maxLettersInLine = 20;
        feature.title.letterSpacing = "1px";
        feature.title.lineHeight = 170;
        feature.title.x = 1000;
        feature.title.y = 220;
            
        feature.description.text = "25TH DECEMBER AT 10:00";
        feature.description.font = "Konkhmer Sleokchher";
        feature.description.fontSize = "40px";
        feature.description.fontColor = "#FFFFFF";
        feature.description.maxLettersInLine = 16;
        feature.description.letterSpacing = "4px";
        feature.description.lineHeight = 50;
        feature.description.x = 1000;
        feature.description.y = 350;
    
        feature.barcodeX = 1750;
        
        //Updates ticket image
        updateTicket(feature.src);
    });
    
    nextButton.addEventListener("click", ()=> {
        setTimeout(()=> {
            //Makes space for the editing bar
            generatorMenu.setAttribute("id", "GM-phase-2");
            ticket.setAttribute("id", "T-phase-2");
            buttonsMenu.setAttribute("id", "CM-phase-2");
        
            //Removes old buttons
            hwButton.remove();
            chButton.remove();
            nextButton.remove();
        
            //Shows the new one
            saveButton.innerHTML = "SAVE";
            newTicketButton.innerHTML = "NEW";
        
            saveButton.setAttribute("class", "control-btns");
            newTicketButton.setAttribute("class", "control-btns");
        
            buttonsMenu.append(saveButton, newTicketButton);
    
            //Sets the editing bar
            setEditingBar()
        
        }, 100);
    })
    
    saveButton.addEventListener("click", ()=> {
        downloadCanvas("ticket.png");
    });
    
    newTicketButton.addEventListener("click", ()=> {
        location.reload();
    });

    
    function setEditingBar() {
        const editingBar = document.createElement("div");
        editingBar.setAttribute("class", "editing-bar");

        //Title input
        const title = document.createElement("input");
        title.setAttribute("class", "editbar-elements");
        title.setAttribute("id", "title-input");
        title.value = feature.title.text;

        //Title size input
        const titleSize = document.createElement("select");
        titleSize.setAttribute("class", "editbar-elements");
        titleSize.setAttribute("id", "title-size-select");
        
        const titleSizeOptions = [
            { value: "option1", text: "14" },
            { value: "option2", text: "13" },
            { value: "option3", text: "12" },
            { value: "option4", text: "11" },
            { value: "option5", text: "10" },
            { value: "option6", text: "9" },
            { value: "option7", text: "8" }
        ];

        titleSizeOptions.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.text;
            titleSize.appendChild(option);
        });



        //Description input
        const description = document.createElement("input");
        description.setAttribute("class", "editbar-elements");
        description.setAttribute("id", "description-input");
        description.value = feature.description.text;

        //Description size input
        const descriptionSize = document.createElement("select");
        descriptionSize.setAttribute("class", "editbar-elements");
        descriptionSize.setAttribute("id", "description-size-select");

        const descriptionSizeOptions = [
            { value: "option1", text: "6" },
            { value: "option2", text: "5" },
            { value: "option3", text: "4" }
        ];
        
        descriptionSizeOptions.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.text;
            descriptionSize.appendChild(option);
        });



        //Font input
        const font = document.createElement("select");
        font.setAttribute("id", "fontOptions");
        font.setAttribute("class", "editbar-elements");

        const fontOptions = [
            { value: "option1", text: "Irish Grover" },
            { value: "option2", text: "Konkhmer Sleokchher" }
        ];

        fontOptions.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.text;
            font.appendChild(option);
        });

        //Font color input
        const fontColorContainer = document.createElement("div");
        fontColorContainer.setAttribute("id", "font-color-container");
        fontColorContainer.setAttribute("class", "editbar-elements");

        const fontColor = document.createElement("input");
        fontColor.setAttribute("type", "color");
        fontColor.setAttribute("class", "font-color-select")

        const fontColorImg = document.createElement("img");
        fontColorImg.src = "images/A.png";
        fontColorImg.setAttribute("class", "font-color-img")

        fontColorContainer.append(fontColor, fontColorImg);


        
        //Background color input
        const backgroundColorContainer = document.createElement("div");
        backgroundColorContainer.setAttribute("id", "background-color-container");
        backgroundColorContainer.setAttribute("class", "editbar-elements");

        const backgroundColor = document.createElement("input");
        backgroundColor.setAttribute("type", "color");
        backgroundColor.setAttribute("class", "background-color-select")

        const backgroundColorImg = document.createElement("img");
        backgroundColorImg.src = "images/background-color-icon.png";
        backgroundColorImg.setAttribute("class", "background-color-img")
        
        const backgroundColorText = document.createElement("p");
        backgroundColorText.setAttribute("class", "background-color-text");
        backgroundColorText.innerHTML = "BACKGROUND COLOR";

        backgroundColorContainer.append(backgroundColor, backgroundColorImg);



        //Makes vertical lines to devide the editing bar inputs by sections
        const line1 = document.createElement("div");
        line1.setAttribute("class", "lines-between");
        const line2 = document.createElement("div");
        line2.setAttribute("class", "lines-between");
        const line3 = document.createElement("div");
        line3.setAttribute("class", "lines-between");
        const line4 = document.createElement("div");
        line4.setAttribute("class", "lines-between");


        //Changes the firts size option to fit the real text size on ticket
        if (feature.backgroundColor === "#FF6100") descriptionSize.value = "option2";
        else {
            titleSize.value = "option6";
            descriptionSize.value = "option3"
            font.value = "option2";
        }

        //Shows the editing bar
        editingBar.append(title, titleSize, line1);
        editingBar.append(description, descriptionSize, line2);
        editingBar.append(font, fontColorContainer, line3);
        editingBar.append(backgroundColorContainer, backgroundColorText);
                        
        generatorMenu.appendChild(editingBar);

        setEditingBarUpdates(title, titleSize, description, descriptionSize, font, fontColor, backgroundColor);
    }

    //Updates the ticket whenever the user makes changes
    function setEditingBarUpdates(title, titleSize, description, descriptionSize, font, fontColor, backgroundColor) {
        title.addEventListener("input", () => {
            feature.title.text = title.value;
            updateTicket(feature.src);
        });

        titleSize.addEventListener("change", () => {
            feature.title.fontSize = titleSize.options[titleSize.selectedIndex].text + "0px";
            updateTicket(feature.src);
        });

        description.addEventListener("input", () => {
            feature.description.text = description.value;
            updateTicket(feature.src);
        });

        descriptionSize.addEventListener("change", () => {
            feature.description.fontSize = descriptionSize.options[descriptionSize.selectedIndex].text + "0px";
            updateTicket(feature.src);
        });

        font.addEventListener("change", () => {
            feature.title.font = font.options[font.selectedIndex].text;
            feature.description.font = font.options[font.selectedIndex].text;
            updateTicket(feature.src);
        });

        fontColor.addEventListener("change", () => {
            if (feature.backgroundColor === "#01443C") feature.title.fontColor = fontColor.value;
            else {
                feature.title.fontColor = fontColor.value;
                feature.description.fontColor = fontColor.value;
            }

            updateTicket(feature.src);
        });

        backgroundColor.addEventListener("change", () => {
            feature.backgroundColor = backgroundColor.value;
            feature.backgroundColor = backgroundColor.value;
            updateTicket(feature.src);
        });
    }

    function downloadCanvas(fileName) {
        const image = ticket.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = fileName;

        link.click();
    }

}
