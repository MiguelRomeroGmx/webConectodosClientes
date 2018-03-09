
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


    
});

btnCancelar.addEventListener("click", function () {
    console.log("Cancelar");
    $("#formAgregar").addClass("collapse");
    $("#tablaClientes").removeClass("collapse");

    
});



