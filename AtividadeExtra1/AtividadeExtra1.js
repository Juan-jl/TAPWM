function redirFuncao (botao) //redirFuncao = Redirecionar para função
{
    var num1 = Number(document.getElementById('om1').value);
    var num2 = Number(document.getElementById('om2').value);
    var num3 = Number(document.getElementById('om3').value);

    var palavra1 = document.getElementById('sc1').value;
    var palavra2 = document.getElementById('sc2').value;

    var arrNums = [num1, num2, num3];
    var arrPalavras = [palavra1, palavra2];

    if (botao == "om")
    {
        om.apply(null, arrNums);
    }
    if (botao == "sc")
    {
        sc.apply(null, arrPalavras);
    }
}

function om (n1, n2, n3)
{

    if (n1 == undefined || n1 == "" || n2 == undefined || n2 == "" || n3 == undefined || n3 == "")
    {
        alert("Erro, preencha todos os campos com números");
    }
    else
    {
        soma = n1 + n2 + n3;
        qdd1 = n1 * n1;
        qdd2 = n2 * n2;
        document.getElementById('idVisor').innerHTML = "A soma dos três números é: " + soma + "<br>O quadrado do 1º número é: " + qdd1 + "<br>O quadrado do 2º número é: " + qdd2;
    }
}
function sc (p1, p2)
{
    if (p1 == undefined || p1 == "" || p2 == undefined || p2 == "")
    {
        alert("Erro, preencha todos os campos com palavras");
    }
    else
    {
        if (p1.includes(p2))
        {
            document.getElementById('idVisor').innerHTML = p2 + " é um subconjunto da primeira palavra.";
        }
        else
        {
            document.getElementById('idVisor').innerHTML = "Não é um subconjunto<br>(A segunda palavra não é um subconjunto da primeira)";
        }
    }
}