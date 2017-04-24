// criar um sql query builder

var fs = require('fs');
var sql = require('sql-query'), sqlQuery = sql.Query();
var axios = require('axios');

const turnoType = [
    "Matutino",
    "Vespertino",
    "Noturno"
]

var sqlInsert = sqlQuery.insert();

// funcionario
// id_fun, nome_fun, ramal_fun, turno_fun, cpf_fun, senha_fun
const funcionarioValues = new Array();
const funcionarioMaxLength = 10;

for (var index = 0; index < funcionarioMaxLength ; index++) {
     funcionarioValues[index] = sqlInsert.into('dbo.Funcionario').set({
            nome_fun : 'João',
            ramal_fun: Math.floor(Math.random() * 10000),
            turno_fun: turnoType[index % turnoType.length],
            cpf_fun: Math.floor(Math.random() * 100000000000), // 11 digitos
            senha_fun: Math.floor(Math.random() * 1000000) // 6 digitos
        }).build();
    console.log(funcionarioValues[index]);
}


// cozinha
// id_fun, hierarquia
const cozinhaValues = new Array();
const cozinhaMaxLength = 10;

const hierarquiaType = [
    "Chefe",
    "Cozinheiro",
    "Auxiliar de Cozinha",
    "Garçom"
]


for (var index = 0; index < cozinhaMaxLength ; index++) {
     cozinhaValues[index] = sqlInsert.into('dbo.cozinha').set({
            id_fun: Math.floor(Math.random() * 10),
            hierarquia: hierarquiaType[index % hierarquiaType.length]
        }).build();
    console.log(cozinhaValues[index]);
}

// enfermeiro
// id_fun, Area, especializacao_enf
const enfermeiroValues = new Array();
const enfermeiroMaxLength = 10;

const especializacaoType = [
    "Pediatria",
    "Geral",
    "Gerontologia",
    "Neurologia",
    "Psicologia",
    "Nutrição",
    "Endocrinologia",
    "Dermatologia",
    "Cardiologia",
    "Fonoaudiologia",
    "Ginecologia",
    "Homeopatia",
    "Infectologia",
    "Odontologia",
    "Oftalmologia",
    "Oncologia",
    "Ortopedia",
    "Otorrinolaringologia",
    "Pneumologia",
    "Urologia"
]

for (var index = 0; index < enfermeiroMaxLength ; index++) {
     enfermeiroValues[index] = sqlInsert.into('dbo.Enfermeiro').set({
            id_fun: Math.floor(Math.random() * 10),
            especializacao_enf: especializacaoType[index % especializacaoType.length ]
        }).build();
    console.log(enfermeiroValues[index]);
}

// limpeza
// id_fun, andar_limp
const limpezaValues = new Array();
const limpezaMaxLength = 10;

for (var index = 0; index < limpezaMaxLength ; index++) {
     limpezaValues[index] = sqlInsert.into('dbo.Limpeza').set({
            id_fun: Math.floor(Math.random() * 10),
            andar_limp: Math.floor(Math.random() * 100)
        }).build();
    console.log(limpezaValues[index]);
}

// medico
// id, crm, especialidade, ramal, num_sala
const medicoValues = new Array();
const medicoMaxLength = 10;

for (var index = 0; index < medicoMaxLength ; index++) {
     medicoValues[index] = sqlInsert.into('dbo.Medicos').set({
            id_fun: Math.floor(Math.random() * 10),
            CRM : Math.floor(Math.random() * 10000),
            Especialidade_medico: especializacaoType[index % especializacaoType.length ],
            num_sala_medico: Math.floor(Math.random() * 10000)
        }).build();
    console.log(medicoValues[index]);
}

// paciente
// id_paciente, nome_paciente, dta_nasc_paciente, sexo_paciente, restricao_alimentar, restricao_medicamento, CPF_paciente
const pacienteValues = new Array();
const pacienteMaxLength = 10;

const sexoType = [
    "F",
    "M"
]

const nameDuo = [
    "Mariana",
    "Fernando"
]

for (var index = 0; index < pacienteMaxLength ; index++) {
     pacienteValues[index] = sqlInsert.into('dbo.Pacientes').set({
            nome_paciente: nameDuo[ index % nameDuo.length ],
            dta_nasc_paciente: new Date('10/10/1991').toISOString(),
            sexo_paciente: sexoType[index % sexoType.length],
            restricao_alimentar: 'Nenhuma',
            restricao_medicamento: 'Nenhuma',
            CPF_paciente: Math.floor(Math.random() * 100000000000), // 11 digitos
        }).build();
    console.log(pacienteValues[index]);
}


// plano de saude
// id_plan_saude, Empresa, Tipo_plano
const planoValues = new Array();
const planoMaxLength = 10;

const planoTypes = [
    "Odontologico",
    "UTI",
    "Geral",
    "Sênior",
    "Funerário",
    "Infantil"
]

for (var index = 0; index < planoMaxLength ; index++) {
     planoValues[index] = sqlInsert.into('dbo.Plano_de_saude').set({
           Empresa: 'EACH',
           Tipo_plano: planoTypes[index % planoTypes.length]
        }).build();
    console.log(planoValues[index]);
}


//plano_saude_paciente
// id_paciente, id_plan_saude
const pacientePlanoValues = new Array();
const pacientePlanoMaxLength = 10;

for (var index = 0; index < pacientePlanoMaxLength ; index++) {
     pacientePlanoValues[index] = sqlInsert.into('dbo.plano_saude_paciente').set({
           id_plan_saude: Math.floor(Math.random() * 10),
           id_paciente: Math.floor(Math.random() * 10)
        }).build();
    console.log(pacientePlanoValues[index]);
}


// plano_tipo_acomodacao
// id_plan_saude, id_tip_acomod
const planoTipoValues = new Array();
const planoTipoLength = 10;

for (var index = 0; index < planoTipoLength ; index++) {
     planoTipoValues[index] = sqlInsert.into('dbo.plano_tipo_acomodacao').set({
           id_plan_saude: Math.floor(Math.random() * 10),
           id_tip_acomod: Math.floor(Math.random() * 10)
        }).build();

    console.log(planoTipoValues[index]);
}

// hospital
// id_hosp, Nome, Endereco
const hospitalValues = new Array();
const hospitalMaxLength = 10;

for (var index = 0; index < hospitalMaxLength ; index++) {
     hospitalValues[index] = sqlInsert.into('dbo.Sedes_hospital').set({
           Nome: `Hospital Santa Maria ${index}`
        }).build();

    console.log(hospitalValues[index]);
}

//tipo acomodacao
// id_tip_acomod, descricao_acomod, acompanhante_acomod
const acomodacaoTipoValues = new Array();
const acomodacaoTipoMaxLength = 10;

for (var index = 0; index < acomodacaoTipoMaxLength ; index++) {
     acomodacaoTipoValues[index] = sqlInsert.into('dbo.Tipo_acomodacao').set({
           descricao_acomod: 'Acomodação Confortável para o paciente',
           acompanhante_acomod: (( index % 2 === 0 ) ? 1 : 0)
        }).build();

    console.log(acomodacaoTipoValues[index]);
}


// acomodacao
// id_acomod, Andar, qtd_leitos, num_acomod, status_leito, especialidade_leito, id_hosp, id_tip_acomod
const acomodacaoValues = new Array();
const acomodacaoMaxLength = 10;


for (var index = 0; index < acomodacaoMaxLength ; index++) {
     acomodacaoValues[index] = sqlInsert.into('dbo.Acomodacao').set({
           Andar: index % 15,
           qtd_leitos: index % 4,
           num_acomod: index % 4,
           status_leito: (( index % 2 === 0 ) ? 1 : 0),
           especialidade_leito: especializacaoType[ index % especializacaoType.length ],
           id_hosp: Math.floor(Math.random() * 10),
           id_tip_acomod: Math.floor(Math.random() * 10)
        }).build();

    console.log(acomodacaoValues[index]);
}


// leito
// id_leito, num_leito, status_leito, id_acomo
const leitoValues = new Array();
const leitoMaxLength = 10;

for (var index = 0; index < leitoMaxLength ; index++) {
     leitoValues[index] = sqlInsert.into('dbo.Leito').set({
           num_leito: Math.floor(Math.random() * 10),
           status_leito: (( index % 2 === 0 ) ? 1 : 0),
           id_acomo: Math.floor(Math.random() * 10)
        }).build();

    console.log(leitoValues[index]);
}


// pacientes_leito
// id_pac_lei, id_leito, id_paciente, dta_hor_ent, dta_hor_sai, status_pac_lei
const pacienteLeitoValues = new Array();
const pacienteLeitoMaxLength = 10;

for (var index = 0; index < pacienteLeitoMaxLength ; index++) {
     pacienteLeitoValues[index] = sqlInsert.into('dbo.pacientes_leito').set({
           status_pac_lei: (( index % 2 === 0 ) ? 1 : 0),
           id_leito: Math.floor(Math.random() * 10),
           id_paciente: Math.floor(Math.random() * 10),
           dta_hor_ent: new Date('01/01/1994').toISOString(),
           dta_hor_sai: new Date('01/01/1994').toISOString(),
        }).build();

    console.log(pacienteLeitoValues[index]);
}

// limpeza acomodacao
// id_limp_acom, id_fun, id_acomo, dta_hor_sol_acom, hor_ini_limp_acom, hor_fim_acom, foto_limpa_acom
const limpezaAcomodacaoValues = new Array();
const limpezaAcomodacaoMaxLength = 10;

for (var index = 0; index < limpezaAcomodacaoMaxLength ; index++) {
     limpezaAcomodacaoValues[index] = sqlInsert.into('dbo.limpeza_acomodacao').set({
           id_fun: Math.floor(Math.random() * 10),
           id_acomo: Math.floor(Math.random() * 10),
           dta_hor_sol_acom: new Date('01/01/1994').toISOString(),
           hor_ini_limp_acom: new Date('01/01/1994').toISOString(),
           hor_fim_acom: new Date('01/01/1994').toISOString(),
           foto_limpa_acom: 'Limpeza Finalizda'
        }).build();

    console.log(limpezaAcomodacaoValues[index]);
}


// limpeza leito
// id_limp_lei, id_fun, id_lei, dta_hor_sol_lei, hor_ini_limp_lei, hor_fim_lei, foto_limpa_lei
const limpezaLeitoValues = new Array();
const limpezaLeitoMaxLength = 10;

for (var index = 0; index < limpezaLeitoMaxLength ; index++) {
     limpezaLeitoValues[index] = sqlInsert.into('dbo.limpeza_leito').set({
           id_fun: Math.floor(Math.random() * 10),
           id_leito: Math.floor(Math.random() * 10),
           dta_hor_sol_lei: new Date('01/01/1994').toISOString(),
           dta_hor_ini_lei: new Date('01/01/1994').toISOString(),
           dta_hor_ter_lei: new Date('01/01/1994').toISOString(),
           foto_limpa_lei: 'Limpeza Finalizda'
        }).build();

    console.log(limpezaLeitoValues[index]);
}

// remedio
// id_remedio, nome_remedio
const remedioValues = new Array();
const remedioMaxLength = 10;

for (var index = 0; index < remedioMaxLength ; index++) {
     remedioValues[index] = sqlInsert.into('dbo.Remedio').set({
           nome_remedio: 'Dipirona'
        }).build();

    console.log(remedioValues[index]);
}


// produto
// id_prod, descricao_produto
const produtoValues = new Array();
const produtoMaxLength = 10;

for (var index = 0; index < produtoMaxLength ; index++) {
     produtoValues[index] = sqlInsert.into('dbo.Produto').set({
           descricao_produto: 'Alcool'
        }).build();

    console.log(produtoValues[index]);
}

// produto_acomodacao
// id_prd_aco, id_fun, id_acomo, id_prod, dta_hor_sol_prd, dta_hor_ent_prd, status_prod_acom
const produtoAcomodacaoValues = new Array();
const produtoAcomodacaoMaxLength = 10;

for (var index = 0; index < produtoAcomodacaoMaxLength ; index++) {
     produtoAcomodacaoValues[index] = sqlInsert.into('dbo.produto_acomodacao').set({
           id_fun:  Math.floor(Math.random() * 10),
           id_acomo:  Math.floor(Math.random() * 10),
           id_prod:  Math.floor(Math.random() * 10),
           dta_hor_sol_prd: new Date('01/01/1994').toISOString(),
           dta_hor_ent_prd: new Date('01/01/1994').toISOString(),
           status_prod_acom: (( index % 2 === 0 ) ? 1 : 0),
        }).build();

    console.log(produtoAcomodacaoValues[index]);
}

// produto_leito
// id_prd_lei, id_leito, id_fun , id_prod, dta_hor_sol_lei, dta_hor_ent_lei, status_leito
const produtoLeitoValues = new Array();
const produtoLeitoMaxLength = 10;

for (var index = 0; index < produtoLeitoMaxLength ; index++) {
     produtoLeitoValues[index] = sqlInsert.into('dbo.produto_leito').set({
           id_fun:  Math.floor(Math.random() * 10),
           id_leito:  Math.floor(Math.random() * 10),
           id_prod:  Math.floor(Math.random() * 10),
           dta_hor_sol_prd_lei: new Date('01/01/1994').toISOString(),
           dta_hor_ent_prd_lei: new Date('01/01/1994').toISOString(),
           status_leito: (( index % 2 === 0 ) ? 1 : 0),
        }).build();

    console.log(produtoLeitoValues[index]);
}

// refeicao
//id_refeicao, horario, descricao_refeicao, calorias
const refeicaoValues = new Array();
const refeicaoLength = 10;

for (var index = 0; index < refeicaoLength ; index++) {
     refeicaoValues[index] = sqlInsert.into('dbo.Refeicao').set({
           horario: new Date('01/04/2017').toISOString(),
           descricao_refeicao: `Prato Refeicao ${index}`,
           calorias: Math.floor(Math.random() * 100),
        }).build();

    console.log(refeicaoValues[index]);
}


// refeicao_pacientes
// id_ref_pac, id_fun, id_paciente, id_refeicao, status_ref_pac, observacao_ref_pac, dta_hor_ref_pac
const refeicaoPacienteValues = new Array();
const refeicaoPacienteLength = 10;

for (var index = 0; index < refeicaoPacienteLength ; index++) {
     refeicaoPacienteValues[index] = sqlInsert.into('dbo.refeicao_pacientes').set({
           id_fun: Math.floor(Math.random() * 10),
           id_paciente: Math.floor(Math.random() * 10),
           id_refeicao: Math.floor(Math.random() * 10),
           status_ref_pac: (( index % 2 === 0 ) ? 1 : 0),
           observacao_ref_pac: 'Se alimentou corretamente',
           dta_hor_ref_pac: new Date('01/04/2017').toISOString(),
        }).build();

    console.log(refeicaoPacienteValues[index]);
}


// remedio_paciente
// id_rem_pac, id_fun, id_fun_med, id_paciente, id_remedio, dta_prescricao_rem_pac, dta_hora_apl_rem_pac, qtd_rem_pac, observacao_rem_pac
const remedioPacienteValues = new Array();
const remedioPacienteLength = 10;

for (var index = 0; index < remedioPacienteLength ; index++) {
     remedioPacienteValues[index] = sqlInsert.into('dbo.remedio_paciente').set({
           id_fun: Math.floor(Math.random() * 10),
           id_paciente: Math.floor(Math.random() * 10),
           id_paciente: Math.floor(Math.random() * 10),
           id_fun_med: Math.floor(Math.random() * 10),
           id_remedio: Math.floor(Math.random() * 10),
           dta_prescricao_rem_pac: new Date('01/04/2017').toISOString(),
           dta_hora_apl_rem_pac: new Date('01/04/2017').toISOString(),
           qtd_rem_pac: index,
           observacao_rem_pac: 'Reagiu bem à medicação'
        }).build();

    console.log(remedioPacienteValues[index]);
}


// controle_ent_sai
//id_ent_sai, dia_hor_ent, dia_hor_sai, cpf_ent_sai, id_acomo
const controleValues = new Array();
const controleLength = 10;

for (var index = 0; index < controleLength ; index++) {
     controleValues[index] = sqlInsert.into('dbo.controle_ent_sai').set({
           id_acomo: Math.floor(Math.random() * 10),
           dia_hor_ent: new Date('01/04/2017').toISOString(),
           dia_hor_sai: new Date('01/04/2017').toISOString(),
           cpf_ent_sai: Math.floor(Math.random() * 100000000000), // 11 digitos
        }).build();

    console.log(controleValues[index]);
}

// agenda
// id_agenda, titulo, dta_hor_init, dta_hor_fin, status_agenda, id_paciente
const agendaValues = new Array();
const agendaLength = 10;

for (var index = 0; index < agendaLength ; index++) {
     agendaValues[index] = sqlInsert.into('dbo.Agenda').set({
           titulo: `Agenda ${index}`,
           dta_hor_ini: new Date('01/04/2017').toISOString(),
           dta_hor_fin: new Date('01/04/2017').toISOString(),
           status_agenda: (( index % 2 === 0 ) ? 1 : 0),
           id_paciente: Math.floor(Math.random() * 10)
        }).build();
}



/* Generate SQL Script
*  Note:
*  This scripts doesnt work directly into Sql Server, first remove ` caracteres.
*/

const finalScript = [
    funcionarioValues,
    cozinhaValues,
    enfermeiroValues,
    limpezaValues,
    medicoValues,
    pacienteValues,
    planoValues,
    pacientePlanoValues,
    planoTipoValues,
    hospitalValues,
    acomodacaoTipoValues,
    acomodacaoValues,
    leitoValues,
    pacienteLeitoValues,
    limpezaAcomodacaoValues,
    limpezaLeitoValues,
    remedioValues,
    produtoValues,
    produtoAcomodacaoValues,
    produtoLeitoValues,
    refeicaoValues,
    refeicaoPacienteValues,
    remedioPacienteValues,
    controleValues,
    agendaValues
];

finalScript.forEach( (value, index ) =>
    fs.appendFile('script_lbd_01.txt', value , (err) => {
        if (err) throw err;
        console.log(`SQL Script ${index} Generated`);
    })
);