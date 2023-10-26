var imagem = document.getElementById('imgJanelaid');

function abrir ()
{
	imagem.src = 'ja.png';
	document.getElementById('labelTvId').innerHTML = "A janela<br>está aberta";
}
function fechar ()
{
	imagem.src = 'jf.png';
	document.getElementById('labelTvId').innerHTML = "Abra<br>a janela";
}
function quebrar()
{
	imagem.src = 'jq.png';
	document.getElementById('labelTvId').innerHTML = "A janela está quebrada<br>:(";
	document.getElementById('labelTvId').style.fontSize = "20px";
}

/*Olá Professora, o bloco de código abaixo 
não é necessário para abrir, fechar ou quebrar a janela,
é apenas uma funcionalidade adicional*/

function easterEgg ()
{
	document.getElementById('labelTvId').style.fontSize = "22px";
	var easterEgg = document.getElementById('ImgEasterEggId');
	easterEgg.style.display = "block";
	
	setTimeout(function() {
    easterEgg.style.display = "none";
	}, 2000);
	
}