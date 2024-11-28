import { updateTicket } from "./canvas.js";
import { initializeButtons } from "./ui.js";
import { feature } from "./features.js";

const generatorMenu = document.querySelector(".generator-menu");

const buttonsMenu = document.querySelector(".control-menu");
const hwButton = document.querySelector("#hw-btn");
const chButton = document.querySelector("#ch-btn");
const nextButton = document.querySelector("#next-btn");

const saveButton = document.createElement("button");
const newTicketButton = document.createElement("button");

updateTicket(feature.src);
initializeButtons(generatorMenu, buttonsMenu, hwButton, chButton, nextButton, saveButton, newTicketButton)
