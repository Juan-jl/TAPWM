//Atividade 22 - Juan Cardoso

ordena (70, 28, 3, 42, 5);

function ordena (n1, n2, n3, n4, n5)
{
	var decres = [n1, n2, n3, n4, n5];
	decres.sort(function(a, b){return b-a;});
	var numsDescres = "Ordem decrescente: ";
	
	for (i=0; i < 5; i++)
	{
		if (i == 0)
		{
			numsDescres += decres[i];
		}
		else
		{
			numsDescres += ", " + decres[i];
		}
	}
	
	console.log(numsDescres);
	
	console.log("\n\nDesenvolvido por Juan Cardoso - 12/2023");
}