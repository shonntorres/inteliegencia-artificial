window.onload = function()
{
	ver();
}

function ver () 
{
	var guardarcorrimiento;
	guardarcorrimiento=Number(document.getElementById("corrimiento").value)
	
	var guardarpalabra;
	guardarpalabra=String(document.getElementById("palabra").value)

	var palabraMinuscula;
	palabraMinuscula= guardarpalabra.toLocaleLowerCase();
	
	var dividir;
	dividir= palabraMinuscula.split("")

	var mostrar="";

	for (var i =0; i< dividir.length; i++) 
	{		
		var ascii=dividir[i].charCodeAt();
		var numero= ascii-guardarcorrimiento;
		var asciiletra = String.fromCharCode(numero);
		var mostrar=mostrar+asciiletra;

	};
		String(document.getElementById("text").value=mostrar)	

}
