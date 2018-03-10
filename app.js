
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
var btnEliminar = document.getElementById("btnEliminar");
var btnGuardar = document.getElementById("btnGuardar");
var btnCancelar = document.getElementById("btnCancelar");

//var selectorCliente = "CONECT-003";
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

var codigoAsignado;
var paqSeleccionado;
var rentaSeleccionada;
var fechaInicioSeleccionada;
var ultimoPagoSeleccionado;
var proximoPagoSeleccionado;
var antenaSeleccionada;
var apSeleccionado;
var ipSeleccionada;

function ShowSelected(){
selector = document.getElementById("selector").value;
cliente = selector;
printCliente.innerHTML = selector.toUpperCase();


var paquete = firebase.database().ref().child("clientes/" + cliente + "/paq");
var costo = firebase.database().ref().child("clientes/" + cliente + "/costo");
var inicio = firebase.database().ref().child("clientes/" + cliente + "/inicio");
var ultPago = firebase.database().ref().child("clientes/" + cliente + "/ultPago");
var proxPago = firebase.database().ref().child("clientes/" + cliente + "/proxPago");
var adeudo = firebase.database().ref().child("clientes/" + cliente + "/adeudo");
var antena = firebase.database().ref().child("clientes/" + cliente + "/antena");
var ip = firebase.database().ref().child("clientes/" + cliente + "/ip");
var ap = firebase.database().ref().child("clientes/" + cliente + "/ap");

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
    
});


btnEditar.addEventListener("click", function () {
   console.log("Editar");
    $("#formAgregar").removeClass("collapse");
    $("#tablaClientes").addClass("collapse");
    
});



btnEliminar.addEventListener("click", function () {
    console.log("Eliminar");


    
});

btnGuardar.addEventListener("click", function () {
    console.log("Guardar");
    var formulario = document.getElementsByName('formAgregar')[0],
    elementos = formAgregar.elements;
    validar();    
});

btnCancelar.addEventListener("click", function () {
    console.log("Cancelar");
    $("#formAgregar").addClass("collapse");
    $("#tablaClientes").removeClass("collapse");

    
});

var validarCodigo = function () {
    
    if (formAgregar.agrCodCliente.value == 0) {
        validacionCodigo = false;
        alert("Completa el campo Código cliente");
        // e.preventDefault();
    }
    else{
        console.log("validar codigo");
        codigoAsignado = agrCodCliente.value;
        validacionCodigo = true;
    }
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

 function validar() {
        validarCodigo();
        validarPaquete();
        validarRenta();
        validarFechaInicio();
        validarUltimoPago();
        validarProximoPago();
        validarAntena();
        validarAp();
        validarIp();

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
             
             alert("Cliente agregado exitosamente");
             
                         

        }
       
        
    };
