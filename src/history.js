import {projectName, dropdownMenu, JS_TEXTAREA, CSS_TEXTAREA, HTML_TEXTAREA, runBtn, removeBtn, closeBtn, saveBtn} from "./selectors.js"

let LIST = ""

 




function createList (item, index){
    const li = document.createElement("li");
    const i = document.createElement("i");
    i.classList.add("bi", "bi-trash");

    li.innerText = item.name;
    li.appendChild(i);
    dropdownMenu.appendChild(li);

    li.onclick = ()=>{
        JS_TEXTAREA.value = item.js;
        CSS_TEXTAREA.value = item.css;
        HTML_TEXTAREA.value = item.html;
        runBtn.click();
    }

    i.onclick =(e)=>{
        dropdownMenu.removeChild(li);

        e.stopPropagation();

        const newList = LIST?.filter((itemX, j)=>{
            if( index !== j) return true;
        })
    
        LIST = newList;
    
        localStorage.removeItem("history");

        if(LIST !== undefined){
        localStorage.setItem("history", JSON.stringify(LIST))
        }

        updateHistory();


    }
}




function updateHistory(){
    LIST = JSON.parse(localStorage.getItem("history")) || []
    dropdownMenu.textContent = ""
    if (LIST !== [])
    LIST.map((item, index)=>{

        createList(item, index);
     
    });
}


function setState(){
    const current = JSON.parse(localStorage.getItem("currentState")) || []
    JS_TEXTAREA.value = current.js;
    HTML_TEXTAREA.value = current.html;
    CSS_TEXTAREA.value = current.css;
    runBtn.click();
}


function History(){
    updateHistory();
    saveBtn.onclick = (e)=>{
        if(projectName.value !== ""){
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-success");
        }
        
        const TEXT_MAP  = 
            {
                name: projectName.value,
                js: JS_TEXTAREA.value, 
                html: HTML_TEXTAREA.value, 
                css: CSS_TEXTAREA.value
            }


        projectName.value !== "" ? LIST.push(TEXT_MAP):null;


        localStorage.setItem("history", JSON.stringify(LIST))
        updateHistory();
    }

    closeBtn.onclick = (e)=>{
        saveBtn.classList.remove("btn-success");
        saveBtn.classList.add("btn-primary");
    }

    window.onbeforeunload = function(event)
    {
        event.preventdefault;
        localStorage.removeItem("currentState");
        const TEXT_MAP  = 
            {
                js: JS_TEXTAREA.value, 
                html: HTML_TEXTAREA.value,
                css: CSS_TEXTAREA.value
            }


        


        localStorage.setItem("currentState", JSON.stringify(TEXT_MAP))

        window.load();
    };

   
    window.addEventListener('DOMContentLoaded', (event) => {
        setState();
    });
    
    removeBtn.onclick = ()=> {
        const TEXT_MAP  = 
            {
                js: "", 
                html: "",
                css: ""
            }
        localStorage.setItem("currentState", JSON.stringify(TEXT_MAP))
        setState();
    }
}


export {History}
