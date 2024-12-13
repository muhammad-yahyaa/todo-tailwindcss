

var ul=document.getElementById("unl")
var addbtn=document.getElementById("add-btn")
var todoinput=document.getElementById("input")

addbtn.addEventListener("click",function(){
    var listitem=document.createElement('li')
    listitem.setAttribute("class","li-item")
    listitem.innerHTML=`
    <h3 for ="${todoinput}" class="content">${todoinput.value}</h3>
    <button type="button" class="del-btn" onclick="dlt(event)">DELETE</button>
    `
    ul.append(listitem)
    todoinput.value="";
})

input.addEventListener("keyup",function(event){
 if( event.key === 'Enter'){
    var listitem=document.createElement('li')
    listitem.setAttribute("class","li-item")
    listitem.innerHTML=`
    <h3 for ="${todoinput}" class="content">${todoinput.value}</h3>
    <button type="button" class="del-btn" onclick="dlt(event)">DELETE</button>
    `
    ul.append(listitem)
    todoinput.value="";
 }

})

function dlt(event){
    event.target.parentElement.remove()
}