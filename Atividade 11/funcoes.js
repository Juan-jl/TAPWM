var maiorNum = (number) =>
{
	var num1 = document.getElementById("idTxtNum1").value;
	var num2 = document.getElementById("idTxtNum2").value;
	var num3 = document.getElementById("idTxtNum3").value;
	var num4 = document.getElementById("idTxtNum4").value;
	var arrMaiorNum = [num1, num2, num3, num4];
	
	if (num1 == "" || num2 == "" || num3 == "" || num4 == "")
	{
		alert("Preencha todos os campos antes de continuar!\nDigite apenas números.");
	}
	else
	{
		var maiorNumero = Math.max(...arrMaiorNum);
		alert("O maior número digitado é "  + maiorNumero + ".");
	}
}



var crescente = (number) =>
{
	var num1 = document.getElementById("idTxtNum1").value;
	var num2 = document.getElementById("idTxtNum2").value;
	var num3 = document.getElementById("idTxtNum3").value;
	var num4 = document.getElementById("idTxtNum4").value;
	var arrCrescente = [num1, num2, num3, num4];
	
	if (num1 == "" || num2 == "" || num3 == "" || num4 == "")
	{
		alert("Preencha todos os campos antes de continuar!\nDigite apenas números.");
	}
	else
	{
		arrCrescente.sort(function(a, b)
		{
			return a - b;
		});
		alert("Números em ordem crescente: "  + arrCrescente + ".");
	}
} //Desenvolvido por Juan Cardoso