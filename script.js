function add(){
    const ul = document.querySelector("ul")
    const input = document.querySelector("input")
    const tarefa = input.value

if (input.value === ""){
    alert("Digite uma tarefa")
    return;
}

const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)
    input.value = ""
}