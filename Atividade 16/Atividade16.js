function maiMin(valor)
{
	var texto = document.getElementById('textoId').value;
	
	if (document.getElementById('textoId').value == "")
	{
		alert("Digite um texto primeiro!");
		document.getElementById('slctMaiId').checked = false;
		document.getElementById('slctMinId').checked = false;
	}
	else if (valor == 1)//Maiúsculo
	{
		document.getElementById('textoId').value = texto.toUpperCase();
		document.getElementById('slctMinId').checked = false;
	}
	else //minúsculo
	{
		document.getElementById('textoId').value = texto.toLowerCase();
		document.getElementById('slctMaiId').checked = false;
	}
	
}
function resetar()
{
	document.getElementById('slctMaiId').checked = false;
	document.getElementById('slctMinId').checked = false;
	document.getElementById('textoId').value = "";
	document.getElementById('textoId').focus();
}