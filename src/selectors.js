const HTML_TEXTAREA = document.getElementById("HTML-area");
const HTML_LINE = document.getElementById("HTML-lineCounter");

const CSS_TEXTAREA = document.getElementById("CSS-area");
const CSS_LINE = document.getElementById("CSS-lineCounter");

const JS_TEXTAREA = document.getElementById("JS-area");
const JS_LINE = document.getElementById("JS-lineCounter");


const dropdownMenu = document.querySelector(".dropdown-menu")
const runBtn = document.getElementById("run")
const iframe = document.getElementById('myIframe');
const projectName = document.getElementById('projectName');
const removeBtn = document.getElementById("remove");
const closeBtn = document.getElementById("close");
const saveBtn = document.querySelector("#save");

export{
    HTML_TEXTAREA, 
    HTML_LINE, 
    CSS_TEXTAREA, 
    CSS_LINE, 
    JS_TEXTAREA, 
    JS_LINE, 
    dropdownMenu, 
    runBtn, 
    iframe, 
    projectName, 
    removeBtn, 
    closeBtn, 
    saveBtn
}