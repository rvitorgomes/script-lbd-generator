/* SQL SERVER RANDOM QUERY BUILDER
*
*  Build your queries with random data
*
*  Rubens Victor Gomes
*  https://github.com/rvitorgomes
*/

const   fs = require('fs');

/* Setup Options and Database Rules */
const types = require('./lib/definition_types');

/* Random Values Generators */
const randomize = require('./lib/randomize');

/*      Funcionario
	@integer        id_fun,
	@string         nome_fun,
	@integer        ramal_fun,
	@type           turno_fun,
	@integer        cpf_fun,
	@integer        senha_fun
*/

let funcionarioSchemaFunction = () => ({
	nome_fun: randomize.randomName(),
	ramal_fun: randomize.randomInteger(4),
	turno_fun: randomize.randomType(types.turnoType),
	cpf_fun: randomize.randomInteger(10), // 11 digitos
	senha_fun: randomize.randomInteger(6), // 6 digitos
});

let funcionarioValues = randomize.randomInsert('dbo.Funcionario', funcionarioSchemaFunction, 1000);


/*      cozinha
	@integer        id_fun,
	@type           hierarquia
*/

let cozinhaSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	hierarquia: randomize.randomType(types.hierarquiaType),
})

let cozinhaValues = randomize.randomInsert('dbo.cozinha', cozinhaSchemaFunction, 1000);


/*      Enfermeiro
	@integer        id_fun,
	@type           Area,
	@type           especializacao_enf
*/

let enfermeiroSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	especializacao_enf: randomize.randomType(types.especializacaoType),
})

let enfermeiroValues = randomize.randomInsert('dbo.Enfermeiro', enfermeiroSchemaFunction, 1000);

/*      Limpeza
	@integer        id_fun,
	@integer        andar_limp
*/

let limpezaSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	andar_limp: randomize.randomInteger()
})

let limpezaValues = randomize.randomInsert('dbo.Limpeza', limpezaSchemaFunction, 1000);

/*      Medicos
	@integer        id_fun,
	@integer        CRM,
	@type           Especialidade_medico,
	@integer        ramal,
	@integer        num_sala_medico
*/

let medicoSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	CRM :  randomize.randomInteger(4),
	Especialidade_medico: randomize.randomType(types.especializacaoType),
	num_sala_medico:  randomize.randomInteger()
})

let  medicoValues = randomize.randomInsert('dbo.Medicos', medicoSchemaFunction, 1000);

/*      Pacientes
	@integer        id_paciente,
	@string         nome_paciente,
	@date           dta_nasc_paciente,
	@type           sexo_paciente,
	@text           restricao_alimentar,
	@text           restricao_medicamento,
	@integer        CPF_paciente
*/

let pacienteSchemaFunction = () => ({
	nome_paciente: randomize.randomName(),
	dta_nasc_paciente: randomize.randomDate(),
	sexo_paciente: randomize.randomType(types.sexoType),
	restricao_alimentar: 'Nenhuma',
	restricao_medicamento: 'Nenhuma',
	CPF_paciente: randomize.randomInteger(10) // 11 digitos
})

let pacienteValues = randomize.randomInsert('dbo.Pacientes', pacienteSchemaFunction, 10000);

/*      Plano_de_saude
	@integer        id_plan_saude,
	@string         Empresa,
	@type           Tipo_plano
*/

let planoSchemaFunction = () => ({
    Empresa: 'EACH',
    Tipo_plano: randomize.randomType(types.planoTypes)
})

let planoValues = randomize.randomInsert('dbo.Plano_de_saude', planoSchemaFunction, 1000);

/*      plano_saude_paciente
	@integer        id_paciente,
	@integer        id_plan_saude
*/

let pacientePlanoSchemaFunction = () => ({
	id_plan_saude: randomize.randomInteger(),
	id_paciente: randomize.randomInteger()
});

let pacientePlanoValues = randomize.randomInsert('dbo.plano_saude_paciente', pacientePlanoSchemaFunction, 1000);

/*      plano_tipo_acomodacao
	@integer        id_plan_saude,
	@integer        id_tip_acomod
*/


let planoTipoSchemaFunction = () => ({
	id_plan_saude: randomize.randomInteger(),
	id_tip_acomod: randomize.randomInteger(1)
})

let planoTipoValues = randomize.randomInsert('dbo.plano_tipo_acomodacao', planoTipoSchemaFunction, 1000);


/*      Sedes_hospital
	@integer        id_hosp,
	@string         Nome,
	@string         Endereco
*/
let hospitalSchemaFunction = () => ({
	Nome: `Hospital ${randomize.randomName()}`,
	Endereco: `Av. ${randomize.randomName()}, 1234`
})

let hospitalValues = randomize.randomInsert('dbo.Sedes_hospital', hospitalSchemaFunction, 1000);

/*      Tipo_acomodacao
	@integer        id_tip_acomod,
	@text           descricao_acomod,
	@boolean        acompanhante_acomod
*/

let acomodacaoTipoSchemaFunction = () => ({
	descricao_acomod: 'Acomodação Confortável para o paciente',
	acompanhante_acomod: randomize.randomBoolean()
})

let acomodacaoTipoValues = randomize.randomInsert('dbo.Tipo_acomodacao', acomodacaoTipoSchemaFunction, 1000);


/*      Acomodacao
	@integer        id_acomod,
	@integer        Andar,
	@integer        qtd_leitos,
	@integer        num_acomod,
	@boolean        status_leito,
	@type           especialidade_leito,
	@integer        id_hosp,
	@integer        id_tip_acomod
*/

let acomodacaoSchemaFunction = () => ({
	Andar: randomize.randomBetweeen(0, 15),
	qtd_leitos: randomize.randomInteger(),
	num_acomod: randomize.randomInteger(),
	status_leito: randomize.randomBoolean(),
	especialidade_leito: randomize.randomType(types.especializacaoType),
	id_hosp: randomize.randomInteger(),
	id_tip_acomod: randomize.randomInteger(1),
});

let acomodacaoValues = randomize.randomInsert('dbo.Acomodacao', acomodacaoSchemaFunction, 1000);

/*      Leito
	@integer        id_leito,
	@integer        num_leito,
	@boolean        status_leito,
	@integer        id_acomo
*/

let leitoSchemaFunction = () => ({
	   num_leito: randomize.randomInteger(),
	   status_leito: randomize.randomBoolean(),
	   id_acomo: randomize.randomInteger()
	});

let leitoValues = randomize.randomInsert('dbo.Leito', leitoSchemaFunction, 1000);

/*      pacientes_leito
	@integer        id_pac_lei,
	@integer        id_leito,
	@integer        id_paciente,
	@date           dta_hor_ent,
	@date           dta_hor_sai,
	@boolean        status_pac_lei
*/

let pacienteLeitoSchemaFunction = () => ({
	status_pac_lei: randomize.randomBoolean(),
	id_leito: randomize.randomInteger(),
	id_paciente: randomize.randomInteger(),
	dta_hor_ent: randomize.randomDate(),
	dta_hor_sai: randomize.randomDate()
});

let pacienteLeitoValues = randomize.randomInsert('dbo.pacientes_leito', pacienteLeitoSchemaFunction, 1000);

/*      limpeza acomodacao
	@integer        id_limp_acom,
	@integer        id_fun,
	@integer        id_acomo,
	@date           dta_hor_sol_acom,
	@date           hor_ini_limp_acom,
	@date           hor_fim_acom,
	@text           foto_limpa_acom
*/

let limpezaAcomodacaoSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	id_acomo: randomize.randomInteger(),
	dta_hor_sol_acom: randomize.randomDate(),
	hor_ini_limp_acom: randomize.randomDate(),
	hor_fim_acom: randomize.randomDate(),
	foto_limpa_acom: 'Limpeza Finalizada'
});

let limpezaAcomodacaoValues = randomize.randomInsert('dbo.limpeza_acomodacao', limpezaAcomodacaoSchemaFunction, 1000);

/*      limpeza leito
	@integer        id_limp_lei,
	@integer        id_fun,
	@integer        id_lei,
	@date           dta_hor_sol_lei,
	@date           hor_ini_limp_lei,
	@date           hor_fim_lei,
	@text           foto_limpa_lei
*/

let limpezaLeitoSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	id_leito: randomize.randomInteger(),
	dta_hor_sol_lei: randomize.randomDate(),
	dta_hor_ini_lei: randomize.randomDate(),
	dta_hor_ter_lei: randomize.randomDate(),
	foto_limpa_lei: 'Limpeza Finalizada'
});

let limpezaLeitoValues = randomize.randomInsert('dbo.limpeza_leito', limpezaLeitoSchemaFunction, 1000);

/*      Remedio
	@integer        id_remedio,
	@string         nome_remedio
*/

let remedioSchemaFunction = () => ({
	nome_remedio: 'Dipirona'
});

let remedioValues = randomize.randomInsert('dbo.Remedio', remedioSchemaFunction, 1000);

/*      Produto
	@integer        id_prod,
	@text           descricao_produto
*/

let produtoSchemaFunction = () => ({
	descricao_produto: 'Alcool'
});

let produtoValues = randomize.randomInsert('dbo.Produto', produtoSchemaFunction, 1000);

/*      produto_acomodacao
	@integer        id_prd_aco,
	@integer        id_fun,
	@integer        id_acomo,
	@integer        id_prod,
	@date           dta_hor_sol_prd,
	@date           dta_hor_ent_prd,
	@boolean        status_prod_acom
*/

let produtoAcomodacaoSchemaFunction = () => ({
	id_fun:  randomize.randomInteger(),
	id_acomo:  randomize.randomInteger(),
	id_prod:  randomize.randomInteger(),
	dta_hor_sol_prd: randomize.randomDate(),
	dta_hor_ent_prd: randomize.randomDate(),
	status_prod_acom: randomize.randomBoolean()
});

let produtoAcomodacaoValues = randomize.randomInsert('dbo.produto_acomodacao', produtoAcomodacaoSchemaFunction, 1000);

/*      produto_leito
	@integer        id_prd_lei,
	@integer        id_leito,
	@integer        id_fun,
	@integer        id_prod,
	@date           dta_hor_sol_lei,
	@date           dta_hor_ent_lei,
	@boolean        status_leito
*/

let produtoLeitoSchemaFunction = () => ({
	id_fun:  randomize.randomInteger(),
	id_leito:  randomize.randomInteger(),
	id_prod:  randomize.randomInteger(),
	dta_hor_sol_prd_lei: randomize.randomDate(),
	dta_hor_ent_prd_lei: randomize.randomDate(),
	status_leito: randomize.randomBoolean()
});

let produtoLeitoValues = randomize.randomInsert('dbo.produto_leito', produtoLeitoSchemaFunction, 1000);

/*      Refeicao
	@integer        id_refeicao,
	@date           horario,
	@text           descricao_refeicao,
	@integer        calorias
*/

let refeicaoSchemaFunction = () => ({
	horario: randomize.randomDate(),
	descricao_refeicao: `Prato Refeicao`,
	calorias: randomize.randomInteger(2)
});

let refeicaoValues = randomize.randomInsert('dbo.Refeicao', refeicaoSchemaFunction, 1000);

/*      refeicao_pacientes
	@integer        id_ref_pac,
	@integer        id_fun,
	@integer        id_paciente,
	@integer        id_refeicao,
	@boolean        status_ref_pac,
	@text           observacao_ref_pac,
	@date           dta_hor_ref_pac
*/

let refeicaoPacienteSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	id_paciente: randomize.randomInteger(),
	id_refeicao: randomize.randomInteger(),
	status_ref_pac: randomize.randomBoolean(),
	observacao_ref_pac: 'Se alimentou corretamente',
	dta_hor_ref_pac: randomize.randomDate()
});

let refeicaoPacienteValues = randomize.randomInsert('dbo.refeicao_pacientes', refeicaoPacienteSchemaFunction, 1000);

/*      remedio_paciente
	@integer        id_rem_pac,
	@integer        id_fun,
	@integer        id_fun_med,
	@integer        id_paciente,
	@integer        id_remedio,
	@date           dta_prescricao_rem_pac,
	@date           dta_hora_apl_rem_pac,
	@integer        qtd_rem_pac,
	@text           observacao_rem_pac
*/
let remedioPacienteSchemaFunction = () => ({
	id_fun: randomize.randomInteger(),
	id_paciente: randomize.randomInteger(),
	id_paciente: randomize.randomInteger(),
	id_fun_med: randomize.randomInteger(),
	id_remedio: randomize.randomInteger(),
	dta_prescricao_rem_pac: randomize.randomDate(),
	dta_hora_apl_rem_pac: randomize.randomDate(),
	qtd_rem_pac: randomize.randomInteger(),
	observacao_rem_pac: 'Reagiu bem à medicação'
});

let remedioPacienteValues = randomize.randomInsert('dbo.remedio_paciente', remedioPacienteSchemaFunction, 5000);

/*      controle_ent_sai
	@integer        id_ent_sai,
	@date           dia_hor_ent,
	@date           dia_hor_sai,
	@integer        cpf_ent_sai,
	@integer        id_acomo
*/

let controleSchemaFunction = () => ({
	id_acomo: randomize.randomInteger(),
	dia_hor_ent: randomize.randomDate(),
	dia_hor_sai: randomize.randomDate(),
	cpf_ent_sai: randomize.randomInteger(11), // 11 digitos
});

let controleValues = randomize.randomInsert('dbo.controle_ent_sai', controleSchemaFunction, 1000);

/*      fila_paciente
	@integer        id_fila_paciente,
	@integer        id_paciente,
	@date           dta_incl_fila,
	@date           dta_max_fila,
	@date           data_atend_fila,
	@integer        prioridade
*/

let filaSchemaFunction = () => ({
	id_paciente: randomize.randomInteger(),
	dta_incl_fila: randomize.randomDate(),
	dta_max_fila: randomize.randomDate(),
	dta_atend_fila: randomize.randomDate(),
	prioridade: randomize.randomBetweeen(1,10)
});

let filaValues = randomize.randomInsert('dbo.fila_paciente', filaSchemaFunction, 5000);


/*      Agenda
	@integer        id_agenda,
	@string         titulo,
	@date           dta_hor_init,
	@date           dta_hor_fin,
	@boolean        status_agenda,
	@integer        id_paciente
*/

let agendaSchemaFunction = () => ({
	titulo: `Agenda`,
	dta_hor_ini: randomize.randomDate(),
	dta_hor_fin: randomize.randomDate(),
	status_agenda: randomize.randomBoolean(),
	id_paciente: randomize.randomInteger(2)
});

let agendaValues = randomize.randomInsert('dbo.Agenda', agendaSchemaFunction, 1000);


/* Generate SQL Script
*  Note:
*  This scripts work directly into:
*   - Sql Server;
*/

// insert here the 'tableValues' that you wanna generate
const finalScript = [
];

fs.writeFileSync('script_lbd_01.txt', '');

Promise
	.all(finalScript)
	.then(finalScript => finalScript.forEach( (value, index) =>
		fs.appendFile('script_lbd_01.txt', value.map( row => '\n' + row.replace(/`/g, '') ),
		(err) => {
			if (err) throw err;
			console.log(`SQL Script ${index} Generated`);
		})
	));
