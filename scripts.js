const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", function(){

    let texto = document.getElementById("tarea").value;

    if(texto===""){
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");

    li.textContent = texto;

    li.addEventListener("click",function(){
        li.classList.toggle("completada");
    });

    let eliminar = document.createElement("button");

    eliminar.textContent="Eliminar";

    eliminar.addEventListener("click",function(e){
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(eliminar);

    lista.appendChild(li);

    document.getElementById("tarea").value="";
});

document.getElementById("frase").addEventListener("click",function(){

fetch("https://api.quotable.io/random")
.then(res=>res.json())
.then(data=>{

document.getElementById("resultado").innerHTML=data.content;

})
.catch(()=>{

document.getElementById("resultado").innerHTML="No fue posible obtener la frase.";

});

});
