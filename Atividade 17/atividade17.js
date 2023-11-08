function validar()
{
	var nome = document.forms.formulario1.elements[0].value;
	var email = document.getElementById('idEmail').value;
	var comentario = document.getElementById('idComet').value;
	var pesquisa = document.getElementsByName('rbtPesquisa');
	
	if (nome.length < 10)
	{
		alert("O nome não deve ter menos de 10 caracteres");
	}
	else if (!email.includes('@') || !email.includes('.'))
	{
		alert('O E-mail deve conter os caracteres "@" e "."');
	}
	else if (comentario.length < 20)
	{
		alert("O comentário não deve ter menos de 20 caracteres");
	}
	else
	{
	
	 for (var i = 0; i < pesquisa.length; i++)
	 {
		if (pesquisa[i].checked)
		{
		  if (pesquisa[i].value == "n")
		  {
			  alert("Que bom que você voltou a visitar esta página!");
		  }
		  if (pesquisa[i].value == "s")
		  {
			  alert("Volte sempre à esta página!");
		  }
		}
	  }
	}
	
}
//Desenvolvido por Juan Cardoso - 11/2023