function selCurso ()
{
	var curso = document.getElementById('slctCursoId').value;
	if (curso > 0)
	{
		var nomeCurso;
		var infoCurso;
		switch (parseInt(curso))
		{
			case 1:
			{
				nomeCurso = "Análise e Desenvolvimento de Sistemas";
				infoCurso = "O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional."; break;
			}
			case 2:
			{
				nomeCurso = "Logística";
				infoCurso = "O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos."; break;
			}
			case 3:
			{
				nomeCurso = "Eletrônica Automotiva";
				infoCurso = "- participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;<br>- supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio;<br>- especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;<br>- elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva;<br>- gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio;<br>- supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular;<br>- é capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico;<br>- opera e faz manutenção de equipamentos em inspeção veicular;<br>- estuda a viabilização técnico-econômica de uma oficina autorizada ou independente;<br>- supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente."; break;
			}
			case 4:
			{
				nomeCurso = "Fabricação Mecânica";
				infoCurso = "O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros."; break;
			}
			case 5:
			{
				nomeCurso = "Gestão da Qualidade";
				infoCurso = "O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade (utilizando softwares específicos). Elabora ferramentas para minimizar a incidência de falhas. Através da análise de dados (Estatística), Six Sigma, conduz programas de melhorias na Qualidade da empresa. Elabora e gerencia estratégias para obtenção de certificações, garantia e auditoria da Qualidade. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação."; break;
			}
			case 6:
			{
				nomeCurso = "Processos Metalúrgicos";
				infoCurso = "O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos. Este profissional possui competências de gestão ambiental, de pessoas e processos industriais. Pode atuar em diversas empresas do ramo metal-mecânico e ainda no ensino superior."; break;
			}
		}
		window.localStorage['nomeCurso'] = nomeCurso;
		window.localStorage['infoCurso'] = infoCurso;
		
		
		/*Nova janela*/
		
		var abrirJanel = confirm("Deseja abrir uma nova janela com as informações do curso de " + nomeCurso + "?");
		
		if (abrirJanel)
		{
			var config = 'height=300,width=600,location=no,menubar=no,status=no,toolbar=no';
			var novaJanela = window.open('atividade18InfoCurso.html', '_blank', config);
		}
	}
}