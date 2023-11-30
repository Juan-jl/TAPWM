function criarobjeto (form)
{
	var inscritoAutorizado = null;
	var dataAtual = new Date();
	var dados = new FormData(form);
	
	var pessoa = {
		nome : dados.get('nome'),
		dataNasc : new Date(dados.get('data')),
		matriculado : dados.get('matriculado'),
		endereco : dados.get('endereco')
	}
	
	var idade = dataAtual.getFullYear() - pessoa.dataNasc.getFullYear();
	if (pessoa.dataNasc.getMonth() > dataAtual.getMonth() || pessoa.dataNasc.getMonth() === dataAtual.getMonth() && pessoa.dataNasc.getDate() > dataAtual.getDate())
	{idade--;}
	pessoa.idade = idade;
	
	if (pessoa.idade < 7 || pessoa.idade >17)
	{inscritoAutorizado = false;}

	else if (pessoa.matriculado == "nao")
	{inscritoAutorizado = false;}

	else {inscritoAutorizado = true;}
	
	var inscrito = "";
	if (inscritoAutorizado == true)
	{
		inscrito = "Está inscrito";
	}
	else
	{
		inscrito = "NÃO está inscrito porque não atende aos requisitos.";
	}
	
	var dia = pessoa.dataNasc.getDate().toString().padStart(2, '0');
    var mes = (pessoa.dataNasc.getMonth() + 1).toString().padStart(2, '0');
    var ano = pessoa.dataNasc.getFullYear();
	
	alert(pessoa.nome + " - " + dia + "/" + mes + "/" + ano + " - " + pessoa.endereco + " - " + inscrito);
}