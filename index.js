let asignarValores = () => {
    sessionStorage.setItem("cantidad", document.getElementById("cantidad").value);
    sessionStorage.setItem("nombre",  document.getElementById("nombre").value);
    sessionStorage.setItem("direccion", document.getElementById("direccion").value);
    sessionStorage.setItem("talla", document.getElementById("talla").value);
    sessionStorage.setItem("color", document.querySelector('input[name="Color"]:checked').value);
    sessionStorage.setItem("logo", document.querySelector('input[name="logo"]:checked').value);
}

function preventDefault(event){
    event.preventDefault();
}
let ancore = document.getElementById("enviarDatos");
ancore.addEventListener("click", preventDefault);

function cerrarPedido() {
    if (document.getElementById("cantidad").value !== "" && 
    document.getElementById("nombre").value !== "" &&
    document.getElementById("direccion").value !== ""){
        window.location.href = "pedido.html";
        asignarValores();
    }else {
        alert("Por favor rellene todos los campos");
    }
}