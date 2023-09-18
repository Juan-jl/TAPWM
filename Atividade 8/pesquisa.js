var idades = [];
var sexos = [];
var opinioes = [];
var LblTotal = 0;

function eviarResposta()
{

	do{
	var idade = prompt('Informe a idade da pessoa usando apenas números\n(Ex.: 17)');
	if (isNaN(idade) || idade <0 || idade == "" || idade == null){alert("Digite apenas número maiores ou iguas a 0!");}
	}while(isNaN(idade) || idade <0 || idade == "" || idade == null);
	
	do{
	var sexo = prompt('Informe o sexo da pessoa. Digite\n"1" - Para mulher\n"2" - Para homem');
	if (isNaN(sexo) || sexo <1 || sexo >2 || sexo == "" || sexo == null){alert("Digite apenas os número informados!");}
	}while(isNaN(sexo) || sexo <1 || sexo >2 || sexo == "" || sexo == null);
	
	do{
	var opiniao = prompt('Informe a opinião. Digite\n"1" - Para Péssimo\n"2" - Para Regular\n"3" - Para Bom\n"4" - Para Ótimo');
	if (isNaN(opiniao) || opiniao <1 || opiniao >4 || opiniao == "" || opiniao == null){alert("Digite apenas os número informados!");}
	}while(isNaN(opiniao) || opiniao <1 || opiniao >4 || opiniao == "" || opiniao == null);
	
	idades.push(parseFloat(idade));
	sexos.push(parseFloat(sexo));
	opinioes.push(parseFloat(opiniao));
	
	LblTotal ++;
	document.getElementById("idLblTotal").innerHTML = LblTotal;
	
	mediaIdade();
	maisVelha ();
	maisNova ();
	QtdPessimo ();
	BomEOtimo ();
	mulheres ();
	homens ();
}

function mediaIdade()
{
	var qtdIdades = idades.length;
	var somaIdades = 0;
	var mediaIdades = 0;
	
	for (var i = 0; i < qtdIdades; i++)
	{
		somaIdades += idades[i];
	}
	
	mediaIdades = somaIdades/qtdIdades;
	document.getElementById("idMediaIdade").innerHTML = mediaIdades;

}
function maisVelha ()
{
	var maisVelha = Math.max(...idades);
	document.getElementById("idMaisVelha").innerHTML = maisVelha;
}
function maisNova ()
{
	var maisNova = Math.min(...idades);
	document.getElementById("idMaisNova").innerHTML = maisNova;
}
function QtdPessimo ()
{
	var qtdOpinioes = opinioes.length;
	var qtdPessimo = 0;
	
	 for (var i = 0; i < qtdOpinioes; i++)
	 {
		 if (opinioes[i] == 1)
		 {
			 qtdPessimo++;
		 }
	 }
	
	document.getElementById("idQtdPessimo").innerHTML = qtdPessimo;
}
function BomEOtimo ()
{
	var qtdOpinioes = opinioes.length;
	var BomEOtimo = 0;
	
	for (var i = 0; i < qtdOpinioes; i++)
	 {
		 if (opinioes[i] == 3 || opinioes[i] == 4)
		 {
			 BomEOtimo++;
		 }
	 }
	 porcentagem = BomEOtimo / qtdOpinioes * 100
	 document.getElementById("idBomEOtimo").innerHTML = porcentagem + "%";
	 
}

function mulheres ()
{
	var qtdSexos = sexos.length;
	var qtdMulheres = 0;
	
	for (var i = 0; i < qtdSexos; i++)
	 {
		 if (sexos[i] == 1)
		 {
			 qtdMulheres++;
		 }
	 }
	 document.getElementById("idMulheres").innerHTML = qtdMulheres;
}
function homens ()
{
	var qtdSexos = sexos.length;
	var qtdHomens = 0;
	
	for (var i = 0; i < qtdSexos; i++)
	 {
		 if (sexos[i] == 2)
		 {
			 qtdHomens++;
		 }
	 }
	 document.getElementById("idHomens").innerHTML = qtdHomens;
}

function mostrarRespostas()
{
	alert("idades = " + idades + "\n\nsexos = " + sexos + "\n\n opinioes = " + opinioes);
}