function calcImc()
{
    var altura = parseFloat(document.getElementById("alturaId").value);
    var peso = parseFloat(document.getElementById("pesoId").value);
    var imc = peso/Math.pow(altura, 2);
    imc = Math.round(imc,1);
    var visor;

    if (imc < 18.5)
    {
        visor = "Seu IMC é de " + imc + ":<br><b>Magreza</b>";
    }
    else if (imc > 18.5 && imc < 24.9)
    {
        visor = "Seu IMC é de " + imc + ":<br><b>Normal</b>";
    }
    else if (imc > 25.0)
    {
        visor = "Seu IMC é de " + imc + ":<br><b>Sobrepeso</b>";
    }
    else if (imc > 30.0 && imc < 30.9)
    {
        visor = "Seu IMC é de " + imc + ":<br><b>Obesidade</b>";
    }
    else
    {
        visor = "Seu IMC é de " + imc + ":<br><b>Obesidade grave</b>";
    }

    document.getElementById("visorId").innerHTML = visor;
}

function limpar ()
{
    var altura = document.getElementById("alturaId").value="";
    var peso = document.getElementById("pesoId").value="";
}

//Desenvolvido por Juan Cardoso - 20/09/2021