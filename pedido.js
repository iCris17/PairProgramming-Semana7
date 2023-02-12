let valores = {
    cantidad: "",
    nombre: "",
    direccion: "",
    talla: "",
    color: "",
    logo: ""
}

valores.cantidad = sessionStorage.getItem("cantidad");
valores.nombre = sessionStorage.getItem("nombre");
valores.direccion = sessionStorage.getItem("direccion");
valores.talla = sessionStorage.getItem("talla");
valores.color = sessionStorage.getItem("color");
valores.logo = sessionStorage.getItem("logo");

console.log(valores);

document.getElementById("cantidad").innerText = valores.cantidad;
document.getElementById("nombre").innerText = valores.nombre;
document.getElementById("direccion").innerText = valores.direccion;
document.getElementById("detalles").innerText = `Playera Mangas 3000, Logotipo ${valores.logo}, Color ${valores.color}, Talla ${valores.talla}`;

const fecha = new Date();
let mes;

switch(fecha.getMonth()){
    case 0:
        mes = "Enero";
        break;
    case 1:
        mes = "Febrero";
        break;
    case 2:
        mes = "Marzo";
        break;
    case 3:
        mes = "Abril";
        break;        
    case 4:
        mes = "Mayo";
        break;
    case 5:
        mes = "Junio";
        break;
    case 6:
        mes = "Julio";
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Septiembre";
        break;
    case 9:
        mes = "Octubre";
        break;        
    case 10:
        mes = "Noviembre";
        break;
    case 11:
        mes = "Diciembre";
        break;
}

document.getElementById("fecha").innerText = `${fecha.getDay()} de ${mes} de ${fecha.getFullYear()}`;
document.getElementById("total").innerText = `${valores.cantidad * 345}$`;
document.getElementById("orden").innerText = `#${Math.round(Math.random() * 15000)}`;