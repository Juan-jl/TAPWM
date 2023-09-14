var ju; //ju = Jogada do usuário
var jc; //jc = Jogada do computador
var resposta;

function pedra()
{
    ju = 1;
    jogo ();
}
function papel()
{
    ju = 2;
    jogo ();
}
function tesoura()
{
    ju = 3;
    jogo ();
}

function jogo ()
{
    jc = Math.floor((Math.random() * 3) + 1); // jc = jogada do computador
    // 1 = Pedra 2 = papel 3 = tesoura
	switch (jc)
	{
		case 1: //Pedra
		{
			if (ju == 1)
			{
				resposta = "Tanto você quanto o computador escolheram <b>Pedra</b>.<br><h3 style='color: #6036ad;'>Empate!</h3>";
			}
			if (ju == 2)
			{
				resposta = "Você escolheu: <b>Papel</b><br>O computador escolheu: <b>Pedra</b><br><h3 style='color: #1b7500;'>Você venceu!</h3>";
			}
			if (ju == 3)
			{
				resposta = "Você escolheu: <b>Tesoura</b><br>O computador escolheu: <b>Pedra</b><br><h3 style='color: #a80000;'>Você perdeu!</h3>";
			}
			break;
		}
		case 2: //Papel
		{
			if (ju == 1)
			{
				resposta = "Você escolheu: <b>Pedra</b><br>O computador escolheu: <b>Papel</b><br><h3 style='color: #a80000;'>Você perdeu!</h3>";
			}
			if (ju == 2)
			{
				resposta = "Tanto você quanto o computador escolheram <b>Papel</b>.<br><h3 style='color: #6036ad;'>Empate!</h3>";
			}
			if (ju == 3)
			{
				resposta = "Você escolheu: <b>Tesoura</b><br>O computador escolheu: <b>Papel</b><br><h3 style='color: #1b7500;'>Você venceu!</h3>";
			}
			break;
		}
		case 3: //Tesoura
		{
			if (ju == 1)
			{
				resposta = "Você escolheu: <b>Pedra</b><br>O computador escolheu: <b>Tesoura</b><br><h3 style='color: #1b7500;'>Você venceu!</h3>";
			}
			if (ju == 2)
			{
				resposta = "Você escolheu: <b>Papel</b><br>O computador escolheu: <b>Tesoura</b><br><h3 style='color: #a80000;'>Você perdeu!</h3>";
			}
			if (ju == 3)
			{
				resposta = "Tanto você quanto o computador escolheram <b>Tesoura</b>.<br><h3 style='color: #6036ad;'>Empate!</h3>";
			}
			break;
		}
		
	}
		document.getElementById('lblMostrarId').innerHTML = resposta;
}
//Desenvolvido por Juan Cardoso - 13/09/2023