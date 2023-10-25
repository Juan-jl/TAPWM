function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;

  this.calcularArea = function() {
    return this.base * this.altura;
  };
}

function calcAreaClick ()
{
	var base = document.getElementById('baseId').value;
	var altura = document.getElementById('alturaId').value;
	
	if (base == "" || altura ==  "")
	{
		alert("Preencha todos os campos primeiro,\nuse apenas números!");
	}
	else
	{
		var meuRetangulo = new Retangulo(base, altura);
		var areaDoRetangulo = meuRetangulo.calcularArea();
		
		alert("Área: " + areaDoRetangulo);
	}
}
/**//*---Conta-------------------------------------------------------------*//**/

function Conta(nomeCorrentista, banco, numeroConta, saldo)
{
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;

    this.getNomeCorrentista = function()
	{
        return this.nomeCorrentista;
    };

    this.setNomeCorrentista = function(nome)
	{
        this.nomeCorrentista = nome;
    };

    this.getBanco = function()
	{
        return this.banco;
    };

    this.setBanco = function(novoBanco)
	{
        this.banco = novoBanco;
    };

    this.getNumeroConta = function()
	{
        return this.numeroConta;
    };

    this.setNumeroConta = function(novoNumero)
	{
        this.numeroConta = novoNumero;
    };

    this.getSaldo = function()
	{
        return this.saldo;
    };

    this.setSaldo = function(novoSaldo)
	{
        this.saldo = novoSaldo;
    };
}

function enviarDadosClick()
{
    var nomeCorrentista = document.getElementById('nomeCorrentistaId').value;
    var nomeBanco = document.getElementById('nomeBancoId').value;
    var numeroConta = document.getElementById('numeroContaId').value;
    var saldo = document.getElementById('saldoId').value;

    if (nomeCorrentista == "" || nomeBanco == "" || numeroConta == "" || saldo == "")
	{
        alert("Preencha todos os campos primeiro!");
    }
	else
	{
        // Criar ou atualizar a instância da Conta
        conta = new Conta(nomeCorrentista, nomeBanco, numeroConta, saldo);
        alert('Os dados foram enviados, clique em "Verificar dados" para vê-los');

        document.getElementById('nomeCorrentistaId').value = "";
        document.getElementById('nomeBancoId').value = "";
        document.getElementById('numeroContaId').value = "";
        document.getElementById('saldoId').value = "";
    }
}

function verificiarDadosClick()
{
    if (!conta)
	{
        alert("Envie os dados primeiro!");
    }
	else
	{
        alert('Nome do Correntista: ' + conta.getNomeCorrentista() +
            '\nNome do banco: ' + conta.getBanco() +
            '\nNúmero da conta: ' + conta.getNumeroConta() +
            '\nSaldo: ' + conta.getSaldo());
    }
}

