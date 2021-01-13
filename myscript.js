	x = document.getElementById("pantalla");
	y = document.getElementById("numero");
	z = document.getElementById("resultados");



function saludar(){
	var numero = document.getElementById("pantalla").value;
	var html = [];
	for(var i = 1 ; i<=numero;i++){
		html.push(i)
	}
	document.getElementById("resultados").innerHTML= html;
}


function pares(){
	x = document.getElementById("pantalla").value;
	html = [];
	for(i=2;i<=x;i+=2){
       html.push(i)
	}
	document.getElementById("numero").innerHTML = html;
}



function impares(){
	x = document.getElementById("pantalla").value;
	html = [];
    for(i=1;i<=x;i+=2){
	  html.push(i)   
	} 
	document.getElementById("numero").innerHTML = html;
}

function prom(){
	x = document.getElementById("pantalla").value;
	html=[]
	for(i=1;i<=x;i++){
		html.push(i)   
	  } 
	  y=0
	for(i=0;i<html.length;i++){
		y+=html[i]
	}
	total = y/html.length
	  document.getElementById("numero").innerHTML =total;
}


function suma(){
	x = document.getElementById("pantalla").value;
	html=[]
	for(i=1;i<=x;i++){
		html.push(i)   
	  } 
	  y=0
	for(i=0;i<html.length;i++){
		y+=html[i]
	}
	total = y
	  document.getElementById("numero").innerHTML =total;
}


function cuadrados(){
	x = document.getElementById("pantalla").value;
	html=[]
	for(i=1;i<=x;i++){
		html.push(i)   
	  } 
	  y=[]
	for(i=0;i<html.length;i++){
		z=html[i]**2
		y.push(z)
	}
	total = y
	  document.getElementById("numero").innerHTML =total;
}