const string = `
ADRIANO RODRIGUES BACILI 014.103.053-91 52.75 APROVADO 
ALEX SANDRO DA ROSA 014.103.053-36 62.75 APROVADO 
CELSO JOSE DA SILVA 014.102.971-45 62.75 APROVADO 
JAYNE MIZAEL FERNANDES 014.103.057-53 0.00 AUSENTE 
JOSE ROBERTO DOS SANTOS 014.102.975-31 65.75 APROVADO 
MARINA SOUSA PEREIRA 014.103.258-03 59.00 APROVADO 
RONALDO PRELES DA SILVA 014.103.036-24 49.00 ELIMINADO
`

const arrayCandidatosAprovados = string.split(/\n/gi).filter(linha => linha.includes('APROVADO'))
const arrayCandidatosFormatado = []
arrayCandidatosAprovados.forEach(candidato => {
    const cpf = candidato.match(/(\d+){3}\.(\d+){3}\.(\d+){3}-(\d+){2}/gi)
    const nota = candidato.match(/\s(\d+){1,2}\.(\d+){2}\s/gi)
    const nome = candidato.match(/([A-ZÂÊÎÔÁÉÍÓÚÇ]+)\s([A-ZÂÊÎÔÁÉÍÓÚÇ]+)\s([A-ZÂÊÎÔÁÉÍÓÚÇ]+)?\s?([A-ZÂÊÎÔÁÉÍÓÚÇ]+)?\s?([A-ZÂÊÎÔÁÉÍÓÚÇ]+)?\s?([A-ZÂÊÎÔÁÉÍÓÚÇ]+)?\s?/gi)
    const objetoCandidato = {
        nome: nome[0],
        cpf: cpf[0],
        nota: parseFloat(nota[0]),
    }
    arrayCandidatosFormatado.push(objetoCandidato)
})

export const resultadoFinalPintor = arrayCandidatosFormatado.sort((a, b) => b.nota - a.nota)