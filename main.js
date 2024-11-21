const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {    //Condicional para no agregar tareas vacias.
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    li.appendChild(p);      //Agregamos el parrafo en la lista.
    li.appendChild(addDeleteBtn());     //Agregamos el boton de eliminar a la lista.
    ul.appendChild(li);
    input.value = "";
    empty.style.display = "none";   //Quitamos el mensaje de la lista al agregar una tarea.
  }
});

function addDeleteBtn() { 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;    //Creamos la constante con la tarea y sus elementos..
    ul.removeChild(item);   //Eliminamos la tarea y sus elementos de la lista. 
    const items = document.querySelectorAll("li");   //Constante con todos los elementos de la lista restantes.
    if (items.length === 0) {     //Se evalua que sea distinto de cero.
      empty.style.display = "block";    //Si es el caso, mostramos el mensaje nuevamente.
    }
  });

  return deleteBtn;
}