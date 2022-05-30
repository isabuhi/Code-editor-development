import {JS_TEXTAREA, CSS_TEXTAREA, HTML_TEXTAREA, JS_LINE, CSS_LINE, HTML_LINE} from "./selectors.js"



function styleEditor(codeEditor, lineCounter){

    var htmlTemplateStr = "";
    
    var lineCountCache = 0;
    function line_counter() {
        var lineCount = codeEditor.value.split('\n').length;
        var outarr = new Array();
        if (lineCountCache != lineCount) {
            for (var x = 0; x < lineCount; x++) {
                outarr[x] = (x + 1) + '.';
            }
            lineCounter.value = outarr.join('\n');
        }
        lineCountCache = lineCount;
    }

    codeEditor.addEventListener('scroll', () => {
        lineCounter.scrollTop = codeEditor.scrollTop;
        lineCounter.scrollLeft = codeEditor.scrollLeft;
    });

    codeEditor.addEventListener('input', () => {
        line_counter();
    });

    codeEditor.addEventListener('keydown', (e) => {
        let { keyCode } = e;
        let { value, selectionStart, selectionEnd } = codeEditor;

        if (keyCode === 9) {  // TAB = 9
            e.preventDefault();
            codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
            codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
        }
    });

    codeEditor.value = htmlTemplateStr;
    line_counter();
}

export default function styleEditors(){
    styleEditor(JS_TEXTAREA, JS_LINE);
    styleEditor(HTML_TEXTAREA, HTML_LINE);
    styleEditor(CSS_TEXTAREA, CSS_LINE);
}
