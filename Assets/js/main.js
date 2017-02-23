/*jslint eqeq: true*/
/*jslint devel: true */
function profile() {
    "use strict";
    var nombre = document.getElementById("nombre").value,
        apellido = document.getElementById("apellido").value,
        dni = document.getElementById("dni").value,
        direccion = document.getElementById("direccion").value,
        frm = document.getElementsByName('contact-form')[0];
    
    document.getElementById("data").innerHTML = "<ul>" +
        "<li>Nombre: " + nombre + "</li>" +
        "<li>Apellido: " + apellido + "</li>" +
        "<li>DNI: " + dni + "</li>" +
        "<li>Dirección: " + direccion + "</li>" +
        "</ul>";
    frm.reset();
    return false;
}

function validate() {
    "use strict";
    var dni = document.getElementById("dni").value;
    
    if (dni.length == 8) {
        return profile();
    } else {
        return alert("Ingrese los 8 dígitos de su DNI");
    }
}