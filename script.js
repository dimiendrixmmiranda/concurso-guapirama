import { resultadoFinalAdvogado } from "./dados/concurso-advogados.js"
import { resultadoFinalAgenteEndemias } from "./dados/concurso-agenteDeEndemias.js"
import { resultadoFinalApoioEducacional } from "./dados/concurso-apoioEducacional.js"
import { resultadoFinalAuxiliarServicosGerais } from "./dados/concurso-auxiliar-servicosGerais.js"
import { resultadoFinalAuxiliarAdm } from "./dados/concurso-auxiliarAdm.js"
import { resultadoFinalAuxiliarCreche } from "./dados/concurso-auxiliarDeCreche.js"
import { resultadoFinalAuxiliarObras } from "./dados/concurso-auxiliarDeObras.js"
import { resultadoFinalCoveiro } from "./dados/concurso-coveiro.js"
import { resultadoFinalEnfermeiro } from "./dados/concurso-enfermeiro.js"
import { resultadoFinalFarmaceutico } from "./dados/concurso-farmaceutico.js"
import { resultadoFinalFisioterapeuta } from "./dados/concurso-fisioterapeuta.js"
import { resultadoFinalMedico } from "./dados/concurso-medico.js"
import { resultadoFinalMotorista } from "./dados/concurso-motorista.js"
import { resultadoFinalOdontologo } from "./dados/concurso-odontologo.js"
import { resultadoFinalOperadorMaquinasAgricolas } from "./dados/concurso-operadorMaquinasAgricolas.js"
import { resultadoFinalOrientadorSocial } from "./dados/concurso-orientadorSocial.js"
import { resultadoFinalPedreiro } from "./dados/concurso-pedreiro.js"
import { resultadoFinalPintor } from "./dados/concurso-pintor.js"
import { resultadoFinalProfessorEF } from "./dados/concurso-professorEducacaoFisica.js"
import { resultadoFinalEI } from "./dados/concurso-professorEducacaoInfantil.js"
import { resultadoFinalProfessorEnsinoFundamental } from "./dados/concurso-professorEnsinoFundamental.js"
import { resultadoFinalProfessorArtes } from "./dados/concurso-professorFundamentalArtes.js"
import { resultadoFinalIngles } from "./dados/concurso-professorIngles.js"
import { resultadoFinalPsicologo } from "./dados/concurso-psicologo.js"
import { resultadoFinalSecretarios } from "./dados/concurso-secretario.js"
import { resultadoFinalTecnicoContabilidade } from "./dados/concurso-tecnicoContabilidade.js"
const elementoResultado = document.querySelector('#resultado')

const arrayConcurso = [['Advogado', resultadoFinalAdvogado], ['Agente de Endemias', resultadoFinalAgenteEndemias], ['Apoio Educacional', resultadoFinalApoioEducacional], ['Auxiliar de Serviços Gerais', resultadoFinalAuxiliarServicosGerais], ['Auxiliar Administrativo', resultadoFinalAuxiliarAdm], ['Auxiliar de Creche', resultadoFinalAuxiliarCreche], ['Auxiliar de Obras', resultadoFinalAuxiliarObras], ['Coveiro', resultadoFinalCoveiro], ['Enfermeiro', resultadoFinalEnfermeiro], ['Farmaceutico', resultadoFinalFarmaceutico], ['Fisioterapeuta', resultadoFinalFisioterapeuta], ['Medico', resultadoFinalMedico], ['Motorista', resultadoFinalMotorista], ['Odontologista', resultadoFinalOdontologo], ['Operador De Maquinas Agrícolas', resultadoFinalOperadorMaquinasAgricolas], ['Orientador Social', resultadoFinalOrientadorSocial], ['Pedreiro', resultadoFinalPedreiro], ['Pintor', resultadoFinalPintor], ['Professor de Educação Física', resultadoFinalProfessorEF], ['Professor de Ensino Infantil', resultadoFinalEI], ['Professor Ensino Fundamental', resultadoFinalProfessorEnsinoFundamental], ['Professor de Artes', resultadoFinalProfessorArtes], ['Professor de Ingles', resultadoFinalIngles], ['Psicologo', resultadoFinalPsicologo], ['Secretarios', resultadoFinalSecretarios], ['Contabilidade', resultadoFinalTecnicoContabilidade]]

arrayConcurso.forEach((array, i) => {
    const containerResultado = gerarTabela(array[0], array[1])
    containerResultado.id = `categoria-${i + 1}`
    elementoResultado.appendChild(containerResultado)

})

function gerarTabela(titulo, arrayDeDados) {
    const container = document.createElement('div')
    container.classList.add('container')

    const tituloTabela = document.createElement('h2')
    tituloTabela.innerHTML = titulo
    tituloTabela.classList.add('container-titulo')

    const table = document.createElement('table')
    table.classList.add('container-tabela')
    const thead = document.createElement('thead')
    const trHead = document.createElement('tr')
    const tdPosicao = document.createElement('td')
    tdPosicao.innerHTML = 'Posicao'
    const tdNome = document.createElement('td')
    tdNome.innerHTML = 'Nome'
    const tdInscricao = document.createElement('td')
    tdInscricao.innerHTML = 'Inscrição'
    const tdNota = document.createElement('td')
    tdNota.innerHTML = 'NOTA'
    trHead.appendChild(tdPosicao)
    trHead.appendChild(tdNome)
    trHead.appendChild(tdInscricao)
    trHead.appendChild(tdNota)
    thead.appendChild(trHead)

    const tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)

    arrayDeDados.forEach((candidato, i) => {
        const trBody = document.createElement('tr')
        const tdPosicao = document.createElement('td')
        tdPosicao.innerHTML = `${i + 1}º`
        const tdNome = document.createElement('td')
        tdNome.innerHTML = candidato.nome
        const tdInscricao = document.createElement('td')
        tdInscricao.innerHTML = candidato.cpf
        const tdNota = document.createElement('td')
        tdNota.innerHTML = candidato.nota.toFixed(2)
        trBody.appendChild(tdPosicao)
        trBody.appendChild(tdNome)
        trBody.appendChild(tdInscricao)
        trBody.appendChild(tdNota)
        tbody.appendChild(trBody)
    })

    container.append(tituloTabela)
    container.append(table)
    return container
}