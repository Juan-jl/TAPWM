function calcMedia ()
{
    var aluno = document.getElementById('nomeId').value;
    var nota1 = document.getElementById('nota1Id').value;
    var nota2 = document.getElementById('nota2Id').value;
    var nota3 = document.getElementById('nota3Id').value;
    var media;

        if (aluno == "" || nota1 == "" || nota2 == "" || nota3 == "")
        {
            alert("Erro - Preencha todos os campos!");
        }
        else
        {
            media = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
            media = media / 3;
            document.getElementById('lblMedia').innerHTML = 'A média do aluno ' + aluno + " é: " + media;

        }
}

