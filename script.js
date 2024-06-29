import { arrayDeDados } from "./dados/concursoGeral.js";
const elementoResultado = document.querySelector('#resultado')

arrayDeDados.forEach(categoria => {
    const idCategoria = categoria[0][0].categoria.split(' ').join('-').toLowerCase()
    const container = document.createElement('div')
    container.id = idCategoria
    container.classList.add('principal-resultado-container')
    const containerTitulo = document.createElement('h2')
    containerTitulo.innerHTML = categoria[0][0].categoria
    containerTitulo.classList.add('principal-resultado-container-titulo')

    const tabelaAprovados = criarTabela(categoria[0], true, true)
    const tabelaAusentes = criarTabela(categoria[1], false, false)
    const tabelaEliminados = criarTabela(categoria[2], false, false)
    container.appendChild(containerTitulo)
    container.appendChild(tabelaAprovados)
    container.appendChild(tabelaEliminados)
    container.appendChild(tabelaAusentes)

    const qtdePosicao = container.querySelectorAll('tbody tr').length
    container.querySelectorAll('.posicao').forEach((item, i) => {
        if (item != undefined) {
            item.innerHTML = `${i + 1}º`
        }
    })
    // console.log(qtdePosicao)
    elementoResultado.appendChild(container)
})

function criarTabela(arrayDeParticipantes, cabecalho = false) {
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    if (cabecalho) {
        const trHead = document.createElement('tr')
        const tdPosicao = document.createElement('td')
        tdPosicao.innerHTML = 'POSIÇÃO'
        const tdNome = document.createElement('td')
        tdNome.innerHTML = 'NOME'
        const tdInscricao = document.createElement('td')
        tdInscricao.innerHTML = 'INSCRIÇÃO'
        const tdNota = document.createElement('td')
        tdNota.innerHTML = 'NOTA'
        const tdSituacao = document.createElement('td')
        tdSituacao.innerHTML = 'SITUAÇÃO'
        trHead.appendChild(tdPosicao)
        trHead.appendChild(tdNome)
        trHead.appendChild(tdInscricao)
        trHead.appendChild(tdNota)
        trHead.appendChild(tdSituacao)
        thead.appendChild(trHead)
    }

    const tbody = document.createElement('tbody')

    arrayDeParticipantes.forEach((participante) => {
        const trBody = document.createElement('tr')
        const tdPosicao = document.createElement('td')
        tdPosicao.classList.add('posicao')
        const tdNome = document.createElement('td')
        tdNome.innerHTML = participante.nome
        const tdInscricao = document.createElement('td')
        tdInscricao.innerHTML = participante.inscricao
        const tdNota = document.createElement('td')
        tdNota.innerHTML = participante.nota
        const tdSituacao = document.createElement('td')
        tdSituacao.innerHTML = participante.situacao
        trBody.appendChild(tdPosicao)
        trBody.appendChild(tdNome)
        trBody.appendChild(tdInscricao)
        trBody.appendChild(tdNota)
        trBody.appendChild(tdSituacao)
        tbody.appendChild(trBody)
    })

    table.appendChild(thead)
    table.appendChild(tbody)
    return table
}