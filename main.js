import styleEditors from "./src/editor.js";
import { History } from "./src/history.js";
import contentInterface from "./src/content_interface"

styleEditors();

contentInterface();

History();


document.querySelector(".minimize-btn").onclick= (e)=>{
  if(e.target.innerText === "Minimize"){
    document.querySelector(".iframe-col").classList.remove("wide");
    e.target.innerText = "Maximize";
  }
  else{
    document.querySelector(".iframe-col").classList.add("wide");
    
    e.target.innerText = "Minimize";
  }
}









