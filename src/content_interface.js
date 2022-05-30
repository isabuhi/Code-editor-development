import{HTML_TEXTAREA, JS_TEXTAREA, CSS_TEXTAREA,runBtn,iframe} from "./selectors"

function updateIframe(iframe, CONTENT_FINAL){
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(CONTENT_FINAL());
    iframe.contentWindow.document.close();
}
function CONTENT_FINAL (){return '<div>' + HTML_TEXTAREA.value + '</div>' + '<style>' + CSS_TEXTAREA.value + '</style>' +'<script language="javascript">' + JS_TEXTAREA.value + '</script>'}

export default function contentInterface(){
    document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      updateIframe(iframe, CONTENT_FINAL);
    }
    });


    runBtn.onclick = () =>{
        updateIframe(iframe, CONTENT_FINAL);
    }



}







 

























