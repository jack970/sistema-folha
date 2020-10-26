export const FormatReal = (numero) => {
    return new Intl.NumberFormat('pt-br', {minimumFractionDigits: 2}).format(numero)
}