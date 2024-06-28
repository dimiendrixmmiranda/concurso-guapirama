const string = `
ALMIR DOS SANTOS 014.102.967-07 0.00 AUSENTE 
ANA VITÓRIA FERREIRA ISHIBASHI 014.103.063-71 0.00 AUSENTE 
CARLA VANDERLÉA DE SOUZA SANTOS 014.103.298-54 53.26 APROVADO 
IOLANDA CRISTINA DA SILVA 014.102.979-79 0.00 AUSENTE 
JEAN WILLIAN CAMPOS 014.103.056-17 53.26 APROVADO 
JÉSSICA APARECIDA DE BRITO 014.102.971-65 0.00 AUSENTE 
SAVIO RAMON RODRIGUES ROMÃO 014.103.054-57 36.62 ELIMINADO
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

export const resultadoFinalTecnicoContabilidade = arrayCandidatosFormatado.sort((a, b) => b.nota - a.nota)