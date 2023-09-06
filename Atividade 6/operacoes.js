function operacoes()
{
var num1 = document.getElementById("num1Id").value;
var num2 = document.getElementById("num2Id").value;

if (num1 == "" || num2 == "")
        {
            alert("Erro - Preencha todos os campos!");
        }
        else
        {
            var soma = parseFloat(num1) + parseFloat(num2);
            var sub = parseFloat(num1) - parseFloat(num2);
            var prod = parseFloat(num1) * parseFloat(num2);
            var div = parseFloat(num1) / parseFloat(num2);
            var rest = parseFloat(num1) % parseFloat(num2);

            var operacoes = "A soma é " + soma + "<br>A subtração é " + sub + "<br>O produto é " + prod + "<br>A divisão é " + div + "<br>O resto é " + rest;
            document.getElementById('lblMostrarId').innerHTML = "As operações entre " + num1 + " e " + num2 + " são: " + operacoes;

        }
}


/*


*/