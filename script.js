let fsList = document.querySelectorAll(".multiple-field");
for(let i = 0; i < fsList.length; i++){
    iniMultipleFieldSet(fsList[i]);
}
 
function iniMultipleFieldSet(fs){
    let addButton = document.createElement("button");
    addButton.textContent = "Adicionar";
    addButton.type = "button";
 
    fs.appendChild(addButton);
 
    let firstInput = fs.querySelector("input");
 
    addButton.addEventListener("click", function(){
        let div = document.createElement("div");
        let newInput = document.createElement("div");
        newInput.name = firstInput.name;
        newInput.type = firstInput.type
 
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.type = "button";
 
        div.appendChild(newInput);
        div.appendChild(deleteButton);
 
        deleteButton.addEventListener("click", function(){
            div.remove();
        })
 
        fs.insertBefore(div,addButton);
    })
}