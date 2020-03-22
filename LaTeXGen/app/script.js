const pages = document.getElementsByClassName("page");
const page = pages[0];
const fileName = document.getElementById("fileName");

var clipboard ={
    "md":"",
    "js":""
}

fileName.addEventListener("input", function(){
    if(fileName.value != "") document.title = fileName.value + " | LaTeXGen";
    else document.title = "New File | LaTeXGen";
});

function addCell(){
    unselectAll();
    page.appendChild(cellElement());
}
function unselectAll(){
    removeEmptyCells();
    if(page.querySelector(".selected") != undefined)
    page.querySelectorAll(".selected").forEach(c =>{
        renderCell(c)
        c.className = "cell unselected";
    });
}
function selectCell(c){
    unselectAll();
    c.className = "cell selected";
}
function removeEmptyCells(){
    page.querySelectorAll(".cell").forEach(c =>{
        if(c.innerText == "") page.removeChild(c);
    });
};
function removeCell(c){
    c = c || document.querySelector('.selected');
    page.removeChild(c)
};
function renderCell(c){
    c = c || document.querySelector('.selected');
    
    let r = c.querySelector(".rendered_html");
    r.innerHTML = convert(c);
    renderMathInElement(r, options)
}


function copyCell(c){
    c = c || document.querySelector('.selected');
    
    clipboard.md = c.querySelector(".md").innerText;
    clipboard.js = c.querySelector(".js").innerText; 
}
function cutCell(c){
    c = c || document.querySelector('.selected');
    
    copyCell(c);
    removeCell(c);
}
function pasteCell(){
    if(clipboard.md != "" && clipboard.js != ""){
        addCell();
        let c = page.querySelector(".selected");
        c.querySelector(".md").innerText = clipboard.md;
        c.querySelector(".js").innerText = clipboard.js;
    }
}
function changeAll(){
    unselectAll();
    page.querySelectorAll(".cell").forEach(c =>{
        renderCell(c);
    });
}

function printPage(){
    unselectAll();
    setTimeout(window.print, 1000);
}

page.addEventListener("click", e =>{
    e = parentCell(e.toElement);
    if(e != 0){
        if(e.className != "page") selectCell(e);
        else unselectAll();
    }
})

function parentCell(e){
    if(e.className == "page") return page;
    if(e.className == "cell selected") return 0;
    if(e.className == "cell unselected") return e;
    return parentCell(e.parentElement);
}
function cellElement(){
    let cell = document.createElement("div");
        cell.className = "cell selected";
    let inner_cell = document.createElement("div");
        inner_cell.className = "inner_cell";
    let input_type_js = document.createElement("div");
        input_type_js.className = "input_type";
        input_type_js.innerText = "[js]";
    let input_type_md = document.createElement("div");
        input_type_md.className = "input_type";
        input_type_md.innerText = "[md]";
    let input_area = document.createElement("div");
        input_area.className = "input_area";
    let md = document.createElement("div");
        md.setAttribute("contenteditable", true)
        md.className = "md";
    let js = document.createElement("div");
        js.setAttribute("contenteditable", true)
        js.className = "js";
    let rendered_html = document.createElement("div");
        rendered_html.className = "rendered_html";
    let div_md = document.createElement("div");
    let div_js = document.createElement("div");

    div_js.appendChild(input_type_js);
    div_js.appendChild(js);
    div_md.appendChild(input_type_md);
    div_md.appendChild(md);
    input_area.appendChild(div_md);
    input_area.appendChild(div_js);
    inner_cell.appendChild(input_area);
    inner_cell.appendChild(rendered_html);
    cell.appendChild(inner_cell);
    return cell;
}

// KaTeX

const options = {
    // "displayMode":false,
    "delimiters":[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
    ],
    "ignoredTags":["script", "noscript", "style", "textarea", "pre", "code"]
}

// convert
function convert(c){
    let m = c.querySelector(".md").innerText;
    let j = c.querySelector(".js").innerText;

    eval(j);

    j = j.split("var ").join("@").split("let ").join("@").split("const ").join("@").split(" =").join("@").split("=").join("@").split("@");
    for(let i = 1; i < j.length + 1; i+=2){
        m = m.split('#'+ j[i] + '#').join(eval(j[i]));
    }
    m = m.split(/  /).join(" ");
    m = m.split(/\+-/).join("-").split(/\+ -/).join("-");
    m = m.split(/--/).join("+").split(/- -/).join("+");
    return m;
}
//mathematical functions
function rand(t, b, e){
    t = t || "int";
    b = b || -10;
    e = e || 10;
    if(t == "int") return Math.floor(e - Math.random()*(e - b));
    if(t == "double") return e - Math.random()*(e - b)
}


let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;
    document.querySelector("#install").style.display = "block";
    document.querySelector("#install").addEventListener('click', (e) => {
        // Hide the app provided install promotion
        document.querySelector("#install").style.display = "none";
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
            } else {
            console.log('User dismissed the install prompt');
            }
        })
    });
});
