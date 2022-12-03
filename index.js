let elementSubmit = document.querySelector(".input");
let todoList = document.querySelector(".container");
function Todo(){
    let subDiv = document.createElement("div");
    todoList.appendChild(subDiv);
    subDiv.classList.add("list");
    let h3Element = document.createElement("h3");
    subDiv.appendChild(h3Element);
    h3Element.innerHTML = elementSubmit.value;
    elementSubmit.value = ""
    
    let EditButton = document.createElement("button");
    subDiv.appendChild(EditButton);
    EditButton.innerHTML = "Edit";
    EditButton.classList.add("edit");
    // EditButton.onclick = edit;
    
    let DeleteButton = document.createElement("button");
    DeleteButton.innerHTML = "Delete"
    subDiv.appendChild(DeleteButton);
    DeleteButton.classList.add("delete");
    DeleteButton.addEventListener('click',()=>{
        todoList.removeChild(subDiv);
    })
    EditButton.addEventListener('click',()=>{
        if(EditButton.innerHTML == "Save")
            {
            EditButton.innerHTML = "Edit"
            h3Element.setAttribute('contenteditable',false);
            h3Element.style.borderBottom = "";
            }else{
                h3Element.setAttribute('contenteditable',true);
                h3Element.style.borderBottom = "1px solid";
                EditButton.innerHTML = "Save"
            }
      
    })
}


