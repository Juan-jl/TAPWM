var animado = document.querySelector('.divVisor'); //Variável para animação CSS
	
function verificar()
{
	var a = parseFloat(document.getElementById("idNumA").value);
	var b = parseFloat(document.getElementById("idNumB").value);
	var c = parseFloat(document.getElementById("idNumC").value);
	var Visor;
	
	if (isNaN(a) || isNaN(b) || isNaN(c))
	{
		Visor = "Um ou mais valores que você forneceu não são um número, ou algum dos valores não foi fornecido, por favor verifique-os e tente novamente.";
		alert(Visor);
		document.getElementById("visorId").innerHTML = Visor;
	}
	else
	{
		if (Math.abs(b-c) < a && a < (b+c) && Math.abs(a-c) < b && b < (a+c) && Math.abs(a-b) < c && c < (a+b))
		{
			if (a == b && a == c)
			{
				Visor = "Os lados A, B e C correspondem a um triângulo<br><b><h3>equilátero</h3></b>";
			}
			else if (a != b && a!=c)
			{
				Visor = "Os lados A, B e C correspondem a um triângulo<br><b><h3>escaleno</h3></b>";
			}
			else 
			{
				Visor = "Os lados A, B e C correspondem a um triângulo<br><b><h3>isósceles</h3></b>";
			}
			
			document.getElementById("visorId").innerHTML = Visor;
			
		}
		else
		{
			Visor = "Os valores fornecidos não podem fazer parte de um triângulo!";
			alert(Visor);
			document.getElementById("visorId").innerHTML = Visor;
		}
	}
	//Animação
	animado.style.animation = 'none';
	setTimeout(function () {
        animado.style.animation = 'deslizar 0.5s linear';
    }, 1);
}
var resetBtn = document.getElementById('resetBtnId');
resetBtn.addEventListener('click', () => {
	
	document.getElementById("visorId").innerHTML = 'Preencha os campos acima e clique em "Verificar"';
});