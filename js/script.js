function mostrarDatos(){
  var letra= document.getElementById("letra").value;
  var num=document.getElementById("n1").value
  
  var entero=parseInt(num);
  var flotante=parseFloat(num);
  var datos="Caracter: "+ letra+ "<br>Cadena: "+letra+num+ "<br>"
  alert(datos);
} 

function contenedores(){
	var i=prompt("¿Cuántos articulos/cajas desea crear?");
	var n=1;
	if(i<=8){
		while(n<=i){
			document.write('<article clas="caja" style="background-color:#000000">'+'<FONT COLOR="#ffffff">Caja '+n+'</FONT>'+'<article>');
			n++;
		}
	}
	if(i>=9){
		while(n<=i){
			document.write('<article class="caja1" style="background-color:#000000">'+'<FONT COLOR="#ffffff">Caja '+n+'</FONT>'+'<article>');
			n++;
		}
	}
    }

function sw (vote) {
	var x=parseInt(vote.zona.value);
	switch (x) {
		case 1 :
		document.getElementById("mensaje").innerHTML="Usted votó desde la zona Norte!";				
		break;
		case 2 :
		document.getElementById("mensaje").innerHTML="Usted votó desde la zona Centro!";					
		break;
		case 3 :
		document.getElementById("mensaje").innerHTML="Usted votó desde la zona Sur!";
		break;
		default:
		window.alert("Usted no ha seleccionado la zona");
		break;
		}
}

//Suma
function Suma(){
	var x=0;
	do{
		var n =parseInt(prompt("Ingrese un número a sumar (Se agregaran consecutivamente)", 0)); 
		if (n>=1) {
			var x=x+n;
			}
			else{
				break;
				}
			}
			while (n >=1){
			document.getElementById("resultadoSuma").innerHTML="El total es: "+ x;
			}
}

function opcSeleccionado(){
	var articulos=document.getElementsByTagName("article");
		
	for(var i=0;i<articulos.length;i++){
	articulos[i].style.display="none";
	}
	var valor=document.getElementById("temas").value;
	document.getElementById(valor).style.display="block";
}

//if else case 1
function leerNumeros(){
	var num1=parseInt(document.getElementById("n1").value);
	var num2=parseInt(document.getElementById("n2").value);
	var num3=parseInt(document.getElementById("n3").value);
		
	if(num1>num2 && num2>num3){
		document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num1},${num2},${num3}`;
		}
		else if(num1>num3 &&num3>num2){
		}
		else if(num2>num1 && num1>num3)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num2},${num1},${num3}`;
		}
		else if(num2>num3 && num3>num1)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num2},${num3},${num1}`;
		}
		else if(num3>num1 && num1>num2)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num3},${num1},${num2}`;
		}
		else if(num3>num2 && num2>num1)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num3},${num2},${num1}`;
		}				
}

// if else case 2
function leerImporte(){
	var num1=parseInt(document.getElementById("n4").value);
	var res;
	if(num1>=15000){
		resultado=num1*1.15;}
		else{
		resultado=num1*1.10;}

	document.getElementById("resultado").innerHTML=`El importe neto es:${resultado}`
}

//if else case 3
function leerSalario(){
	var n1=parseInt(document.getElementById("n5").value);
	var res;
	if(n1>=10)
	res=40000*1.10;
	else if(n1<10 &&n1>5)
	res=40000*1.07;
	else if(n1<5 &&n1>3)
	res=40000*1.07;
	else if(n1<3)
	res=40000*1.05;

	document.getElementById("resultado").innerHTML=`El salario anual de antiguedad de ${n1} años es de:${res}`;
  }

// While y for
function mostrarImpares(){
	var res="";
	for(var i=1;i<=100;i++){
		if(i%2==0){
		}
		else
		res+=""+i+", ";
	  }
	  document.getElementById("resultado").innerHTML=res;
	}

function leerAstericos(){
	var n1=parseInt(document.getElementById("n1").value);
	res="";
	for(i=1;i<=n1;i++){
		res+="*"+"";
		}
	alert(res);
	document.getElementById("resultado").innerHTML=n1+" astericos: "+res;
}

function mostrarTablas(){
		var res=""
		for(var i=1;i<=10;i++){
        for(var j=1;j<=10;j++){
			res+=" "+i+" * "+j+" ="+i*j+"<br>";  
			  }
		  }
		document.getElementById("resultado").innerHTML=res;
	}
	var o=0

function Boton() {
	if(o==0){
		document.getElementById("email").style.display="none";
		document.getElementById("pass").style.display="none";
		document.getElementById("ssub").style.display="none";
		o=1
		document.getElementById("ocultar").value="Mostrar";
		}
		else{
		document.getElementById("email").style.display="inline";
		document.getElementById("pass").style.display="inline";
		document.getElementById("sub").style.display="inline";
		o=0;
		document.getElementById("ocultar").value="Ocultar";
	}
}