var ul=document.getElementById("list-items")
var inp=document.getElementById("input")
function add(){
    var items=document.createElement("li")
    var button=document.createElement("button")
    button.textContent="delete"
    items.innerHTML=inp.value+"<button onclick='del(event)'>delete</button>"
    ul.append(items)
    clear()
}
function del(event){
    event.target.parentElement.remove()
}
function clear(){
    inp.value=""
}