const string = `
AGUINALDO ALMEIDA DA SILVA 014.103.290-33 60.00 APROVADO 
ALEX RIBEIRO DOS SANTOS 014.103.347-72 76.75 APROVADO 
CELSO JOSE DA SILVA 014.102.971-40 80.00 APROVADO 
DANIEL RAIMUNDO 014.102.978-74 56.50 APROVADO 
ELISEU APARECIDO GOMES 014.102.994-85 0.00 AUSENTE 
GILSON GONÇALVES DO PRADO 014.102.982-76 46.75 ELIMINADO 
GUSTAVO PEREIRA DOS SANTOS DA SILVA 014.102.981-03 56.25 APROVADO 
JOSE ROBERTO DOS SANTOS 014.102.975-28 49.25 ELIMINADO 
KEITON MESSIAS DA SILVA 014.102.985-47 56.50 APROVADO 
MARCILEI CAMPOS REGINATO 014.102.963-87 53.00 APROVADO 
NELSON JOSÉ NUNES 014.103.048-48 70.00 APROVADO 
VALMIR HENRIQUE DOS SANTOS 014.103.046-78 53.75 APROVADO 
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

export const resultadoFinalPedreiro = arrayCandidatosFormatado.sort((a, b) => b.nota - a.nota)
