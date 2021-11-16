let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class item {
    constructor(tarea){
        this.crearDiv(tarea);
}
    crearDiv(tarea){
        let inputItem = document.createElement("input")
            inputItem.value = tarea;
            inputItem.disabled = true;
            inputItem.classList.add("item-input");
            inputItem.type = "text";
            
            
        let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("item");
            

        let botonEditar = document.createElement("button");
            botonEditar.innerHTML =  '<i class="fas fa-lock"></i>';
            botonEditar.classList.add("boton-editar");
        
            let botonRemover = document.createElement("button");
            botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
            botonRemover.classList.add("boton-remover");
           
            container.appendChild(nuevoDiv);

            nuevoDiv.appendChild(inputItem);
            nuevoDiv.appendChild(botonEditar);
            nuevoDiv.appendChild(botonRemover);
           
            
            botonEditar.addEventListener('click', function() { 
                inputItem.disabled = !inputItem.disabled
                if(inputItem.disabled) {
                    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
                } else {
                    botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
                }
            });
            
            botonRemover.addEventListener("click", function() {
                nuevoDiv.remove()
                
            })
          

            }
            }

            function chequear() {
            if(input.value != ""){
            new item (input.value) 
            input.value = ""
            }
            }

            botonAgregar.addEventListener('click', chequear);
            window.addEventListener('keydown', function(e) {
            if(e.code == "Enter") {
            chequear();
            }
            });
            
