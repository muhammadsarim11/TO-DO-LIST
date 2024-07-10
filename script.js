var input = document.getElementById("input-box");
var items = document.querySelector(".list-items");

function addTask(){
if(input.value===""){
    alert("You have to write something")
}

else{
    let li = document.createElement("li")
    li.innerHTML = input.value;
    items.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
}
input.value = "";
saveData()
}

items.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
e.target.classList.toggle("checked");
saveData()
    }
    else if(e.target.tagName ==="SPAN"){
e.target.parentElement.remove();
saveData()
    }

    

} ,false);


function saveData(){
    localStorage.setItem("data",items.innerHTML);

}

function showData(){
    items.innerHTML = localStorage.getItem("data")
}
showData()