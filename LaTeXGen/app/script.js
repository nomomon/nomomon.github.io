const pages = document.getElementsByClassName("page");
const page = pages[0];

function addCell(){
    unselectAll();
    page.appendChild(cellElement());
}
function unselectAll(){
    removeEmptyCells();
    page.querySelectorAll(".cell").forEach(c =>{
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
    page.removeChild(c)
};
function renderCell(c){
        let r = c.querySelector(".rendered_html");
        let j = c.querySelector(".js")
        let m = c.querySelector(".md")
        r.innerHTML = m.innerText;
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
        input_type_js.innerText = "[javascript]";
    let input_type_md = document.createElement("div");
        input_type_md.className = "input_type";
        input_type_md.innerText = "[markdown]";
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