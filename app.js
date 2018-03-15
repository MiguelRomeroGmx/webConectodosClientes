
var config = {
    apiKey: "AIzaSyD8J3jekYrkisaoZjTLLoI8JvS6pTLGHEQ",
    authDomain: "tablero-f9941.firebaseapp.com",
    databaseURL: "https://tablero-f9941.firebaseio.com",
    projectId: "tablero-f9941",
    storageBucket: "",
    messagingSenderId: "825618365042"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var printStatus = document.getElementById("printStatus");
var printPaquete = document.getElementById("printPaquete");
var printCosto = document.getElementById("printCosto");
var printInicio = document.getElementById("printInicio");
var printUltPago = document.getElementById("printUltPago");
var printProxPago = document.getElementById("printProxPago");
var printAdeudo = document.getElementById("printAdeudo");
var printAntena = document.getElementById("printAntena");
var printIp = document.getElementById("printIp");
var printAp = document.getElementById("printAp");
var printCliente = document.getElementById("printCliente");
var selector = document.getElementById("selector").value;
var btnEditar = document.getElementById("btnEditar");
var btnAgregar = document.getElementById("btnAgregar");
var btnActivar = document.getElementById("btnActivar");
var btnGuardar = document.getElementById("btnGuardar");
var btnCancelar = document.getElementById("btnCancelar");
var selector1 = document.getElementById("selector");
var numClientes = document.getElementById("numClientes");
var btnRegistrarPago = document.getElementById("registrarPago");
var btnGuardarPago = document.getElementById("btnGuardarPago");
var btnCancelarPago = document.getElementById("btnCancelarPago");

var paquete;
var costo;
var inicio;
var ultPago;
var proxPago;
var adeudo;
var antena;
var ip;
var ap;
var estado;
var folio;
var numPago;
var rgAdeudo;
var cantidadPagos;

var cliente = selector.toLowerCase();
var validacionCodigo;
var validacionPaquete;
var validacionCosto;
var validacionFechaInicio;
var validacionUltimoPago;
var validacionProximoPago;
var validacionAntena;
var validacionAp;
var validacionIp;
var validacionAdeudo;
var validacionCantidad;
var validacionTipoPago;
var validacionFechaPago;

var codigoAsignado;
var paqSeleccionado;
var rentaSeleccionada;
var fechaInicioSeleccionada;
var ultimoPagoSeleccionado;
var proximoPagoSeleccionado;
var antenaSeleccionada;
var apSeleccionado;
var ipSeleccionada;
var adeudoSeleccionado;
var confirmEditar;
var msgAgregar;
var cantidadPagada;
var tipoPago;
var fechaPago;


var cantClientes = firebase.database().ref().child("clientes/cantidad");

cantClientes.on("value", function (snaptshot) {
    let cantActivos = 0;
   cantClientes = snaptshot.val();
   
   console.log(cantClientes);
    for (let i = 1; i <= cantClientes; i++) {
        var c = i.toString();
        if (c<10) {
            var codigo = firebase.database().ref().child("clientes/conect-00" + c + "/codigo");
            var cantEstado = firebase.database().ref().child("clientes/conect-00" + c + "/estado")
        }else{       
            var codigo = firebase.database().ref().child("clientes/conect-0" + c + "/codigo");
            var cantEstado = firebase.database().ref().child("clientes/conect-0" + c + "/estado")
        }
        codigo.on("value", function (snaptshot) {
            codigo = snaptshot.val();
            console.log(codigo);
            var x = document.getElementById("selector");
            var option = document.createElement("option");
            codigo = codigo.toUpperCase();
            option.text = codigo;
            x.add(option);
        });
        
        cantEstado.on("value", function (snaptshot) {
           cantEstado = snaptshot.val();
           if (cantEstado == "ACTIVO") {
              cantActivos++;
            //   console.log(cantActivos);
               numClientes.innerHTML = cantActivos;
           } 
        });
        
    };
    
});


function ShowSelected(){
selector = document.getElementById("selector").value;
cliente = selector.toLowerCase();
printCliente.innerHTML = selector.toUpperCase();


paquete = firebase.database().ref().child("clientes/" + cliente + "/paq");
costo = firebase.database().ref().child("clientes/" + cliente + "/costo");
inicio = firebase.database().ref().child("clientes/" + cliente + "/inicio");
ultPago = firebase.database().ref().child("clientes/" + cliente + "/ultPago");
proxPago = firebase.database().ref().child("clientes/" + cliente + "/proxPago");
adeudo = firebase.database().ref().child("clientes/" + cliente + "/adeudo");
antena = firebase.database().ref().child("clientes/" + cliente + "/antena");
ip = firebase.database().ref().child("clientes/" + cliente + "/ip");
ap = firebase.database().ref().child("clientes/" + cliente + "/ap");
estado = firebase.database().ref().child("clientes/" + cliente + "/estado");
cantidadPagos = firebase.database().ref().child("clientes/" + cliente + "/cantPagos");

cantidadPagos.on("value", function (snaptshot) {
   cantidadPagos = snaptshot.val(); 
});


estado.on("value", function (snaptshot) {
   estado = snaptshot.val();
   printStatus.innerHTML = estado;
   if (estado == "ACTIVO") {
       btnActivar.innerHTML = "Desactivar";
   } else{
       btnActivar.innerHTML = "Activar";
   }
});


paquete.on("value", function(snaptshot){
	paquete = snaptshot.val();
	printPaquete.innerHTML = paquete;
	console.log(paquete);
});

costo.on("value", function(snaptshot){
	costo = snaptshot.val();
	printCosto.innerHTML = costo;
	console.log(costo);
});

inicio.on("value", function(snaptshot){
	inicio = snaptshot.val();
	printInicio.innerHTML = inicio;
	console.log(inicio);
});

ultPago.on("value", function(snaptshot){
	ultPago = snaptshot.val();
	printUltPago.innerHTML = ultPago;
	console.log(ultPago);
});

proxPago.on("value", function(snaptshot){
	proxPago = snaptshot.val();
	printProxPago.innerHTML = proxPago;
	console.log(proxPago);
});

adeudo.on("value", function(snaptshot){
	adeudo = snaptshot.val();
	printAdeudo.innerHTML = adeudo;
	console.log(adeudo);
});

antena.on("value", function(snaptshot){
	antena = snaptshot.val();
	printAntena.innerHTML = antena;
	console.log(antena);
});

ip.on("value", function(snaptshot){
	ip = snaptshot.val();
	printIp.innerHTML = ip;
	console.log(ip);
});

ap.on("value", function(snaptshot){
	ap = snaptshot.val();
	printAp.innerHTML = ap;
	console.log(ap);
});

}


btnAgregar.addEventListener("click", function () {
    console.log("Agregar");
    $("#formAgregar").removeClass("collapse");
    $("#tablaClientes").addClass("collapse");
    validacionCodigo = true;
    confirmEditar = 0;
    estado = "ACTIVO";
    var nuevoCliente = (cantClientes + 1).toString();
    if (cantClientes < 10) {
        codigoAsignado = "conect-00" + nuevoCliente;
    }else{
    codigoAsignado = "conect-0" + nuevoCliente;
    }
    var nuevoCodigo = codigoAsignado.toUpperCase();
    console.log(nuevoCodigo);
    agrCodCliente.innerHTML = nuevoCodigo;  
});


btnEditar.addEventListener("click", function () {
   console.log("Editar");
    $("#formAgregar").removeClass("collapse");
    $("#tablaClientes").addClass("collapse");
    confirmEditar = 1;
    validacionCodigo = true;
     var formulario = document.getElementsByName('formAgregar')[0],
         elementos = formAgregar.elements;
    editar(cliente);
});


btnActivar.addEventListener("click", function () {
    console.log("Eliminar");
    if (estado == "ACTIVO") {
        desactivar(cliente);
    }else{
        activar(cliente);
    }
    
    
});

btnGuardar.addEventListener("click", function () {
    console.log("Guardar");
    var formulario = document.getElementsByName('formAgregar')[0],
    elementos = formAgregar.elements;
    validar();    
});

btnGuardarPago.addEventListener("click", function () {
   var formularioPago = document.getElementById('formRegPago')[0],
   elementos = formRegPago.elements;
   validarPago(); 
});

btnCancelar.addEventListener("click", function () {
    console.log("Cancelar");
    $("#formAgregar").addClass("collapse");
    $("#tablaClientes").removeClass("collapse");

    
});

btnCancelarPago.addEventListener("click", function () {
    $("#formRegPago").addClass("collapse");
    $("#tablaClientes").removeClass("collapse");
});

btnRegistrarPago.addEventListener("click", function () {
    $("#formRegPago").removeClass("collapse");
    $("#tablaClientes").addClass("collapse"); 
    var hoy = new Date();
    var mes = hoy.getMonth() + 1;
    var year = hoy.getFullYear();

    folio = cliente + "pgdo-" + year + "-" + mes + cantidadPagos;

    rgAdeudo = adeudo;
    adeudoPago.innerHTML = rgAdeudo;
    clientePago.innerHTML = cliente.toUpperCase();
    folioPago.innerHTML = folio.toUpperCase();
});

var validarCodigo = function () {
    
};

var validarPaquete = function () {
    console.log("validar Paquete");
    if (formAgregar.agrPaq1.checked == true || formAgregar.agrPaq2.checked == true || formAgregar.agrPaq3.checked == true || formAgregar.agrPaq4.checked == true) {
        validacionPaquete = true;

        if (formAgregar.agrPaq1.checked == true) {
            console.log(agrPaq1.value);
            paqSeleccionado = agrPaq1.value;
        } else if (formAgregar.agrPaq2.checked == true){
            console.log(agrPaq2.value);
            paqSeleccionado = agrPaq2.value;
        } else if(formAgregar.agrPaq3.checked == true){
            console.log(agrPaq3.value);
            paqSeleccionado = agrPaq3.value;
        } else if (formAgregar.agrPaq4.checked == true) {
            console.log(agrPaq4.value);
            paqSeleccionado = agrPaq4.value;
        }

    }else {
        alert("Seleccione el paquete contratado");
        validacionPaquete = false;
        // e.preventDefault();
    }
    
};


var validarRenta = function () {
    console.log("Validar Renta");
    if (formAgregar.agrCosto1.checked == true || formAgregar.agrCosto2.checked == true || formAgregar.agrCosto3.checked == true || formAgregar.agrCosto4.checked == true) {
        validacionCosto = true;
        if (formAgregar.agrCosto1.checked == true) {
            console.log(agrCosto1.value);
            rentaSeleccionada = agrCosto1.value;
        } else if (formAgregar.agrCosto2.checked == true){
            console.log(agrCosto2.value);
            rentaSeleccionada = agrCosto2.value;
        } else if(formAgregar.agrCosto3.checked == true){
            console.log(agrCosto3.value);
            rentaSeleccionada = agrCosto3.value;
        } else if (formAgregar.agrCosto4.checked == true) {
            console.log(agrCosto4.value);
            rentaSeleccionada = agrCosto4.value;
        }
    } else {
        alert("Seleccione la renta contratada");
        validacionCosto = false;

    }
};


var validarFechaInicio = function () {
   if (formAgregar.agrFechaInicio.value == 0) {
      alert("Seleccione fecha de Inicio"); 
        validacionFechaInicio = false;
   }else{
     console.log("Validar fecha");
     validacionFechaInicio = true;
     fechaInicioSeleccionada = agrFechaInicio.value;
   }

};

var validarUltimoPago = function () {
    if (formAgregar.agrUltPago.value == 0) {
        alert("Seleccione la Fecha del ultimo pago");
        validacionUltimoPago = false;
    } else{

        console.log("Ultimo Pago");
        validacionUltimoPago = true;
        ultimoPagoSeleccionado = agrUltPago.value;
    }

};

var validarProximoPago = function () {
    if (formAgregar.agrProxPago.value == 0) {
        alert("Seleccione la fecha del próximo pago");
        validacionProximoPago = false;
    } else{
        console.log("Proximo pago");
        validacionProximoPago = true;
        proximoPagoSeleccionado = agrProxPago.value;
    }
};


var validarAntena = function () {
    console.log(formAgregar.agrAntena.value);
    validacionAntena = true;
    antenaSeleccionada = formAgregar.agrAntena.value;
};

var validarAp = function () {
    console.log(formAgregar.agrAp.value);
    validacionAp = true;
    apSeleccionado = formAgregar.agrAp.value;
};

var validarIp = function () {
    if (formAgregar.agrIp.value == 0) {
        validacionIp = false;
        alert("Ingrese la IP asignada");
    } else {
        validacionIp = true;
        ipSeleccionada = agrIp.value;
    }
};

var validarAdeudo = function () {
  validacionAdeudo = true;
  adeudoSeleccionado = formAgregar.agrAdeudo.value;  
};

 function validar() {
       // validarCodigo();
        validarPaquete();
        validarRenta();
        validarFechaInicio();
        validarUltimoPago();
        validarProximoPago();
        validarAntena();
        validarAp();
        validarIp();
        validarAdeudo();

        if (validacionCodigo == true && validacionPaquete == true && validacionCosto == true && validacionFechaInicio == true && validacionUltimoPago == true && 
            validacionProximoPago == true && validacionAntena == true && validacionAp == true && validacionIp == true) {
             console.log("validacion correcta");
             console.log("Codigo Asignado: " + codigoAsignado);
             console.log("Paquete seleccionado: " + paqSeleccionado);
             console.log("Reanta Seleccionada: " + rentaSeleccionada);
             console.log("Fecha de inicio: " + fechaInicioSeleccionada);
             console.log("Fecha de Ultimo pago: " + ultimoPagoSeleccionado);
             console.log("Fecha Proximo pago: " + proximoPagoSeleccionado);
             console.log("Antena seleccionada: " + antenaSeleccionada);
             console.log("AP selecionado: " + apSeleccionado);
             console.log("IP asiganada: " + ipSeleccionada);
             console.log("Adedudo: " + adeudoSeleccionado);
             
             if (confirmEditar == 0) {
                 cantClientes++;
                 msgAgregar = 1;
             } else{
                 msgAgregar = 0;
             }
             
             
            actualizarBd();

             
        }
       
        
    };

    function actualizarBd() {
        firebase.database().ref("clientes/" + codigoAsignado + "/status").set(estado);
        firebase.database().ref("clientes/" + codigoAsignado + "/paq").set(paqSeleccionado);
        firebase.database().ref("clientes/" + codigoAsignado + "/costo").set(rentaSeleccionada);
        firebase.database().ref("clientes/" + codigoAsignado + "/inicio").set(fechaInicioSeleccionada);
        firebase.database().ref("clientes/" + codigoAsignado + "/ultPago").set(ultimoPagoSeleccionado);
        firebase.database().ref("clientes/" + codigoAsignado + "/proxPago").set(proximoPagoSeleccionado);
        firebase.database().ref("clientes/" + codigoAsignado + "/antena").set(antenaSeleccionada);
        firebase.database().ref("clientes/" + codigoAsignado + "/ap").set(apSeleccionado);
        firebase.database().ref("clientes/" + codigoAsignado + "/ip").set(ipSeleccionada);
        firebase.database().ref("clientes/" + codigoAsignado + "/adeudo").set(adeudoSeleccionado);
        firebase.database().ref("clientes/" + codigoAsignado + "/codigo").set(codigoAsignado);
        firebase.database().ref("clientes/cantidad").set(cantClientes);

        if (msgAgregar == 1) {
           alert("Cliente agregado exitosamente");
        }else{   
            alert("Cliente editado exitosamente");
        }
    };

    function editar() {
        console.log(cliente);
        var editCliente = cliente.toUpperCase();
        agrCodCliente.innerHTML = editCliente;
        editarCliente.innerHTML = "Editar Cliente: ";
        codigoAsignado = cliente;

        
        formAgregar.agrAdeudo.value = adeudo;
        formAgregar.agrProxPago.value = proxPago;
        formAgregar.agrUltPago.value = ultPago;
        formAgregar.agrFechaInicio.value = inicio;
        formAgregar.agrIp.value = ip;
        formAgregar.agrAp.value = ap;
        formAgregar.agrAntena.value = antena;
        
        console.log(paquete);
        console.log(costo);
        
       switch (paquete) {
            case "3 MB":
               formAgregar.agrPaq1.checked = true;
               break;
            case "5 MB":
                formAgregar.agrPaq2.checked = true;
                break;
            case "7 MB":
                formAgregar.agrPaq3.checked = true;
                break;
            case "10 MB":
                formAgregar.agrPaq4.checked = true;
       
           default:
               break;
       }
    
       switch (costo) {
            case "$400.00":
               formAgregar.agrCosto1.checked = true;
               break;
            case "$600.00":
                formAgregar.agrCosto2.checked = true;
                break;
            case "$800.00":
                formAgregar.agrCosto3.checked = true;
                break;
            case "$1,000.00":
                formAgregar.agrCosto4.checked = true;
                break;
           default:
               break;
       }
    };

    function desactivar() {
         codigoAsignado = cliente;
         estado = "INACTIVO";
         printStatus.innerHTML = estado;
         firebase.database().ref("clientes/" + codigoAsignado + "/estado").set(estado);
         clientesActivos();
          alert("Cliente desactivado exitosamente");
          
    };

    function activar() {
        codigoAsignado = cliente;
        estado = "ACTIVO";
        printStatus.innerHTML = estado;
        firebase.database().ref("clientes/" + codigoAsignado + "/estado").set(estado);
        clientesActivos();
        alert("Cliente activado exitosamente");
    };


   function clientesActivos() {
    let cantActivos = 0;
     for (let i = 1; i <= cantClientes; i++) {
         var c = i.toString();
         if (c < 10) {
             var cantEstado = firebase.database().ref().child("clientes/conect-00" + c + "/estado")
         } else {
             var cantEstado = firebase.database().ref().child("clientes/conect-0" + c + "/estado")
         }
         
         cantEstado.on("value", function (snaptshot) {
             cantEstado = snaptshot.val();
             if (cantEstado == "ACTIVO") {
                 cantActivos++;
                 numClientes.innerHTML = cantActivos;
             }
         });

     };
    
   };


   var validarCantidad = function () {
       if (formRegPago.agrPagoCant.value == 0) {
           alert("Introduzca la cantidad pagada");
           validacionCantidad = false;
       }else{
            validacionCantidad = true;
            cantidadPagada = agrPagoCant.value;
            console.log(cantidadPagada);
            
       }

   };

   var validarTipoPago = function () {
       validacionTipoPago = true;
       tipoPago = formRegPago.tipoPago.value;
       console.log(tipoPago);
       
   };

   var validarFechaPago = function () {
       if (formRegPago.fechaPago.value == 0) {
        alert("Seleccione la Fecha del pago");
        validacionFechaPago = false;
    } else{

        console.log("Fecha Pago");
        validacionFechaPago = true;
        fechaPago = formRegPago.fechaPago.value;
        console.log(fechaPago);
        
    }
   };


   function validarPago() {
    validarCantidad();
    validarTipoPago();
    validarFechaPago();   
    
    if (validacionCantidad == true && validacionTipoPago == true && validacionFechaPago == true) {
        console.log(cantidadPagada);
        console.log(tipoPago);
        console.log(fechaPago);
        adeudo = adeudo - cantidadPagada;
        alert("Pago registrado exitosamente");
        cantidadPagos++;
        guardarPago();
    }else{
    
    alert("validacion Incorrecta");
    }
   };

   function guardarPago() {
      firebase.database().ref("clientes/" + cliente + "/ultPago").set(fechaPago);
      firebase.database().ref("clientes/" + cliente + "/adeudo").set(adeudo);
      firebase.database().ref("clientes/" + cliente + "/cantPagos").set(cantidadPagos);
       firebase.database().ref("clientes/" + cliente + "/pagos/" + folio + "/cantidad").set(cantidadPagada);
       firebase.database().ref("clientes/" + cliente + "/pagos/" + folio + "/tipoPago").set(tipoPago);
       firebase.database().ref("clientes/" + cliente + "/pagos/" + folio + "/fecha").set(fechaPago);

        
   };