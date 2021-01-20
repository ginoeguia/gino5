function obtenerdatos()
{
    let Rut=document.getElementById("Rut").value;
    let nombre=document.getElementById("nombre").value;
    let apellidop=document.getElementById("apellidop").value;
    let apellidom=document.getElementById("apellidom").value;
    let sexoH=document.getElementById("sexoH").value;
    let sexoM=document.getElementById("sexoM").value;
    let notiene=document.getElementById("notiene").value;
    let Tecnico=document.getElementById("Tecnico").value;
    let Universitario=document.getElementById("Universitario").value;
    let RA=document.getElementById("RA").value;
    let LI=document.getElementById("LI").value;
    let AR=document.getElementById("AR").value;
    let PI=document.getElementById("PI").value;
    let TR=document.getElementById("TR").value;
    let CURRICULUM=document.getElementById("CURRICULUM").value;
    let foto=document.getElementById("foto").value;
    

    document.registro.nombreobtenido.value.nombre1;
    document.registro.edadobtenida.value.edad1;
}
("input.nombre").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });

function validacion() {

    var Rut,nombre,apellidop,apellidom,sexoH,sexoM,notiene,Tecnico,Universitario,RA,LI,AR,PI,TR,CURRICULUM,foto;
    
    let Rut=document.getElementById("Rut").value;
    let nombre=document.getElementById("nombre").value;
    let apellidop=document.getElementById("apellidop").value;
    let apellidom=document.getElementById("apellidom").value;
    let sexoH=document.getElementById("sexoH").value;
    let sexoM=document.getElementById("sexoM").value;
    let notiene=document.getElementById("notiene").value;
    let Tecnico=document.getElementById("Tecnico").value;
    let Universitario=document.getElementById("Universitario").value;
    let RA=document.getElementById("RA").value;
    let LI=document.getElementById("LI").value;
    let AR=document.getElementById("AR").value;
    let PI=document.getElementById("PI").value;
    let TR=document.getElementById("TR").value;
    let CURRICULUM=document.getElementById("CURRICULUM").value;
    let foto=document.getElementById("foto").value;


    

    
    if (Rut===""||nombre===""||apellidop===""||apellidom===""||sexoH===""||sexoM===""||notiene===""||Tecnico===""||Universitario===""||RA===""||LI===""||AR===""||PI===""||TR===""||CURRICULUM===""||foto==="") {
      // Si no se cumple la condicion...
      alert('[ERROR] Rellena todo Tilin');
      return false;
    }
    else if (condicionquedebecumplirelsegundocampodelformulario) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo debe tener un valor de...');
      return false;
    }
    ...
    else if (condicionquedebecumplirelúltimocampodelformulario) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo debe tener un valor de...');
      return false;
    }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
  }